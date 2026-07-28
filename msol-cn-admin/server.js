const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Database = require('better-sqlite3');

const app = express();
const PORT = 3001;

// 确保目录存在
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

// 数据库初始化
const db = new Database(path.join(__dirname, 'news.db'));
db.pragma('journal_mode = WAL');
db.exec(`
  CREATE TABLE IF NOT EXISTS articles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    category TEXT DEFAULT '活动资讯',
    publish_date TEXT NOT NULL,
    summary TEXT,
    hero_image TEXT,
    content TEXT,
    status TEXT DEFAULT 'draft',
    created_at TEXT DEFAULT (datetime('now','localtime')),
    updated_at TEXT DEFAULT (datetime('now','localtime'))
  )
`);

// 中间件
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use('/uploads', express.static(uploadDir));
app.use('/admin', express.static(path.join(__dirname, 'public')));

// 图片上传配置
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const name = Date.now() + '-' + Math.random().toString(36).slice(2, 8) + ext;
    cb(null, name);
  },
});
const upload = multer({ storage, limits: { fileSize: 10 * 1024 * 1024 } });

// ============ API 接口 ============

// 获取文章列表
app.get('/api/articles', (req, res) => {
  const rows = db.prepare('SELECT id, title, slug, category, publish_date, summary, status, updated_at FROM articles ORDER BY publish_date DESC').all();
  res.json(rows);
});

// 获取单篇文章
app.get('/api/articles/:id', (req, res) => {
  const row = db.prepare('SELECT * FROM articles WHERE id = ?').get(req.params.id);
  if (!row) return res.status(404).json({ error: '文章不存在' });
  res.json(row);
});

// 根据 slug 获取文章（前端用）
app.get('/api/articles/slug/:slug', (req, res) => {
  const row = db.prepare('SELECT * FROM articles WHERE slug = ? AND status = ?').get(req.params.slug, 'published');
  if (!row) return res.status(404).json({ error: '文章不存在' });
  res.json(row);
});

// 创建文章
app.post('/api/articles', (req, res) => {
  const { title, slug, category, publish_date, summary, hero_image, content, status } = req.body;
  try {
    const result = db.prepare(
      'INSERT INTO articles (title, slug, category, publish_date, summary, hero_image, content, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
    ).run(title, slug, category || '活动资讯', publish_date, summary || '', hero_image || '', content || '', status || 'draft');
    res.json({ id: result.lastInsertRowid, message: '创建成功' });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

// 更新文章
app.put('/api/articles/:id', (req, res) => {
  const { title, slug, category, publish_date, summary, hero_image, content, status } = req.body;
  try {
    db.prepare(
      `UPDATE articles SET title=?, slug=?, category=?, publish_date=?, summary=?, hero_image=?, content=?, status=?, updated_at=datetime('now','localtime') WHERE id=?`
    ).run(title, slug, category, publish_date, summary || '', hero_image || '', content || '', status || 'draft', req.params.id);
    res.json({ message: '更新成功' });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

// 删除文章
app.delete('/api/articles/:id', (req, res) => {
  db.prepare('DELETE FROM articles WHERE id = ?').run(req.params.id);
  res.json({ message: '删除成功' });
});

// 上传图片
app.post('/api/upload', upload.single('image'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: '没有文件' });
  const url = `/uploads/${req.file.filename}`;
  res.json({ url, filename: req.file.filename });
});

// 获取已发布文章列表（前端用）
app.get('/api/news', (req, res) => {
  const rows = db.prepare(
    'SELECT id, title, slug, category, publish_date, summary, hero_image FROM articles WHERE status = ? ORDER BY publish_date DESC'
  ).all('published');
  res.json(rows);
});

app.listen(PORT, () => {
  console.log(`\n  新闻管理后台已启动:`);
  console.log(`  后台地址: http://localhost:${PORT}/admin`);
  console.log(`  API 地址: http://localhost:${PORT}/api/articles\n`);
});
