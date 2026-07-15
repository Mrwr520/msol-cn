export type NewsItem = {
  slug: string;
  date: string;
  isoDate: string;
  category: string;
  title: string;
  summary: string;
  body: string[];
  sourceUrl?: string;
  sourceLabel?: string;
};

/**
 * 新闻与集团动态。2018 中国公司新闻来自原中文站；其余条目用于多卡片展示，
 * 内容依据 MSOL 官方公司沿革及公开披露整理，并在详情页标注原始来源。
 */
export const NEWS_LIST: NewsItem[] = [
  {
    slug: 'beyond1000-2024',
    date: '2024.12.13',
    isoDate: '2024-12-13',
    category: '集团战略',
    title: 'MSOL 发布中期经营计划「Beyond1000」',
    summary: '面向长期增长与全球化发展的全新中期经营计划正式对外披露。',
    body: [
      '株式会社Management Solutions发布中期经营计划「Beyond1000」。',
      '该计划围绕企业长期增长、管理能力提升与业务平台化发展提出未来方向。',
    ],
    sourceUrl: 'https://www.nikkei.com/nkd/disclosure/tdnr/20241213538380/',
    sourceLabel: '公开披露资料',
  },
  {
    slug: 'winner-digital-2022',
    date: '2022.04.01',
    isoDate: '2022-04-01',
    category: '集团动态',
    title: 'MSOL 与 Winnersoft 成立合资企业 Winner Digital',
    summary: '集团持续拓展数字化服务能力，为企业项目与组织变革提供更全面支持。',
    body: [
      '2022年4月，MSOL与Winnersoft Co., Ltd.成立合资企业Winner Digital。',
      '这一集团发展节点进一步拓展了MSOL在数字化与项目管理领域的服务能力。',
    ],
    sourceUrl: 'https://www.msols.com/en/company/history/',
    sourceLabel: 'MSOL 官方公司沿革',
  },
  {
    slug: 'us-subsidiary-2022',
    date: '2022.02.01',
    isoDate: '2022-02-01',
    category: '全球布局',
    title: 'MSOL INC 美国子公司正式成立',
    summary: 'MSOL 推进全球业务布局，将专业项目管理支持能力延伸至更多市场。',
    body: [
      '2022年2月，MSOL INC美国子公司正式成立。',
      '美国业务据点的设立是MSOL持续推进全球化发展战略的重要节点。',
    ],
    sourceUrl: 'https://www.msols.com/en/company/history/',
    sourceLabel: 'MSOL 官方公司沿革',
  },
  {
    slug: 'management-score-2020',
    date: '2020.08.01',
    isoDate: '2020-08-01',
    category: '产品服务',
    title: 'PROEVER 管理评分服务正式上线',
    summary: '以项目管理能力诊断为核心，帮助企业更直观地识别组织管理现状。',
    body: [
      '2020年8月，项目管理能力诊断「PROEVER管理评分（Management Score）」正式上线。',
      '该服务将MSOL长期积累的项目管理知识转化为可视化的能力诊断支持。',
    ],
    sourceUrl: '/company/history',
    sourceLabel: 'MSOL 中文站发展历程',
  },
  {
    slug: 'pmo-online-2020',
    date: '2020.06.01',
    isoDate: '2020-06-01',
    category: '产品服务',
    title: '远程管理服务「PMO ONLINE」正式上线',
    summary: '面向远程办公环境推出全新管理模式，持续支持项目团队稳定推进。',
    body: [
      '2020年6月，面向远程办公时代的全新管理模式「PMO ONLINE」正式上线。',
      '服务聚焦远程环境下的沟通、项目推进与管理课题，为企业提供专业支持。',
    ],
    sourceUrl: '/company/history',
    sourceLabel: 'MSOL 中文站发展历程',
  },
  {
    slug: 'proever-launch-2019',
    date: '2019.09.01',
    isoDate: '2019-09-01',
    category: '产品服务',
    title: '项目管理软件 PROEVER SaaS 正式上线',
    summary: '将专业 PMO 知识沉淀为数字化工具，为项目管理提供可视化支持。',
    body: [
      '2019年9月，项目管理软件PROEVER（北极星）SaaS正式上线。',
      'PROEVER融合MSOL多年项目管理经验，支持课题、任务、知识与风险等信息管理。',
    ],
    sourceUrl: '/company/history',
    sourceLabel: 'MSOL 中文站发展历程',
  },
  {
    slug: '20181116',
    date: '2018.11.16',
    isoDate: '2018-11-16',
    category: '中国动态',
    title: 'MSOL 中国分公司正式成立',
    summary: '麦嵩隆管理咨询（上海）有限公司正式成立，进一步完善集团亚洲业务布局。',
    body: [
      '2018年11月16日，Management Solutions中国分公司正式成立。',
      '中国公司名称为麦嵩隆管理咨询（上海）有限公司。',
    ],
    sourceUrl: 'https://www.msols.com/en/company/history/',
    sourceLabel: '原中文站与 MSOL 官方公司沿革',
  },
];
