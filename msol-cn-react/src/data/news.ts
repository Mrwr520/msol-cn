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
    slug: 'pmi-salon-2023',
    date: '2023.05.12',
    isoDate: '2023-05-12',
    category: '活动资讯',
    title: 'MSOL受邀参加~2023PMI项目管理沙龙~对日企业项目管理实践',
    summary: 'PMI于5月12日在成都高新区举办项目管理沙龙，MSOL受邀分享全新服务概念PMOaaS®。',
    body: [],
    sourceUrl: 'https://mp.weixin.qq.com/s/jD-sxnDJnfYKC04VAhh0fA',
    sourceLabel: 'PMO达人阁 微信公众号',
  },
  {
    slug: 'pmi-rep-2023',
    date: '2023.03.17',
    isoDate: '2023-03-17',
    category: '活动资讯',
    title: 'MSOL受邀参加~2023 PMI(中国) R.E.P大会！',
    summary: 'PMI(中国)R.E.P大会在北京举行，麦嵩隆管理咨询受邀参加并荣获"大型活动最佳支持奖"。',
    body: [],
    sourceUrl: 'https://mp.weixin.qq.com/s/1mYwLO53RmLCarpihfyssQ',
    sourceLabel: 'PMO达人阁 微信公众号',
  },
  {
    slug: 'pmi-conference-2023',
    date: '2023.11.20',
    isoDate: '2023-11-20',
    category: '活动资讯',
    title: '【数智时代・汇创未来】2023年PMI项目管理大会亮点集锦',
    summary: '暌违2年，2023年PMI项目管理大会在上海召开，MSOL作为钻石赞助商出席并发表PMOaaS主题演讲。',
    body: [],
    sourceUrl: 'https://mp.weixin.qq.com/s/ifN70VL1il_sl1tw48u5gw',
    sourceLabel: 'PMO达人阁 微信公众号',
  },
  {
    slug: 'software-conference-2024',
    date: '2024.04.25',
    isoDate: '2024-04-25',
    category: '活动资讯',
    title: '【发现机遇】MSOL助力第三届中国国际软件发展大会高峰论坛',
    summary: '第三届中国国际软件发展大会高峰论坛于4月24-25日在北京国家会议中心举行，MSOL会长高桥信也先生受邀发表演讲。',
    body: [],
    sourceUrl: 'https://mp.weixin.qq.com/s/dT9tIoiYqirhr7Wbuc4PGA',
    sourceLabel: 'PMO达人阁 微信公众号',
  },
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
    slug: 'software-annual-2021',
    date: '2021.04.07',
    isoDate: '2021-04-07',
    category: '活动资讯',
    title: 'MSOL受邀参加～2021中国软件产业年会',
    summary: '2021年中国软件产业年会项目管理高峰论坛，MSOL总经理高桥辰生先生发表PMO主题演讲。',
    body: [],
    sourceUrl: 'https://mp.weixin.qq.com/s/TqCRKIiZ64yEmZgyS5fHTg',
    sourceLabel: 'PMO达人阁 微信公众号',
  },
  {
    slug: 'pmi-rep-2021',
    date: '2021.04.26',
    isoDate: '2021-04-26',
    category: '活动资讯',
    title: 'MSOL应邀参加~2021 PMI(中国) R.E.P大会！',
    summary: '2021年R.E.P大会在深圳举行，MSOL荣获PMI(中国)项目管理大会最佳支持奖，并被评为PMONG活跃企业成员。',
    body: [],
    sourceUrl: 'https://mp.weixin.qq.com/s/nwQqoNsjybnaSyC6AqEwNw',
    sourceLabel: 'PMO达人阁 微信公众号',
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
