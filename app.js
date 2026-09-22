const books = [
  {
    title: '四库全书·文渊阁本选卷', author: '清·纪昀等纂修', category: '古典藏书 · 四库全书',
    call: 'GJ-SK-001', location: '三层 馆藏文献阅览区（馆员核验）', status: '馆内阅览', restricted: true, mapFloor: 'f3', mapTarget: 'specialized',
    description: '以经、史、子、集四部统摄古代重要典籍。本馆选取代表性卷册开展馆内数字注释与眼镜导览。'
  },
  {
    title: '延绥镇志', author: '明·谭吉璁修', category: '古典藏书 · 榆林地方志',
    call: 'GJ-DFZ-018', location: '三层 馆藏文献阅览区（馆员核验）', status: '馆内阅览', restricted: true, mapFloor: 'f3', mapTarget: 'specialized',
    description: '记载延绥镇建置、边防、山川与人物，是理解明代榆林城市格局的重要地方文献。'
  },
  {
    title: '资治通鉴', author: '宋·司马光', category: '历史', call: 'K204.3/124',
    location: '二层 社会科学借阅区 H-12', status: '在馆', restricted: false, mapFloor: 'f2', mapTarget: 'comprehensive',
    description: '编年体通史巨著，以历代治乱兴衰为鉴，贯通周威烈王至五代后周世宗。'
  },
  {
    title: '梦溪笔谈', author: '宋·沈括', category: '科技史', call: 'N092/044',
    location: '三层 自然科学借阅区 C-08', status: '借出', restricted: false, mapFloor: 'f3', mapTarget: 'comprehensive',
    description: '涉及天文、数学、地理、物理、生物与工程技术，呈现宋代知识世界的广阔面貌。'
  },
  {
    title: '杜工部集', author: '唐·杜甫', category: '古典文学', call: 'I222.742/071',
    location: '二层 文学借阅区 D-16', status: '在馆', restricted: false, mapFloor: 'f2', mapTarget: 'open',
    description: '杜甫诗文别集，作品书写时代与民生，也连接着西北边塞和黄土地的历史记忆。'
  },
  {
    title: '榆林府志校注', author: '榆林市地方志办公室', category: '地方文献', call: 'K294.13/062',
    location: '三层 地方文献阅览区 L-05', status: '在馆', restricted: false, mapFloor: 'f3', mapTarget: 'specialized',
    description: '对榆林府志进行整理、点校和注释，便于当代读者进入地方历史。'
  },
  {
    title: '边塞诗中的榆林', author: '李闻远', category: '地方文献', call: 'I207.22/133',
    location: '三层 地方文献阅览区 L-09', status: '借出', restricted: false, mapFloor: 'f3', mapTarget: 'specialized',
    description: '从诗歌、地理和军事史三个维度，梳理榆林在古代边塞文学中的形象。'
  },
  {
    title: '道德经古本合校', author: '老子著·高明校', category: '哲学', call: 'B223.1/036',
    location: '二层 社会科学借阅区 B-07', status: '在馆', restricted: false, mapFloor: 'f2', mapTarget: 'comprehensive',
    description: '汇校多种传本，帮助读者比较经典文本在不同时代的流变。'
  },
  {
    title: '史记集解', author: '汉·司马迁撰', category: '古典藏书 · 史部', call: 'GJ-SB-024',
    location: '三层 馆藏文献阅览区（馆员核验）', status: '馆内阅览', restricted: true, mapFloor: 'f3', mapTarget: 'specialized',
    description: '以本纪、表、书、世家和列传构成中国早期纪传体通史的重要范式。'
  },
  {
    title: '平凡的世界', author: '路遥', category: '中国文学', call: 'I247.57/186',
    location: '二层 文学借阅区 D-03', status: '在馆', restricted: false, mapFloor: 'f2', mapTarget: 'open',
    description: '以陕北城乡生活为背景，书写普通人在时代变化中的选择、劳动与尊严。'
  },
  {
    title: '额尔古纳河右岸', author: '迟子建', category: '中国文学', call: 'I247.57/214',
    location: '二层 文学借阅区 D-05', status: '借出', restricted: false, mapFloor: 'f2', mapTarget: 'open',
    description: '以鄂温克族老人的讲述展开族群迁徙、自然记忆与现代变迁。'
  },
  {
    title: '百年孤独', author: '哥伦比亚·加西亚·马尔克斯', category: '外国文学', call: 'I775.45/032',
    location: '二层 文学借阅区 E-11', status: '在馆', restricted: false, mapFloor: 'f2', mapTarget: 'open',
    description: '布恩迪亚家族七代人的故事与马孔多的兴衰交织，构成魔幻现实主义经典。'
  },
  {
    title: '中国通史', author: '吕思勉', category: '历史', call: 'K20/077',
    location: '二层 社会科学借阅区 H-08', status: '在馆', restricted: false, mapFloor: 'f2', mapTarget: 'comprehensive',
    description: '从制度、文化与社会生活出发，系统梳理中国历史发展的主要线索。'
  },
  {
    title: '庄子今注今译', author: '陈鼓应注译', category: '哲学', call: 'B223.5/052',
    location: '二层 社会科学借阅区 B-09', status: '借出', restricted: false, mapFloor: 'f2', mapTarget: 'comprehensive',
    description: '以校注和白话译文帮助现代读者理解《庄子》的思想、寓言与语言。'
  },
  {
    title: '乡土中国', author: '费孝通', category: '社会学', call: 'C912.82/041',
    location: '二层 社会科学借阅区 C-14', status: '在馆', restricted: false, mapFloor: 'f2', mapTarget: 'comprehensive',
    description: '以差序格局、礼治秩序等概念解释传统中国基层社会的结构。'
  },
  {
    title: '置身事内', author: '兰小欢', category: '经济', call: 'F124/093',
    location: '二层 社会科学借阅区 F-06', status: '借出', restricted: false, mapFloor: 'f2', mapTarget: 'comprehensive',
    description: '从地方政府、城市化与产业政策切入，理解中国经济运行的现实逻辑。'
  },
  {
    title: '时间简史', author: '英·史蒂芬·霍金', category: '科学普及', call: 'P159/118',
    location: '三层 自然科学借阅区 A-12', status: '在馆', restricted: false, mapFloor: 'f3', mapTarget: 'comprehensive',
    description: '以通俗语言讨论宇宙起源、黑洞、时间箭头与基础物理学问题。'
  },
  {
    title: '物种起源', author: '英·查尔斯·达尔文', category: '生命科学', call: 'Q111.2/026',
    location: '三层 自然科学借阅区 B-04', status: '在馆', restricted: false, mapFloor: 'f3', mapTarget: 'comprehensive',
    description: '系统阐述自然选择理论，改变了人类理解生命演化的方式。'
  },
  {
    title: '中国桥梁史', author: '唐寰澄', category: '工程技术', call: 'U44-092/017',
    location: '三层 自然科学借阅区 D-10', status: '借出', restricted: false, mapFloor: 'f3', mapTarget: 'comprehensive',
    description: '从材料、结构与营造方法梳理中国桥梁工程的历史发展。'
  },
  {
    title: '算法图解', author: '美·阿迪蒂亚·巴尔加瓦', category: '计算机', call: 'TP301.6/085',
    location: '三层 自然科学借阅区 E-06', status: '在馆', restricted: false, mapFloor: 'f3', mapTarget: 'comprehensive',
    description: '用图示和实例解释常用算法，适合作为计算机思维与编程基础读物。'
  },
  {
    title: '中国美术史', author: '洪再新', category: '艺术', call: 'J120.9/068',
    location: '二层 文学艺术借阅区 G-03', status: '在馆', restricted: false, mapFloor: 'f2', mapTarget: 'open',
    description: '以历史脉络连接绘画、雕塑、建筑与工艺，呈现中国视觉文化的演变。'
  },
  {
    title: '中国古代音乐史稿', author: '杨荫浏', category: '音乐', call: 'J609.22/014',
    location: '二层 文学艺术借阅区 G-09', status: '借出', restricted: false, mapFloor: 'f2', mapTarget: 'open',
    description: '从礼乐、乐器、曲种与乐律等方面梳理中国古代音乐发展的主要阶段。'
  },
  {
    title: '中国神话故事', author: '袁珂编著', category: '少儿文学', call: 'I287.5/109',
    location: '一层 青少年阅览区 C-07', status: '在馆', restricted: false, mapFloor: 'f1', mapTarget: 'youth',
    description: '从盘古开天到夸父逐日，以适合青少年阅读的方式串联中国神话谱系。'
  },
  {
    title: '昆虫记', author: '法·让-亨利·法布尔', category: '少儿科普', call: 'Q96-49/063',
    location: '一层 青少年阅览区 D-04', status: '借出', restricted: false, mapFloor: 'f1', mapTarget: 'youth',
    description: '在细致观察中记录昆虫习性，把科学研究写成富有耐心与生命感的故事。'
  },
  {
    title: '团圆', author: '余丽琼文·朱成梁图', category: '绘本', call: 'I287.8/151',
    location: '一层 幼儿亲子阅览区 A-08', status: '在馆', restricted: false, mapFloor: 'f1', mapTarget: 'youth',
    description: '以春节团聚为线索，用图画和细节呈现儿童视角中的家庭情感。'
  },
  {
    title: '榆林长城研究', author: '榆林市长城保护研究所', category: '地方文献', call: 'K928.77/081',
    location: '三层 地方文献阅览区 L-12', status: '在馆', restricted: false, mapFloor: 'f3', mapTarget: 'specialized',
    description: '汇集榆林境内长城遗存、边堡体系与保护工作的专题研究成果。'
  },
  {
    title: '榆林地方文献数字影像集', author: '榆林市图书馆编', category: '数字资源', call: 'DR-YL-012',
    location: '三层 电子阅览区 终端 01-36', status: '在馆', restricted: false, mapFloor: 'f3', mapTarget: 'digital',
    description: '通过馆内终端浏览地方志、老照片与专题文献的数字影像和检索目录。'
  }
];

// Covers supplied by the library team. Keep the lookup keyed by the visible
// title (and add aliases where the catalogue uses an annotated title).
const bookCovers = {
  '资治通鉴': 'assets/books/zi-zhi-tong-jian.png',
  '杜工部集': 'assets/books/du-gong-bu-ji.png',
  '中国神话故事': 'assets/books/zhong-guo-shen-hua-gu-shi.jpg',
  '昆虫记': 'assets/books/kun-chong-ji.jpg',
  '团圆': 'assets/books/tuan-yuan.jpg',
  '道德经古本合校': 'assets/books/dao-de-jing-gu-ben-he-xiao.png',
  '平凡的世界': 'assets/books/ping-fan-de-shi-jie.png',
  '国家地理绘本': 'assets/books/guo-jia-di-li-hui-ben.jpg',
  '额尔古纳河右岸': 'assets/books/e-er-gu-na-he-you-an.png',
  '中国古代诗法研究': 'assets/books/zhong-guo-gu-dai-shi-fa-yan-jiu.png',
  '钦定四库全书': 'assets/books/qin-ding-si-ku-quan-shu.jpg',
  '四库全书·文渊阁本选卷': 'assets/books/qin-ding-si-ku-quan-shu.jpg',
  '延绥镇志': 'assets/books/yan-sui-zhen-zhi.jpg',
  '榆林府志': 'assets/books/yu-lin-fu-zhi.jpg',
  '榆林府志校注': 'assets/books/yu-lin-fu-zhi.jpg',
  '梦溪笔谈': 'assets/books/meng-xi-bi-tan.jpg',
  '边疆杂咏': 'assets/books/bian-jiang-za-yong.jpg',
  '百年孤独': 'assets/books/bai-nian-gu-du.jpg',
  '置身事内': 'assets/books/zhi-shen-shi-nei.jpg',
  '中国通史': 'assets/books/zhong-guo-tong-shi.jpg',
  '乡土中国': 'assets/books/xiang-tu-zhong-guo.jpg',
  '庄子今注今译': 'assets/books/zhuang-zi-jin-zhu-jin-yi.jpg',
  '中国古代音乐史稿': 'assets/books/zhong-guo-gu-dai-yin-yue-shi-gao.png',
  '中国美术史': 'assets/books/zhong-guo-mei-shu-shi.jpg',
  '算法图解': 'assets/books/suan-fa-tu-jie.jpg',
  '榆林长城研究': 'assets/books/yu-lin-chang-cheng-yan-jiu.jpg',
  '榆林地方文献数字影像集': 'assets/books/yu-lin-di-fang-wen-xian.jpg',
  '时间简史': 'assets/books/shi-jian-jian-shi.jpg',
  '物种起源': 'assets/books/wu-zhong-qi-yuan.jpg',
  '中国桥梁史': 'assets/books/zhong-guo-qiao-liang-shi.jpg'
};

function coverForTitle(title = '') {
  return bookCovers[title] || Object.entries(bookCovers).find(([key]) => title.includes(key) || key.includes(title))?.[1] || '';
}

books.forEach(book => {
  book.cover = coverForTitle(book.title);
});

const readerSignals = [
  {
    stat: '03', unit: '人正在读', bookTitle: '资治通鉴', title: '《资治通鉴》旁的此刻同读',
    meta: '三层社科书库 · 只显示区域，不公开身份', action: '展开书旁留言', doneAction: '收起书旁留言', icon: 'message-circle', active: false,
    detail: '“读到治乱兴衰时，忽然理解了为什么这本书被称作一面镜子。”'
  },
  {
    stat: '26', unit: '条感受', bookTitle: '榆林府志校注', title: '《榆林府志校注》的本地读者足迹',
    meta: '榆林历史 · 城市记忆 · 近 30 日更新', action: '看看他们留下什么', doneAction: '收起读者足迹', icon: 'footprints', active: false,
    detail: '最近的留言提到了镇北台、六楼骑街和明代延绥镇，3 人继续查看了地方志书架。'
  },
  {
    stat: '08', unit: '册相关推荐', bookTitle: '延绥镇志', title: '读过《延绥镇志》的人还喜欢',
    meta: '基于匿名阅读兴趣生成，不使用精确位置', action: '查看推荐书目', doneAction: '收起推荐书目', icon: 'sparkles', active: false,
    detail: '《榆林府志校注》《边塞诗中的榆林》《明长城与九边重镇》等 8 册馆藏可继续探索。'
  }
];

const libraryZones = {
  literature: {
    name: '文学艺术', english: 'LITERATURE & ARTS', floor: '二层 · 开放阅览区', floorCode: 'F2 · OPEN READING',
    status: '开放 · 可借阅', description: '从当代文学、古典诗词到绘画、音乐与设计，让一次随手翻阅成为进入另一种生活的入口。',
    scale: '约 18,600 册', availability: '86% 可借', readerCount: '7 人在读', visualSignal: '7 位读者正在本区阅读',
    scope: '中国文学 · 外国文学 · 诗歌 · 绘画 · 音乐', tags: ['小说', '诗歌', '书画', '音乐'], image: 'assets/zones/literature-arts.jpg', imagePosition: 'center 52%',
    readerSignal: '近期有 23 位读者从中国文学继续浏览到地方诗歌。', location: '二层 文学借阅区', finalStep: '按二层现场标识进入文学借阅与开放阅览区域', mapFloor: 'f2', mapTarget: 'open', focus: '66% 48%', accent: 'rust'
  },
  society: {
    name: '社会科学', english: 'SOCIAL SCIENCES', floor: '二层 · 综合阅览区', floorCode: 'F2 · COMPREHENSIVE',
    status: '开放 · 可借阅', description: '把历史、哲学、经济和社会观察放在同一条知识脉络中，适合专题研究，也适合从一个问题开始漫游。',
    scale: '约 22,400 册', availability: '81% 可借', readerCount: '11 人在读', visualSignal: '11 位读者正在本区阅读',
    scope: '历史 · 哲学 · 政治 · 经济 · 法律 · 社会学', tags: ['历史', '哲学', '经济', '社会'], image: 'assets/zones/social-sciences.jpg', imagePosition: 'center center',
    readerSignal: '《资治通鉴》附近有 3 人正在阅读，近 30 日新增 41 条匿名感受。', location: '二层 社会科学借阅区', finalStep: '按二层现场标识进入社会科学借阅与综合阅览区域', mapFloor: 'f2', mapTarget: 'comprehensive', focus: '42% 51%', accent: 'cobalt'
  },
  science: {
    name: '自然科技', english: 'SCIENCE & TECHNOLOGY', floor: '三层 · 南侧书库', floorCode: 'F3 · SOUTH',
    status: '开放 · 可借阅', description: '从自然观察到工程实践，以清晰分类连接科普入门、专业参考和科技史，让好奇心有路径可循。',
    scale: '约 15,200 册', availability: '89% 可借', readerCount: '4 人在读', visualSignal: '4 位读者正在本区阅读',
    scope: '数学 · 天文 · 生物 · 工程 · 计算机 · 科技史', tags: ['自然', '工程', '计算机', '科普'], image: 'assets/zones/science-technology.jpg', imagePosition: 'center 52%',
    readerSignal: '读过《梦溪笔谈》的读者，最近常继续查看天文与古代工程主题。', location: '三层 自然科学借阅区', finalStep: '按三层现场标识进入自然科学借阅与综合阅览区域', mapFloor: 'f3', mapTarget: 'comprehensive', focus: '76% 57%', accent: 'jade'
  },
  local: {
    name: '地方文献', english: 'LOCAL DOCUMENTS', floor: '三层 · 专题阅览区', floorCode: 'F3 · SPECIALIZED',
    status: '开放 · 部分限馆内', description: '汇集榆林地方史、西北区域研究与地方出版物。这里是可检索的城市记忆入口，与不外借古典藏书分区相邻但独立。',
    scale: '约 6,800 册', availability: '82% 可阅', readerCount: '6 人在读', visualSignal: '6 位读者正在查阅地方文献',
    scope: '榆林地方史 · 西北研究 · 地方出版物 · 城市影像', tags: ['榆林', '西北', '方志研究', '城市记忆'], image: 'assets/zones/local-documents.jpg', imagePosition: 'center center',
    readerSignal: '最近 26 条阅读足迹提到了镇北台、六楼骑街和明代延绥镇。', location: '三层 地方文献阅览区', finalStep: '按三层现场标识进入地方文献与专题阅览区域', mapFloor: 'f3', mapTarget: 'specialized', focus: '34% 45%', accent: 'gold'
  },
  children: {
    name: '少儿阅读', english: 'CHILDREN\'S READING', floor: '一层 · 南侧阅览区', floorCode: 'F1 · SOUTH',
    status: '开放 · 余 38 席', description: '用绘本、儿童文学、知识读物和亲子共读空间照顾不同年龄，让孩子可以自己选择、坐下并读完一本书。',
    scale: '约 12,900 册', availability: '38 个座位可用', readerCount: '19 组家庭', visualSignal: '19 组家庭正在本区共读',
    scope: '绘本 · 儿童文学 · 科普启蒙 · 亲子阅读', tags: ['绘本', '亲子', '启蒙', '故事'],
    readerSignal: '今天最常被继续阅读的主题是自然观察、传统节日与榆林故事。', location: '一层 青少年/幼儿/亲子阅览区', finalStep: '从一层大厅按现场标识进入青少年、幼儿与亲子阅览区域', mapFloor: 'f1', mapTarget: 'youth', image: 'assets/zones/children-reading.jpg', imagePosition: 'center center', focus: '58% 70%', accent: 'rust'
  },
  digital: {
    name: '数字阅读', english: 'DIGITAL READING', floor: '三层 · 电子阅览区', floorCode: 'F3 · E-READING',
    status: '开放 · 14 台空闲', description: '连接电子图书、专题数据库、视听资源与数字展览，为快速检索和深度研究提供安静、清楚的数字入口。',
    scale: '36 个阅览终端', availability: '14 台可用', readerCount: '9 人使用中', visualSignal: '9 位读者正在使用数字资源',
    scope: '电子图书 · 数据库 · 视听资源 · 数字展览', tags: ['电子书', '数据库', '视听', '数字展'],
    readerSignal: '本周地方文献数据库与古籍影像专题的访问量最高。', location: '三层 电子阅览区', finalStep: '按三层现场标识进入电子阅览与数字体验相关区域', mapFloor: 'f3', mapTarget: 'digital', image: 'assets/zones/digital-reading.jpg', imagePosition: 'center center', focus: '82% 44%', accent: 'cobalt'
  }
};

const venueFloors = {
  b1: {
    code: 'B1', title: '负一层主要功能区', summary: '下沉广场、报告厅、会议区、培训教室与书库',
    start: 'sunken', nodes: [
      { id: 'sunken', label: '下沉广场', x: 8, y: 8, w: 24, h: 18, tone: 'jade' },
      { id: 'auditorium', label: '报告厅', x: 38, y: 8, w: 48, h: 22, tone: 'gold' },
      { id: 'meeting', label: '会议区', x: 68, y: 34, w: 20, h: 16, tone: 'rust' },
      { id: 'training', label: '培训教室', x: 10, y: 38, w: 38, h: 42, tone: 'cobalt' },
      { id: 'stacks', label: '书库', x: 52, y: 54, w: 36, h: 26, tone: 'jade' }
    ]
  },
  f1: {
    code: 'F1', title: '一层主要功能区', summary: '大厅、青少年/幼儿/亲子阅览区、综合阅览、老年阅览与 24 小时城市书房',
    start: 'lobby', nodes: [
      { id: 'lobby', label: '大厅', x: 70, y: 68, w: 18, h: 18, tone: 'gold' },
      { id: 'desk', label: '总服务台', x: 54, y: 68, w: 14, h: 18, tone: 'cobalt' },
      { id: 'youth', label: '青少年 / 幼儿 / 亲子阅览', x: 8, y: 26, w: 44, h: 30, tone: 'jade' },
      { id: 'comprehensive', label: '综合阅览', x: 8, y: 60, w: 44, h: 22, tone: 'gold' },
      { id: 'senior', label: '老年阅览', x: 52, y: 10, w: 22, h: 20, tone: 'gold' },
      { id: 'city', label: '24 小时城市书房', x: 76, y: 10, w: 18, h: 30, tone: 'rust' },
      { id: 'valley', label: '书谷', x: 54, y: 34, w: 20, h: 26, tone: 'cobalt' }
    ]
  },
  f2: {
    code: 'F2', title: '二层主要功能区', summary: '开放阅览、综合阅览、专题阅览、自修区、书谷与办公区域',
    start: 'valley', nodes: [
      { id: 'office', label: '办公区', x: 6, y: 44, w: 18, h: 36, tone: 'cobalt' },
      { id: 'open', label: '开放阅览', x: 26, y: 38, w: 40, h: 22, tone: 'jade' },
      { id: 'comprehensive', label: '综合阅览', x: 26, y: 62, w: 40, h: 18, tone: 'gold' },
      { id: 'specialized', label: '专题阅览', x: 34, y: 8, w: 44, h: 22, tone: 'gold' },
      { id: 'study', label: '自修区', x: 72, y: 38, w: 22, h: 42, tone: 'rust' },
      { id: 'valley', label: '书谷', x: 38, y: 31, w: 28, h: 9, tone: 'cobalt' }
    ]
  },
  f3: {
    code: 'F3', title: '三层主要功能区', summary: '休闲区、开放阅览、综合阅览、专题阅览、电子阅览与自修区',
    start: 'valley', nodes: [
      { id: 'leisure', label: '休闲区', x: 5, y: 8, w: 28, h: 32, tone: 'jade' },
      { id: 'open', label: '开放阅览', x: 26, y: 45, w: 38, h: 18, tone: 'jade' },
      { id: 'comprehensive', label: '综合阅览', x: 26, y: 65, w: 38, h: 17, tone: 'gold' },
      { id: 'specialized', label: '专题阅览', x: 42, y: 16, w: 28, h: 22, tone: 'gold' },
      { id: 'digital', label: '电子阅览', x: 72, y: 16, w: 22, h: 22, tone: 'gold' },
      { id: 'study', label: '自修区', x: 72, y: 46, w: 22, h: 36, tone: 'rust' },
      { id: 'valley', label: '书谷', x: 36, y: 38, w: 30, h: 9, tone: 'cobalt' }
    ]
  }
};

const classicalCollections = {
  '四库全书': [
    {
      key: '经', label: '义理与经典', en: 'CLASSICS', section: '经部 · 四书类', title: '《论语集注》',
      meta: '宋 · 朱熹集注　特藏索书号 SK-J-008', chapter: '学而第一',
      text: '子曰：“学而时习之，不亦说乎？有朋自远方来，不亦乐乎？人不知而不愠，不亦君子乎？”',
      notes: {
        original: '“习”不只是温习，也有实践、践行之意。经典从来不是停在书页上的文字，而是反复进入生活的行动。',
        translation: '孔子说：学习之后按时实践，不也是令人欣喜的吗？有志同道合的人从远方来，不也是快乐的吗？',
        allusion: '“有朋自远方来”后来常用于表达迎接远客。在扫码页中，系统会将这句话关联到榆林本地的经典阅读兴趣。'
      },
      story: { place: '杏坛', person: '孔门弟子', title: '远方来学', text: '书页化作行旅，分散在一座城里的同好由此相逢。', image: '60% 58%' }
    },
    {
      key: '史', label: '制度与山河', en: 'HISTORY', section: '史部 · 编年类', title: '《资治通鉴》',
      meta: '宋 · 司马光编著　特藏索书号 SK-S-014', chapter: '周纪一',
      text: '臣光曰：臣闻天子之职莫大于礼，礼莫大于分，分莫大于名。',
      notes: {
        original: '司马光以“礼、分、名”开启全书议论，说明政治秩序与名分在传统史学中的基础地位。',
        translation: '司马光认为，天子的职责以礼为首，而礼的核心在于区分秩序，秩序又依赖恰当的名分。',
        allusion: '《资治通鉴》意为“鉴于往事，有资于治道”。“鉴”原指镜子，后来成为以历史映照现实的象征。'
      },
      story: { place: '洛阳书局', person: '司马光', title: '编年成书', text: '十九年笔耕，史事沿时间缓缓铺开。', image: '48% 45%' }
    },
    {
      key: '子', label: '百家与技艺', en: 'MASTERS', section: '子部 · 杂家类', title: '《梦溪笔谈》',
      meta: '宋 · 沈括撰　特藏索书号 SK-Z-021', chapter: '技艺卷',
      text: '方家以磁石磨针锋，则能指南；然常微偏东，不全南也。',
      notes: {
        original: '沈括准确记录磁针指南并略偏东的现象，是中国古代关于地磁偏角的重要认识。',
        translation: '术家用磁石摩擦针尖，针便能指向南方；但往往略微偏东，并不指向正南。',
        allusion: '“方家”指精通某种技艺的人。《梦溪笔谈》中的许多观察来自实验、制作和实地考察。'
      },
      story: { place: '梦溪园', person: '沈括', title: '磁针指南', text: '一枚细针转动，方向从纸面浮现。', image: '72% 64%' }
    },
    {
      key: '集', label: '文章与诗心', en: 'LITERATURE', section: '集部 · 别集类', title: '《杜工部集》',
      meta: '唐 · 杜甫撰　特藏索书号 SK-JI-033', chapter: '羌村三首',
      text: '峥嵘赤云西，日脚下平地。柴门鸟雀噪，归客千里至。',
      notes: {
        original: '诗从暮色写起，归家的喜悦与乱世的惊惧交织在一起，日常景象因此带有沉重的历史温度。',
        translation: '西天赤云高耸，夕阳的光脚落向地面。柴门前鸟雀喧闹，远行千里的归人终于回家。',
        allusion: '杜甫在安史之乱中辗转至羌村。系统会据此关联榆林边塞诗、古城地点与相关馆藏。'
      },
      story: { place: '羌村', person: '归家诗人', title: '千里归客', text: '暮色落下，柴门与远行人在风中重逢。', image: '66% 72%' }
    }
  ],
  '榆林地方志': [
    {
      key: '镇', label: '边镇建置', en: 'FRONTIER', section: '榆林地方志 · 边镇类', title: '《延绥镇志》',
      meta: '明 · 谭吉璁修　特藏索书号 DFZ-018', chapter: '建置沿革',
      text: '榆林城，据山带河，为延绥保障，东连三晋，西控河套。',
      notes: { original: '地方志以山川、城池和军政建置构成城市的历史坐标。', translation: '榆林城依山临河，是延绥防务的重要保障，向东连接山西，向西控制河套地区。', allusion: '“据山带河”概括了古城依托地势形成的防御格局。' },
      story: { place: '榆林古城', person: '修志官', title: '山河建城', text: '城墙沿地势升起，街巷在志书中逐一显现。', image: '40% 42%' }
    },
    {
      key: '府', label: '府州人物', en: 'PEOPLE', section: '榆林地方志 · 人物类', title: '《榆林府志》',
      meta: '清修本　特藏索书号 DFZ-026', chapter: '人物志', text: '人物以地传，地亦以人物重。风节文章，代有其人。',
      notes: { original: '人物志不仅记录官宦，也保存乡贤、文士与技艺传承者。', translation: '人物因地方而留下声名，地方也因人物而更加重要。', allusion: '传统方志将人物分门立传，是地方记忆的重要组织方式。' },
      story: { place: '榆阳书院', person: '乡贤文士', title: '一城群像', text: '名字从纸页亮起，汇成地方人物谱。', image: '55% 51%' }
    },
    {
      key: '图', label: '城池舆图', en: 'MAPS', section: '榆林地方志 · 舆图类', title: '《榆林城图》',
      meta: '清绘本摹印　特藏索书号 DFZ-T-003', chapter: '城池图', text: '南塔北台，六楼骑街，城垣周回，门各有制。',
      notes: { original: '舆图以城门、楼台、街道和水系组织古城空间。', translation: '南有凌霄塔，北有镇北台，六座楼阁跨街而建，城门各有规制。', allusion: '“南塔北台中古城，六楼骑街天下名”是榆林古城格局的概括。' },
      story: { place: '六楼骑街', person: '行旅商贾', title: '城图展开', text: '古城从平面立起，街道连接南北楼台。', image: '33% 58%' }
    }
  ],
  '古籍善本': [
    {
      key: '善', label: '名家抄本', en: 'MANUSCRIPT', section: '古籍善本 · 抄本', title: '《诗经传稿》',
      meta: '清抄本　特藏索书号 SB-009', chapter: '卷首题记', text: '诗者，志之所之也。在心为志，发言为诗。',
      notes: { original: '抄本保留书写者的笔迹、校改和阅读痕迹，是文本之外的另一层历史。', translation: '诗歌是心志的去向，存在心中是志，表达成语言便成为诗。', allusion: '“诗言志”是中国古代诗学的重要命题。' },
      story: { place: '抄书案', person: '无名抄手', title: '墨迹留痕', text: '笔锋、朱批与纸纹依次显现。', image: '76% 43%' }
    },
    {
      key: '刻', label: '旧刻珍本', en: 'WOODBLOCK', section: '古籍善本 · 刻本', title: '《文苑英华》残卷',
      meta: '明刻本　特藏索书号 SB-014', chapter: '残卷识记', text: '版心有鱼尾，行格疏朗，墨色间见浓淡。',
      notes: { original: '版式、刀法和墨色是鉴别古籍版本的重要依据。', translation: '书页版心带鱼尾标记，行格开阔，墨色深浅不一。', allusion: '“鱼尾”是古籍版心中常见的装饰与折页定位标记。' },
      story: { place: '雕版作坊', person: '刻工', title: '一页成版', text: '文字反刻入木，墨色在纸上重新正读。', image: '69% 54%' }
    }
  ],
  '金石拓本': [
    {
      key: '碑', label: '碑刻拓片', en: 'STELE', section: '金石拓本 · 碑刻', title: '《镇北台题记拓片》',
      meta: '近代旧拓　特藏索书号 JS-006', chapter: '题记释文', text: '据险临边，筑台以望，烽燧相接，声闻百里。',
      notes: { original: '拓片把石刻文字和表面痕迹转移到纸上，保存碑石在特定年代的状态。', translation: '依托险要边地筑台远望，烽火台彼此相连，消息可以传至远方。', allusion: '“金石”原指钟鼎碑刻，后来也指研究古代器物与铭文的学问。' },
      story: { place: '镇北台', person: '拓工', title: '墨拓碑声', text: '宣纸覆石，字迹从凹凸中逐渐显现。', image: '58% 38%' }
    },
    {
      key: '砖', label: '砖铭图像', en: 'INSCRIPTION', section: '金石拓本 · 砖铭', title: '《榆阳砖铭拓集》',
      meta: '现代传拓　特藏索书号 JS-012', chapter: '边塞纹样', text: '云气绕兽，回纹为界，刀痕犹见匠人手泽。',
      notes: { original: '砖铭和纹样保存日常建造中的文字、图像与工匠信息。', translation: '云气纹围绕兽形，回纹形成边框，仍能看见工匠刻制的痕迹。', allusion: '“手泽”本指先人或名人遗留的墨迹与物品，此处借指工匠留下的手工痕迹。' },
      story: { place: '古城墙基', person: '筑城工匠', title: '砖上留名', text: '一方砖铭连接无名工匠与城市建筑史。', image: '44% 66%' }
    }
  ]
};

const curatedNotes = [
  { text: '把“习”理解成实践，突然更贴近今天。', curated: true },
  { text: '远方来馆的同好，也是“有朋自远方来”。', curated: true },
  { text: '想听馆员讲讲这个版本的来历。', curated: false },
  { text: '原文与今译切换很适合第一次读古籍的人。', curated: false },
  { text: '这一段的地点动画很有画面感。', curated: true }
];

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
})[character]);

let activeStatus = '全部';
let catalogDisplayLimit = 5;
let activeZone = 'literature';
let selectedBook = null;
let selectedSeat = null;
let selectedFloor = '一层';
let selectedTime = '09:00-12:00';
let selectedGlassesSlot = '14:00-15:00';
let activeCollection = '四库全书';
let activeClassicalItem = 0;
let activeNote = 'original';
let activeMapFloor = 'f1';
let mapGuideTarget = { floor: 'f1', target: 'desk', label: '总服务台 / 全馆导览', finalStep: '由总服务台确认目的地与现场开放动线' };
const mapStartByFloor = {};
let glassesTarget = '古典藏书旗舰路线';
const glassesCapacity = 100;
let glassesAvailable = 64;
const baseTakenSeats = new Set([2, 6, 9, 14, 18, 21, 27, 31, 37, 42, 46]);
const seatReservations = new Map();
const bookRequests = new Set();
const notesByManuscript = new Map([['四库全书:0', [...curatedNotes]]]);

function refreshIcons() {
  if (window.lucide) window.lucide.createIcons();
}

let toastTimer;
function showToast(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2600);
}

function openDialog(dialog) {
  if (!dialog || dialog.open) return;
  dialog.showModal();
}

function closeDialog(dialog) {
  if (dialog?.open) dialog.close();
}

function statusClass(status) {
  if (status === '借出') return 'status status--out';
  if (status === '馆内阅览') return 'status status--restricted';
  return 'status';
}

function renderCatalog() {
  const query = $('#catalogSearch').value.trim().toLowerCase();
  const list = books.filter(book => {
    const matchesText = `${book.title}${book.author}${book.category}${book.call}`.toLowerCase().includes(query);
    const matchesStatus = activeStatus === '全部' || book.status === activeStatus;
    return matchesText && matchesStatus;
  });
  const container = $('#catalogList');
  container.innerHTML = '';
  list.forEach((book, index) => {
    const row = document.createElement('article');
    row.className = 'catalog-row';
    row.tabIndex = 0;
    row.innerHTML = `
      <div class="catalog-title"><span class="book-cover book-cover--row">${book.cover ? `<img src="${book.cover}" alt="《${escapeHtml(book.title)}》封面" loading="lazy">` : '<i data-lucide="book-open" aria-hidden="true"></i>'}</span><span><b>${book.title}</b><small>${book.author} · ${book.category}</small></span></div>
      <span class="catalog-meta catalog-call">${book.call}</span>
      <span class="catalog-meta catalog-location">${book.location}</span>
      <span class="${statusClass(book.status)}">${book.status}</span>
      <span class="row-arrow"><i data-lucide="chevron-right"></i></span>`;
    row.addEventListener('click', () => showBook(book));
    row.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        showBook(book);
      }
    });
    container.appendChild(row);
    row.hidden = index >= catalogDisplayLimit;
  });
  $('#catalogEmpty').hidden = list.length > 0;
  const loadMore = $('#catalogLoadMore');
  if (loadMore) {
    const remaining = Math.max(0, list.length - catalogDisplayLimit);
    loadMore.hidden = remaining === 0;
    const label = loadMore.querySelector('span');
    if (label) label.textContent = remaining ? `加载更多馆藏（还有 ${remaining} 条）` : '已显示全部馆藏';
  }
  $('#catalogList').setAttribute('aria-label', `找到 ${list.length} 条馆藏`);
  refreshIcons();
}

function renderLibraryZone() {
  const zone = libraryZones[activeZone];
  if (!zone) return;
  const panel = $('#zonePanel');
  const activeTab = $(`[data-zone="${activeZone}"]`, $('#zoneIndex'));
  const animateChange = panel.dataset.rendered === 'true';

  $$('#zoneIndex [data-zone]').forEach(button => {
    const active = button === activeTab;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-selected', String(active));
    button.tabIndex = active ? 0 : -1;
  });
  panel.setAttribute('aria-labelledby', activeTab.id);
  panel.dataset.accent = zone.accent;
  const zoneImage = zone.image || 'assets/art-reference.jpg';
  $('#zoneVisual').style.backgroundImage = `linear-gradient(180deg, rgba(20, 35, 51, .24), rgba(20, 35, 51, .2) 44%, rgba(20, 35, 51, .88)), url("${zoneImage}")`;
  $('#zoneVisual').style.backgroundPosition = zone.imagePosition || zone.focus;
  $('#zoneFloorCode').textContent = zone.floorCode;
  $('#zoneEnglish').textContent = zone.english;
  $('#zoneVisualName').textContent = zone.name;
  $('#zoneVisualSignal').textContent = zone.visualSignal;
  $('#zoneFloor').textContent = zone.floor;
  $('#zoneStatus').textContent = zone.status;
  $('#zoneName').textContent = zone.name;
  $('#zoneDescription').textContent = zone.description;
  $('#zoneScale').textContent = zone.scale;
  $('#zoneAvailability').textContent = zone.availability;
  $('#zoneReaderCount').textContent = zone.readerCount;
  $('#zoneScope').textContent = zone.scope;
  $('#zoneReaderSignal').textContent = zone.readerSignal;
  $('#zoneTags').innerHTML = zone.tags.map(tag => `<li>${escapeHtml(tag)}</li>`).join('');
  panel.dataset.rendered = 'true';
  if (animateChange) {
    panel.classList.remove('is-changing');
    requestAnimationFrame(() => panel.classList.add('is-changing'));
    window.setTimeout(() => panel.classList.remove('is-changing'), 560);
  }
}

function nodeCenter(node) {
  return { x: node.x + node.w / 2, y: node.y + node.h / 2 };
}

function renderVenueMap() {
  const floor = venueFloors[activeMapFloor] || venueFloors.f1;
  const plan = $('#venueFloorPlan');
  const selectedStart = mapStartByFloor[activeMapFloor] || floor.start;
  const startNode = floor.nodes.find(node => node.id === selectedStart) || floor.nodes[0];
  const isTargetFloor = mapGuideTarget.floor === activeMapFloor;
  const targetNode = isTargetFloor ? floor.nodes.find(node => node.id === mapGuideTarget.target) : null;
  const start = nodeCenter(startNode);
  const target = targetNode ? nodeCenter(targetNode) : null;
  const bendY = target ? Math.max(12, Math.min(88, (start.y + target.y) / 2)) : 0;
  const route = target
    ? `<svg class="venue-route" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><polyline points="${start.x},${start.y} ${start.x},${bendY} ${target.x},${bendY} ${target.x},${target.y}"></polyline></svg>`
    : '';

  plan.innerHTML = `${route}${floor.nodes.map(node => {
    const classes = ['venue-space', `venue-space--${node.tone}`];
    if (node === startNode) classes.push('is-start');
    if (targetNode && node === targetNode) classes.push('is-target');
    return `<button class="${classes.join(' ')}" type="button" data-venue-node="${escapeHtml(node.id)}" aria-label="选择目的地：${escapeHtml(node.label)}" style="--x:${node.x};--y:${node.y};--w:${node.w};--h:${node.h}"><span>${escapeHtml(node.label)}</span></button>`;
  }).join('')}`;

  $$('#venueFloorTabs [data-map-floor]').forEach(button => {
    const active = button.dataset.mapFloor === activeMapFloor;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  const floorCode = $('#mapFloorCode');
  const floorTitle = $('#mapFloorTitle');
  const floorSummary = $('#mapFloorSummary');
  const targetLabel = $('#mapTargetLabel');
  const stepOne = $('#mapStepOne');
  if (floorCode) floorCode.textContent = floor.code;
  if (floorTitle) floorTitle.textContent = floor.title;
  if (floorSummary) floorSummary.textContent = floor.summary;
  if (targetLabel) targetLabel.textContent = targetNode ? mapGuideTarget.label : '楼层概览';
  if (stepOne) stepOne.textContent = `从${floor.code} · ${startNode.label}开始`;
  const startSelect = $('#mapStartSelect');
  if (startSelect) {
    startSelect.innerHTML = floor.nodes.map(node => `<option value="${escapeHtml(node.id)}">${escapeHtml(node.label)}</option>`).join('');
    startSelect.value = startNode.id;
  }
  plan.setAttribute('aria-label', `${floor.title}：${floor.summary}${targetNode ? `；当前高亮 ${mapGuideTarget.label}` : ''}`);
}

function selectVenueNode(nodeId) {
  const floor = venueFloors[activeMapFloor];
  const node = floor?.nodes.find(item => item.id === nodeId);
  if (!node) return;
  const labels = {
    stacks: '密集书库需先在服务台登记，由馆员协助取书',
    specialized: '沿专题阅览标识前往，古籍与地方文献请在服务点登记',
    digital: '前往电子阅览区取用空闲终端，数字资源需使用馆内网络',
    youth: '从入口进入少儿区域，按年龄分区标识选择阅览位置'
  };
  mapGuideTarget = {
    floor: activeMapFloor,
    target: node.id,
    label: `${floor.code} ${node.label}`,
    finalStep: labels[node.id] || `按${floor.code}现场标识抵达${node.label}`
  };
  $('#mapDestination').textContent = `目的地：${mapGuideTarget.label}`;
  const startNode = floor.nodes.find(item => item.id === (mapStartByFloor[activeMapFloor] || floor.start)) || floor.nodes[0];
  $('#mapStepOne').textContent = `从${floor.code} · ${startNode.label}开始`;
  $('#mapStepTwo').textContent = activeMapFloor === 'f1' ? '先到一层总服务台确认现场开放动线' : `沿${floor.title}现场指引前行`;
  $('#mapFinalStep').textContent = mapGuideTarget.finalStep;
  renderVenueMap();
  showToast(`已选择目的地：${node.label}`);
}

function openVenueGuide(options = {}) {
  mapGuideTarget = {
    floor: options.floor || 'f1',
    target: options.target || 'desk',
    label: options.label || '总服务台 / 全馆导览',
    finalStep: options.finalStep || '由总服务台确认目的地与现场开放动线'
  };
  activeMapFloor = mapGuideTarget.floor;
  const targetFloor = venueFloors[mapGuideTarget.floor] || venueFloors.f1;
  $('#mapDestination').textContent = `目的地：${mapGuideTarget.label}`;
  const startNode = targetFloor.nodes.find(node => node.id === (mapStartByFloor[mapGuideTarget.floor] || targetFloor.start)) || targetFloor.nodes[0];
  $('#mapStepOne').textContent = `从${targetFloor.code} · ${startNode.label}开始`;
  $('#mapStepTwo').textContent = mapGuideTarget.floor === 'f1'
    ? '先到一层总服务台确认现场开放动线'
    : `经总服务台确认后前往${targetFloor.title}`;
  $('#mapFinalStep').textContent = mapGuideTarget.finalStep;
  renderVenueMap();
  openDialog($('#mapDialog'));
  refreshIcons();
}

function showBook(book) {
  selectedBook = book;
  $('#dialogCategory').textContent = book.category;
  $('#dialogTitle').textContent = book.title;
  $('#dialogAuthor').textContent = book.author;
  $('#dialogDescription').textContent = book.description;
  const dialogCover = $('#dialogCover');
  if (dialogCover) {
    dialogCover.innerHTML = book.cover
      ? `<img src="${book.cover}" alt="《${escapeHtml(book.title)}》封面">`
      : '<i data-lucide="book-open" aria-hidden="true"></i>';
  }
  $('#dialogCall').textContent = book.call;
  $('#dialogShelf').textContent = book.location;
  $('#dialogStatus').textContent = book.status;
  $('#openRestricted').hidden = !book.restricted;
  $('#reserveBook').hidden = book.restricted;
  const requested = bookRequests.has(book.call);
  $('#reserveBook').disabled = requested;
  $('#reserveBook').innerHTML = requested
    ? `<i data-lucide="check"></i>${book.status === '借出' ? '已预约' : '已加入借阅单'}`
    : book.status === '借出'
      ? '<i data-lucide="bookmark-plus"></i>预约借阅'
      : '<i data-lucide="book-check"></i>借阅此书';
  openDialog($('#bookDialog'));
  refreshIcons();
}

function switchService(name) {
  $$('.service-tab').forEach(button => {
    const active = button.dataset.service === name;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-selected', String(active));
  });
  $$('.service-panel').forEach(panel => {
    const active = panel.dataset.panel === name;
    panel.classList.toggle('is-active', active);
    panel.hidden = !active;
  });
}

function localDateValue() {
  const date = new Date();
  const offset = date.getTimezoneOffset() * 60000;
  return new Date(date.getTime() - offset).toISOString().slice(0, 10);
}

function activeSeatKey() {
  return `${$('#seatDate').value}|${selectedFloor}|${selectedTime}`;
}

function occupiedSeats() {
  const reserved = seatReservations.get(activeSeatKey()) || new Set();
  return new Set([...baseTakenSeats, ...reserved]);
}

function renderSeats() {
  const map = $('#seatMap');
  const takenSeats = occupiedSeats();
  map.innerHTML = '';
  for (let seat = 1; seat <= 48; seat += 1) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'seat-button';
    button.textContent = String(seat).padStart(2, '0');
    button.disabled = takenSeats.has(seat);
    button.setAttribute('aria-label', button.disabled ? `${seat}号座位已占用` : `${seat}号座位可预约`);
    button.classList.toggle('is-selected', seat === selectedSeat);
    button.addEventListener('click', () => {
      selectedSeat = seat;
      renderSeats();
      updateSeatSummary();
    });
    map.appendChild(button);
  }
}

function updateSeatSummary() {
  $('#summaryFloor').textContent = selectedFloor;
  const label = selectedTime.startsWith('09') ? '上午' : selectedTime.startsWith('14') ? '下午' : '晚间';
  $('#summaryTime').textContent = `${label} ${selectedTime}`;
  $('#summarySeat').textContent = selectedSeat ? `${String(selectedSeat).padStart(2, '0')} 号` : '尚未选择';
}

function renderReaderSignals() {
  const container = $('#readerSignalList');
  container.innerHTML = '';
  readerSignals.forEach((signal, index) => {
    const row = document.createElement('article');
    row.className = 'club-row';
    row.innerHTML = `
      <div class="club-date"><strong>${escapeHtml(signal.stat)}</strong><small>${escapeHtml(signal.unit)}</small></div>
      <div class="club-cover">${coverForTitle(signal.bookTitle) ? `<img src="${coverForTitle(signal.bookTitle)}" alt="《${escapeHtml(signal.bookTitle)}》封面" loading="lazy">` : ''}</div>
      <div class="club-info"><h4>${escapeHtml(signal.title)}</h4><p>${escapeHtml(signal.meta)}</p>${signal.active ? `<p class="reader-reveal">${escapeHtml(signal.detail)}</p>` : ''}</div>
      <div class="club-action"><span>${signal.active ? '内容已展开' : '匿名兴趣信号'}</span><button class="secondary-button${signal.active ? ' is-joined' : ''}" type="button" data-reader-index="${index}" aria-expanded="${signal.active}"><i data-lucide="${signal.active ? 'chevron-up' : signal.icon}"></i>${signal.active ? signal.doneAction : signal.action}</button></div>`;
    container.appendChild(row);
  });
  $$('[data-reader-index]', container).forEach(button => {
    button.addEventListener('click', () => {
      const signal = readerSignals[Number(button.dataset.readerIndex)];
      signal.active = !signal.active;
      renderReaderSignals();
      showToast(signal.active ? `已展开「${signal.title}」` : '内容已收起');
    });
  });
  refreshIcons();
}

function initMiniProgramBridge() {
  const target = $('#miniProgramQr');
  if (!target) return;
  const prototypeUrl = new URL('mini-program-demo.html', window.location.href).href;
  if (typeof window.QRCode !== 'function') {
    target.classList.add('is-fallback');
    return;
  }
  target.innerHTML = '';
  new window.QRCode(target, {
    text: prototypeUrl,
    width: 176,
    height: 176,
    colorDark: '#1e334f',
    colorLight: '#ffffff',
    correctLevel: window.QRCode.CorrectLevel.H
  });
}

function renderClassicsNav() {
  const items = classicalCollections[activeCollection];
  const nav = $('#classicsNav');
  nav.setAttribute('aria-label', `${activeCollection}目录`);
  nav.innerHTML = '';
  items.forEach((item, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `siku-tab${index === activeClassicalItem ? ' is-active' : ''}`;
    button.setAttribute('aria-pressed', String(index === activeClassicalItem));
    button.innerHTML = `<strong>${item.key}</strong><span>${item.label}<small>${item.en}</small></span>`;
    button.addEventListener('click', () => {
      activeClassicalItem = index;
      renderClassicsNav();
      renderManuscript();
    });
    nav.appendChild(button);
  });
}

function activeManuscript() {
  return classicalCollections[activeCollection][activeClassicalItem];
}

function activeManuscriptKey() {
  return `${activeCollection}:${activeClassicalItem}`;
}

function activeDanmakuNotes() {
  const key = activeManuscriptKey();
  if (!notesByManuscript.has(key)) {
    const item = activeManuscript();
    notesByManuscript.set(key, [
      { text: `第一次这样读${item.title}，地点与人物一下清楚了。`, curated: true },
      { text: `想继续听馆员讲「${item.chapter}」的版本故事。`, curated: false }
    ]);
  }
  return notesByManuscript.get(key);
}

function renderManuscript() {
  const item = activeManuscript();
  $('#volumeLabel').textContent = item.section;
  $('#volumeTitle').textContent = item.title;
  $('#volumeMeta').textContent = item.meta;
  const overview = $('#volumeOverview');
  if (overview) overview.textContent = `${item.section} · 从原文、今译与典故三个层次进入本册，沿“${item.chapter}”继续探索相关人物与地点。`;
  const noteViews = {
    original: { main: item.text, note: item.notes.original },
    translation: { main: item.notes.translation, note: '今译将原文转换为当代汉语，保留人物、地点与语气线索，方便继续阅读。' },
    allusion: { main: item.notes.allusion, note: '典故层补充这句话的出处、用法与榆林阅读场景，点击“展开段落场景”可继续观看。' }
  };
  const view = noteViews[activeNote] || noteViews.original;
  $('#chapterMark').textContent = activeNote === 'translation' ? `${item.chapter} · 今译` : activeNote === 'allusion' ? `${item.chapter} · 典故` : item.chapter;
  $('#originalText').textContent = view.main;
  $('#annotationText').textContent = view.note;
  $('#storyPlace').textContent = item.story.place;
  $('#storyPerson').textContent = item.story.person;
  $('#storyTitle').textContent = item.story.title;
  $('#storyText').textContent = item.story.text;
  $('.narrative-stage__image').style.backgroundPosition = item.story.image;
  $('#narrativeStage').classList.remove('is-playing');
  renderDanmaku();
}

function renderDanmaku() {
  const windowEl = $('#danmakuWindow');
  windowEl.innerHTML = '';
  activeDanmakuNotes().forEach((note, index) => {
    const item = document.createElement('span');
    item.className = 'danmaku-item';
    item.dataset.curated = String(note.curated);
    item.style.setProperty('--lane', `${12 + (index % 5) * 39}px`);
    item.style.setProperty('--delay', `${index * -2.1}s`);
    item.textContent = note.text;
    windowEl.appendChild(item);
  });
  windowEl.classList.toggle('is-paused', !$('#danmakuToggle').checked);
}

function updateGlassesAvailability() {
  const entry = $('.glasses-entry > span');
  const stock = $('.device-stock strong');
  const stockDetail = $('.device-stock small');
  const stockBar = $('.stock-bar i');
  if (entry) entry.innerHTML = `<i></i>今日可借 ${glassesAvailable} / ${glassesCapacity}`;
  if (stock) stock.textContent = `${glassesAvailable} 副可借`;
  if (stockDetail) stockDetail.textContent = `共约 ${glassesCapacity} 副 · ${glassesCapacity - glassesAvailable} 副使用中或已预约`;
  if (stockBar) stockBar.style.width = `${glassesAvailable}%`;
}

function openGlassesBooking(book = null) {
  if ($('#special').classList.contains('is-glasses')) {
    showToast('设备 R-063 已分配，可在预约时段到一层 AR 设备服务台领取');
    $('#glassesStatus').scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }
  glassesTarget = book?.restricted ? `${book.location} · ${book.title}` : `馆内 AR 路线 · ${activeCollection}旗舰点位`;
  $('#deviceAgreement').checked = false;
  openDialog($('#glassesDialog'));
}

function activateGlasses() {
  if (glassesAvailable <= 0) {
    showToast('今日设备已全部预约，请改日再试');
    return;
  }
  if (!$('#deviceAgreement').checked) {
    showToast('请先确认设备使用与归还约定');
    return;
  }
  closeDialog($('#glassesDialog'));
  glassesAvailable -= 1;
  $('#special').classList.add('is-glasses');
  $('#glassesStatus').hidden = false;
  $('#glassesSession').textContent = `${selectedGlassesSlot} · ${glassesTarget}`;
  $('#glassesToggle').setAttribute('aria-pressed', 'true');
  updateGlassesAvailability();
  renderDanmaku();
  $('#glassesStatus').scrollIntoView({ behavior: 'smooth', block: 'center' });
  showToast('预约成功：设备 R-063 已为你保留');
}

function stopGlasses() {
  if (!$('#special').classList.contains('is-glasses')) return;
  glassesAvailable = Math.min(glassesCapacity, glassesAvailable + 1);
  $('#special').classList.remove('is-glasses');
  $('#glassesStatus').hidden = true;
  $('#glassesToggle').setAttribute('aria-pressed', 'false');
  $('#deviceAgreement').checked = false;
  updateGlassesAvailability();
  renderDanmaku();
  showToast('已结束眼镜导览，感谢按时归还设备');
}

function initParticleIntro() {
  const intro = $('#intro');
  const canvas = $('#introParticles');
  const context = canvas?.getContext('2d');
  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!intro || !canvas || !context) {
    return { burst() {}, destroy() {}, get reduced() { return true; } };
  }

  const palette = ['#f8f4ea', '#bfd5d0', '#c4a467', '#a95f49'];
  const pointer = { x: 0, y: 0, active: false };
  let particles = [];
  let width = 0;
  let height = 0;
  let stampSize = 0;
  let stampCenterY = 0;
  let pixelRatio = 1;
  let frameId = 0;
  let resizeTimer = 0;
  let previousTime = 0;
  let burstOpacity = 1;
  let mode = 'gather';
  let disposed = false;
  let reduced = motionQuery.matches;

  const constrainedDevice = () => (
    window.innerWidth <= 560
    || (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4)
    || (navigator.deviceMemory && navigator.deviceMemory <= 4)
  );

  function shuffle(points) {
    for (let index = points.length - 1; index > 0; index -= 1) {
      const target = Math.floor(Math.random() * (index + 1));
      [points[index], points[target]] = [points[target], points[index]];
    }
    return points;
  }

  function makeWordmarkPoints() {
    const mobile = width <= 560;
    stampSize = Math.round(Math.max(190, Math.min(mobile ? width * .7 : width * .36, height * .48, mobile ? 290 : 480)));
    stampCenterY = height * (mobile ? .35 : .36);
    const mask = document.createElement('canvas');
    mask.width = stampSize;
    mask.height = stampSize;
    const maskContext = mask.getContext('2d', { willReadFrequently: true });
    if (!maskContext) return [];

    maskContext.fillStyle = '#fff';
    maskContext.textAlign = 'center';
    maskContext.textBaseline = 'middle';
    maskContext.font = `900 ${Math.round(stampSize * .35)}px "Noto Serif SC", "Source Han Serif SC", "Microsoft YaHei", serif`;
    maskContext.fillText('榆林', stampSize / 2, stampSize * .36);
    maskContext.fillText('开卷', stampSize / 2, stampSize * .67);
    maskContext.fillRect(stampSize * .37, stampSize * .51, stampSize * .26, Math.max(1, stampSize * .006));

    const image = maskContext.getImageData(0, 0, stampSize, stampSize).data;
    // A denser sampling keeps the particle wordmark legible while it settles.
    const step = constrainedDevice() ? 3 : 2;
    const points = [];
    const offsetX = width / 2 - stampSize / 2;
    const offsetY = stampCenterY - stampSize / 2;
    for (let y = 0; y < stampSize; y += step) {
      for (let x = 0; x < stampSize; x += step) {
        if (image[(y * stampSize + x) * 4 + 3] > 96) {
          points.push({ x: offsetX + x, y: offsetY + y });
        }
      }
    }
    const limit = constrainedDevice() ? 2200 : 5200;
    return shuffle(points).slice(0, limit);
  }

  function scatteredPosition() {
    const margin = Math.min(width, height) * .12;
    const side = Math.floor(Math.random() * 4);
    if (side === 0) return { x: Math.random() * width, y: -Math.random() * margin };
    if (side === 1) return { x: width + Math.random() * margin, y: Math.random() * height };
    if (side === 2) return { x: Math.random() * width, y: height + Math.random() * margin };
    return { x: -Math.random() * margin, y: Math.random() * height };
  }

  function buildParticles() {
    const targets = makeWordmarkPoints();
    particles = targets.map((target, index) => {
      const start = scatteredPosition();
      return {
        x: reduced ? target.x : start.x,
        y: reduced ? target.y : start.y,
        targetX: target.x,
        targetY: target.y,
        velocityX: (Math.random() - .5) * 1.3,
        velocityY: (Math.random() - .5) * 1.3,
        radius: constrainedDevice() ? 1.3 + Math.random() * .6 : 1.2 + Math.random() * .9,
        color: index % 11 === 0 ? 3 : index % 7 === 0 ? 2 : index % 4 === 0 ? 1 : 0,
        phase: Math.random() * Math.PI * 2,
        spring: .014 + Math.random() * .009
      };
    });
  }

  function sizeCanvas() {
    if (mode === 'burst' || disposed) return;
    const bounds = canvas.getBoundingClientRect();
    width = Math.max(1, Math.round(bounds.width));
    height = Math.max(1, Math.round(bounds.height));
    pixelRatio = Math.min(window.devicePixelRatio || 1, constrainedDevice() ? 1.25 : 1.75);
    canvas.width = Math.round(width * pixelRatio);
    canvas.height = Math.round(height * pixelRatio);
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    buildParticles();
    draw(performance.now());
  }

  function drawGuide(time) {
    const pulse = 1 + Math.sin(time * .00065) * .008;
    context.save();
    context.translate(width / 2, stampCenterY);
    context.scale(pulse, pulse);
    context.strokeStyle = 'rgba(248, 244, 234, .09)';
    context.lineWidth = 1;
    context.beginPath();
    context.arc(0, 0, stampSize * .66, 0, Math.PI * 2);
    context.stroke();
    context.strokeStyle = 'rgba(191, 213, 208, .07)';
    context.beginPath();
    context.arc(0, 0, stampSize * .82, 0, Math.PI * 2);
    context.stroke();
    context.restore();
  }

  function updateParticles(time, delta) {
    const repelRadius = width <= 560 ? 62 : 94;
    const repelRadiusSquared = repelRadius * repelRadius;
    particles.forEach(particle => {
      if (mode === 'gather') {
        particle.velocityX += (particle.targetX - particle.x) * particle.spring * delta;
        particle.velocityY += (particle.targetY - particle.y) * particle.spring * delta;
        if (pointer.active) {
          const differenceX = particle.x - pointer.x;
          const differenceY = particle.y - pointer.y;
          const distanceSquared = differenceX * differenceX + differenceY * differenceY;
          if (distanceSquared > 0 && distanceSquared < repelRadiusSquared) {
            const distance = Math.sqrt(distanceSquared);
            const force = (1 - distance / repelRadius) * 1.85 * delta;
            particle.velocityX += differenceX / distance * force;
            particle.velocityY += differenceY / distance * force;
          }
        }
        const damping = Math.pow(.875, delta);
        particle.velocityX *= damping;
        particle.velocityY *= damping;
      } else {
        const damping = Math.pow(.988, delta);
        particle.velocityX *= damping;
        particle.velocityY *= damping;
      }
      particle.x += particle.velocityX * delta;
      particle.y += particle.velocityY * delta;
      particle.renderRadius = particle.radius * (1 + Math.sin(time * .0014 + particle.phase) * .055);
    });
    if (mode === 'burst') burstOpacity = Math.max(0, burstOpacity - .025 * delta);
  }

  function draw(time) {
    context.clearRect(0, 0, width, height);
    if (mode === 'gather') drawGuide(time);

    context.save();
    context.globalCompositeOperation = 'screen';
    context.globalAlpha = .14 * burstOpacity;
    context.fillStyle = '#f8f4ea';
    context.beginPath();
    particles.forEach(particle => {
      const radius = (particle.renderRadius || particle.radius) * 2.8;
      context.moveTo(particle.x + radius, particle.y);
      context.arc(particle.x, particle.y, radius, 0, Math.PI * 2);
    });
    context.fill();

    palette.forEach((color, colorIndex) => {
      context.globalAlpha = (colorIndex === 3 ? .86 : .97) * burstOpacity;
      context.fillStyle = color;
      context.beginPath();
      particles.forEach(particle => {
        if (particle.color !== colorIndex) return;
        const radius = particle.renderRadius || particle.radius;
        context.moveTo(particle.x + radius, particle.y);
        context.arc(particle.x, particle.y, radius, 0, Math.PI * 2);
      });
      context.fill();
    });
    context.restore();
  }

  function animate(time) {
    if (disposed) return;
    const delta = previousTime ? Math.min(2, (time - previousTime) / 16.67) : 1;
    previousTime = time;
    updateParticles(time, delta);
    draw(time);
    if (mode !== 'burst' || burstOpacity > .01) frameId = requestAnimationFrame(animate);
  }

  function handlePointerMove(event) {
    const bounds = canvas.getBoundingClientRect();
    pointer.x = event.clientX - bounds.left;
    pointer.y = event.clientY - bounds.top;
    pointer.active = true;
  }

  function handlePointerLeave() {
    pointer.active = false;
  }

  function handleResize() {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(sizeCanvas, 120);
  }

  function handleVisibility() {
    if (document.hidden) {
      cancelAnimationFrame(frameId);
      frameId = 0;
    } else if (!disposed && !reduced && !frameId) {
      previousTime = 0;
      frameId = requestAnimationFrame(animate);
    }
  }

  function handleMotionChange(event) {
    reduced = event.matches;
    cancelAnimationFrame(frameId);
    frameId = 0;
    previousTime = 0;
    buildParticles();
    draw(performance.now());
    if (!reduced) frameId = requestAnimationFrame(animate);
  }

  function burst() {
    if (reduced || mode === 'burst') return;
    mode = 'burst';
    pointer.active = false;
    burstOpacity = 1;
    const centerX = width / 2;
    particles.forEach(particle => {
      let differenceX = particle.x - centerX;
      let differenceY = particle.y - stampCenterY;
      let distance = Math.hypot(differenceX, differenceY);
      if (distance < 1) {
        const angle = Math.random() * Math.PI * 2;
        differenceX = Math.cos(angle);
        differenceY = Math.sin(angle);
        distance = 1;
      }
      const speed = 7 + Math.random() * 11;
      particle.velocityX = differenceX / distance * speed + (Math.random() - .5) * 2;
      particle.velocityY = differenceY / distance * speed + (Math.random() - .5) * 2;
    });
  }

  function destroy() {
    disposed = true;
    cancelAnimationFrame(frameId);
    window.clearTimeout(resizeTimer);
    window.removeEventListener('resize', handleResize);
    document.removeEventListener('visibilitychange', handleVisibility);
    intro.removeEventListener('pointermove', handlePointerMove);
    intro.removeEventListener('pointerleave', handlePointerLeave);
    motionQuery.removeEventListener?.('change', handleMotionChange);
    particles = [];
  }

  window.addEventListener('resize', handleResize, { passive: true });
  document.addEventListener('visibilitychange', handleVisibility);
  intro.addEventListener('pointermove', handlePointerMove, { passive: true });
  intro.addEventListener('pointerleave', handlePointerLeave);
  motionQuery.addEventListener?.('change', handleMotionChange);
  sizeCanvas();
  if (!reduced) frameId = requestAnimationFrame(animate);

  return { burst, destroy, get reduced() { return reduced; } };
}

function enterClassicsExperience() {
  const transition = $('#classicsTransition');
  const special = $('#special');
  const heading = $('#specialTitle');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reducedMotion) {
    special.scrollIntoView({ behavior: 'auto' });
    heading.tabIndex = -1;
    heading.focus({ preventScroll: true });
    return;
  }

  if (transition.classList.contains('is-active')) return;
  transition.classList.add('is-active');
  transition.setAttribute('aria-hidden', 'false');
  document.body.classList.add('classics-transitioning');

  window.setTimeout(() => {
    special.scrollIntoView({ behavior: 'auto' });
    special.classList.add('is-revealed');
  }, 1450);

  window.setTimeout(() => {
    transition.classList.remove('is-active');
    transition.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('classics-transitioning');
    heading.tabIndex = -1;
    heading.focus({ preventScroll: true });
  }, 2100);
}

function initScrollReveals() {
  const gateway = $('#classicsGateway');
  const targets = [
    ...$$('.section-heading'),
    $('#zoneIndex'),
    $('#zonePanel'),
    $('.rokid-feature'),
    $('#collectionTabs'),
    $('#classicalCollectionPanel'),
    $('.mini-program__copy'),
    $('.mini-program__access')
  ].filter(Boolean);
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reducedMotion || !('IntersectionObserver' in window)) {
    gateway.classList.add('is-visible');
    targets.forEach(target => target.classList.add('is-visible'));
    return;
  }

  document.body.classList.add('has-reveal-motion');
  targets.forEach(target => target.classList.add('reveal-on-scroll'));
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: .12, rootMargin: '0px 0px -6% 0px' });

  targets.forEach(target => observer.observe(target));
  observer.observe(gateway);
}

function initStudyCompanion() {
  const state = $('#studyTimerState');
  const timeInput = $('#studyTimerTimeInput');
  const totalDisplay = $('#studyTotalDisplay');
  const start = $('#studyTimerStart');
  const reset = $('#studyTimerReset');
  if (!timeInput || !state || !start || !reset) return;
  const key = 'yulin-study-session-v1';
  let timerId = null;
  let remaining = 0;
  let totalSeconds = 0;
  let sessionSeconds = 0;
  let running = false;
  const format = seconds => `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
  const sync = () => {
    const payload = { remaining, running, totalSeconds, sessionSeconds, updatedAt: Date.now() };
    localStorage.setItem(key, JSON.stringify(payload));
    timeInput.value = format(remaining);
    state.textContent = running ? '专注进行中 · 小程序同步中' : (remaining === 0 && sessionSeconds ? '本轮完成' : '设置时长后开始');
    totalDisplay.textContent = format(totalSeconds);
    start.querySelector('span').textContent = running ? '暂停专注' : '开始专注';
    start.querySelector('i')?.setAttribute('data-lucide', running ? 'pause' : 'play');
    refreshIcons();
  };
  const tick = () => {
    if (!running) return;
    remaining = Math.max(0, remaining - 1);
    totalSeconds += 1;
    if (!remaining) { running = false; sessionSeconds = 0; window.clearInterval(timerId); timerId = null; }
    sync();
  };
  const readTimeInput = () => { const match = String(timeInput.value).trim().match(/^(\d{1,3}):([0-5]\d)$/); const parsed = match ? Math.min(240 * 60, Number(match[1]) * 60 + Number(match[2])) : 0; return parsed || 25 * 60; };
  timeInput.addEventListener('change', () => { if (!running) { remaining = readTimeInput(); sessionSeconds = remaining; sync(); } });
  start.addEventListener('click', () => { if (!running) { if (!remaining) { sessionSeconds = readTimeInput(); remaining = sessionSeconds; } running = true; timerId = window.setInterval(tick, 1000); } else { running = false; window.clearInterval(timerId); timerId = null; } sync(); });
  reset.addEventListener('click', () => { running = false; window.clearInterval(timerId); timerId = null; remaining = readTimeInput(); sessionSeconds = remaining; sync(); });
  try { const saved = JSON.parse(localStorage.getItem(key) || 'null'); if (saved) { remaining = Number(saved.remaining) || readTimeInput(); totalSeconds = Number(saved.totalSeconds) || 0; sessionSeconds = Number(saved.sessionSeconds) || remaining; } } catch {}
  sync();
}

function initSectionTransitions() {
  const sections = $$('.reading-section, .zones-section, .special-section, .mini-program-section, .memory-section');
  if (!sections.length) return;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  sections.forEach(section => section.classList.add('section-enter'));
  if (reducedMotion || !('IntersectionObserver' in window)) {
    sections.forEach(section => section.classList.add('is-entered'));
    return;
  }
  document.body.classList.add('has-section-transitions');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-entered');
      observer.unobserve(entry.target);
    });
  }, { threshold: .08, rootMargin: '0px 0px -8% 0px' });
  sections.forEach(section => observer.observe(section));
}

function openCollectionSelection(button) {
  if (!button) return;
  const specialSection = $('#special');
  if (specialSection?.classList.contains('is-collection-transitioning')) return;
  activeCollection = button.dataset.collection;
  activeClassicalItem = 0;
  $$('#collectionTabs button').forEach(candidate => {
    const active = candidate === button;
    candidate.classList.toggle('is-active', active);
    candidate.setAttribute('aria-selected', String(active));
  });
  button.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  renderClassicsNav();
  renderManuscript();
  button.classList.add('is-entering');
  specialSection?.classList.add('is-collection-transitioning');
  const collectionPanel = $('#classicalCollectionPanel');
  if (!collectionPanel) return;
  const transitionDuration = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 520;
  window.setTimeout(() => {
    collectionPanel.classList.remove('is-awaiting-selection');
    collectionPanel.classList.add('is-collection-open', 'is-single-book');
    specialSection?.classList.remove('is-collection-transitioning');
    specialSection?.classList.add('is-collection-entered');
    button.classList.remove('is-entering');
    $('#collectionCarousel')?.setAttribute('hidden', '');
    $('#collectionTabs')?.setAttribute('hidden', '');
    collectionPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, transitionDuration);
}
window.openCollectionSelection = openCollectionSelection;

function initEvents() {
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  const introVideo = $('.intro__video');
  if (introVideo) {
    introVideo.muted = true;
    introVideo.defaultMuted = true;
    const startIntroVideo = () => {
      if ($('#intro')?.hidden) return;
      introVideo.play().catch(() => {});
    };
    introVideo.addEventListener('loadeddata', startIntroVideo);
    introVideo.addEventListener('canplay', startIntroVideo);
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) startIntroVideo();
    });
    window.addEventListener('pageshow', startIntroVideo);
    introVideo.load();
    startIntroVideo();
  }
  const navigationEntry = performance.getEntriesByType?.('navigation')?.[0];
  const isReload = navigationEntry?.type === 'reload';
  if (isReload) {
    history.replaceState({}, document.title, `${window.location.pathname}${window.location.search}`);
    window.scrollTo(0, 0);
    window.setTimeout(() => window.scrollTo(0, 0), 0);
  }
  const particleIntro = initParticleIntro();
  const dismissIntro = () => {
    const intro = $('#intro');
    if (!intro || intro.hidden) return;
    document.body.classList.remove('intro-open');
    intro.hidden = true;
    intro.setAttribute('aria-hidden', 'true');
    particleIntro.destroy();
  };
  const deepLink = window.location.hash && window.location.hash !== '#top';
  if (deepLink && !isReload) {
    dismissIntro();
  }
  window.addEventListener('scroll', () => {
    if (window.scrollY > 8) dismissIntro();
  }, { passive: true, once: true });
  let introOpening = false;
  $('#introEnter').addEventListener('click', () => {
    if (introOpening) return;
    introOpening = true;
    const intro = $('#intro');
    const enterButton = $('#introEnter');
    const scatterDuration = particleIntro.reduced ? 0 : 260;
    const curtainDuration = particleIntro.reduced ? 80 : 1080;
    enterButton.disabled = true;
    enterButton.setAttribute('aria-busy', 'true');
    intro.classList.add('is-scattering');
    particleIntro.burst();
    setTimeout(() => {
      intro.classList.add('is-opening');
      document.body.classList.remove('intro-open');
    }, scatterDuration);
    setTimeout(() => {
      particleIntro.destroy();
      intro.hidden = true;
      intro.setAttribute('aria-hidden', 'true');
      window.scrollTo(0, 0);
      $('#globalSearch').focus({ preventScroll: true });
    }, scatterDuration + curtainDuration);
  });

  $$('[data-scroll]').forEach(button => button.addEventListener('click', () => {
    document.getElementById(button.dataset.scroll).scrollIntoView({ behavior: 'smooth' });
  }));
  $$('[data-enter-classics]').forEach(button => button.addEventListener('click', enterClassicsExperience));

  $('#globalSearch').addEventListener('click', () => {
    switchService('catalog');
    $('#reading').scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => $('#catalogSearch').focus(), 500);
  });
  $('.account-button').addEventListener('click', () => showToast('读者证登录将在真实系统接入后启用'));

  $$('.service-tab').forEach(button => button.addEventListener('click', () => switchService(button.dataset.service)));
  $$('[data-open-service]').forEach(button => button.addEventListener('click', () => {
    switchService(button.dataset.openService);
    $('#reading').scrollIntoView({ behavior: 'smooth' });
  }));
  $('#openSeatBooking').addEventListener('click', () => {
    renderSeats();
    updateSeatSummary();
    openDialog($('#seatDialog'));
  });
  $$('[data-book-seat]').forEach(button => button.addEventListener('click', () => {
    selectedFloor = button.dataset.floor || '一层';
    selectedTime = button.dataset.time || '09:00-12:00';
    selectedSeat = null;
    $$('#floorSwitch button').forEach(option => option.classList.toggle('is-active', option.dataset.floor === selectedFloor));
    $$('#timeSwitch button').forEach(option => option.classList.toggle('is-active', option.dataset.time === selectedTime));
    renderSeats();
    updateSeatSummary();
    openDialog($('#seatDialog'));
  }));
  $$('[data-study-map]').forEach(button => button.addEventListener('click', () => {
    openVenueGuide({
      floor: button.dataset.mapFloor,
      target: button.dataset.mapTarget,
      label: button.dataset.mapLabel,
      finalStep: `按官方楼层图前往${button.dataset.mapLabel}，以现场标识为准`
    });
  }));
  $('#openVenueGuide').addEventListener('click', () => openVenueGuide());
  $('#venueFloorTabs').addEventListener('click', event => {
    const button = event.target.closest('[data-map-floor]');
    if (!button) return;
    activeMapFloor = button.dataset.mapFloor;
    renderVenueMap();
  });
  $('#mapStartSelect').addEventListener('change', event => {
    const floor = venueFloors[activeMapFloor];
    if (!floor?.nodes.some(node => node.id === event.target.value)) return;
    mapStartByFloor[activeMapFloor] = event.target.value;
    renderVenueMap();
    showToast(`已将${floor.code}起点设为：${floor.nodes.find(node => node.id === event.target.value).label}`);
  });
  $('#venueFloorPlan').addEventListener('click', event => {
    const button = event.target.closest('[data-venue-node]');
    if (button) selectVenueNode(button.dataset.venueNode);
  });

  $('#zoneIndex').addEventListener('click', event => {
    const button = event.target.closest('[data-zone]');
    if (!button) return;
    activeZone = button.dataset.zone;
    renderLibraryZone();
  });
  $('#zoneIndex').addEventListener('keydown', event => {
    if (!['ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
    const tabs = $$('#zoneIndex [data-zone]');
    const currentIndex = tabs.findIndex(tab => tab.dataset.zone === activeZone);
    let nextIndex = currentIndex;
    if (event.key === 'Home') nextIndex = 0;
    else if (event.key === 'End') nextIndex = tabs.length - 1;
    else if (event.key === 'ArrowDown' || event.key === 'ArrowRight') nextIndex = (currentIndex + 1) % tabs.length;
    else nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    event.preventDefault();
    activeZone = tabs[nextIndex].dataset.zone;
    renderLibraryZone();
    tabs[nextIndex].focus();
  });
  $('#navigateZone').addEventListener('click', () => {
    const zone = libraryZones[activeZone];
    openVenueGuide({ floor: zone.mapFloor, target: zone.mapTarget, label: zone.location, finalStep: zone.finalStep });
  });

  $('#catalogSearch').addEventListener('input', () => { catalogDisplayLimit = 5; renderCatalog(); });
  $('#catalogLoadMore').addEventListener('click', () => {
    catalogDisplayLimit += 5;
    renderCatalog();
  });
  $$('.filter-button').forEach(button => button.addEventListener('click', () => {
    activeStatus = button.dataset.status;
    catalogDisplayLimit = 5;
    $$('.filter-button').forEach(candidate => {
      const active = candidate === button;
      candidate.classList.toggle('is-active', active);
      candidate.setAttribute('aria-pressed', String(active));
    });
    renderCatalog();
  }));

  $('#seatDate').addEventListener('change', () => {
    selectedSeat = null;
    renderSeats();
    updateSeatSummary();
  });

  $$('#seatDialog .segmented').forEach(group => group.addEventListener('click', event => {
    const button = event.target.closest('button');
    if (!button) return;
    $$('button', group).forEach(candidate => candidate.classList.toggle('is-active', candidate === button));
    if (button.dataset.floor) selectedFloor = button.dataset.floor;
    if (button.dataset.time) selectedTime = button.dataset.time;
    selectedSeat = null;
    renderSeats();
    updateSeatSummary();
  }));

  $('#confirmSeat').addEventListener('click', () => {
    if (!$('#seatDate').value) {
      showToast('请先选择预约日期');
      return;
    }
    if (!selectedSeat) {
      showToast('请先选择一个可预约座位');
      return;
    }
    const reserved = selectedSeat;
    const key = activeSeatKey();
    if (!seatReservations.has(key)) seatReservations.set(key, new Set());
    seatReservations.get(key).add(reserved);
    selectedSeat = null;
    renderSeats();
    updateSeatSummary();
    closeDialog($('#seatDialog'));
    showToast(`预约成功：${$('#seatDate').value} ${selectedFloor} ${String(reserved).padStart(2, '0')}号座位`);
  });

  const scrollCollections = direction => {
    const tabs = $('#collectionTabs');
    if (!tabs) return;
    tabs.scrollBy({ left: direction * Math.max(260, tabs.clientWidth * .72), behavior: 'smooth' });
  };
  const collectionTabs = $('#collectionTabs');
  if (collectionTabs) {
    let dragStartX = 0;
    let dragStartScroll = 0;
    let isDragging = false;
    collectionTabs.addEventListener('pointerdown', event => {
      if (event.pointerType === 'mouse' && event.button !== 0) return;
      if (event.target.closest('a, button')) return;
      dragStartX = event.clientX;
      dragStartScroll = collectionTabs.scrollLeft;
      isDragging = true;
      collectionTabs.classList.add('is-dragging');
    });
    collectionTabs.addEventListener('pointermove', event => {
      if (!isDragging) return;
      collectionTabs.scrollLeft = dragStartScroll - (event.clientX - dragStartX);
    });
    const stopCollectionDrag = event => {
      if (!isDragging) return;
      isDragging = false;
      collectionTabs.classList.remove('is-dragging');
    };
    collectionTabs.addEventListener('pointerup', stopCollectionDrag);
    collectionTabs.addEventListener('pointercancel', stopCollectionDrag);
    collectionTabs.addEventListener('wheel', event => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
      event.preventDefault();
      collectionTabs.scrollLeft += event.deltaY;
    }, { passive: false });
    const reduceFigureMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    $$('[data-figure]', collectionTabs).forEach(item => {
      item.addEventListener('pointermove', event => {
        if (event.pointerType === 'touch' || reduceFigureMotion.matches) return;
        const bounds = item.getBoundingClientRect();
        const x = Math.max(-1, Math.min(1, (event.clientX - bounds.left - bounds.width / 2) / (bounds.width / 2)));
        const y = Math.max(-1, Math.min(1, (event.clientY - bounds.top - bounds.height / 2) / (bounds.height / 2)));
        item.style.setProperty('--figure-shift-x', `${(x * 5).toFixed(2)}px`);
        item.style.setProperty('--figure-shift-y', `${(y * 3).toFixed(2)}px`);
        item.style.setProperty('--figure-rotate', `${(x * 4).toFixed(2)}deg`);
      });
      item.addEventListener('pointerleave', () => {
        item.style.removeProperty('--figure-shift-x');
        item.style.removeProperty('--figure-shift-y');
        item.style.removeProperty('--figure-rotate');
      });
    });
  }
  $('#collectionPrev')?.addEventListener('click', () => scrollCollections(-1));
  $('#collectionNext')?.addEventListener('click', () => scrollCollections(1));
  $('#collectionBack')?.addEventListener('click', () => {
    $('#special')?.classList.remove('is-collection-entered');
    $('#special')?.classList.remove('is-collection-transitioning');
    $$('#collectionTabs button').forEach(button => button.classList.remove('is-entering'));
    const collectionCarousel = $('#collectionCarousel');
    if (collectionCarousel) collectionCarousel.hidden = false;
    const collectionTabs = $('#collectionTabs');
    if (collectionTabs) collectionTabs.hidden = false;
    $('#classicalCollectionPanel')?.classList.add('is-awaiting-selection');
    $('#classicalCollectionPanel')?.classList.remove('is-collection-open');
    $('#classicalCollectionPanel')?.classList.remove('is-single-book');
    $('#collectionTabs')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
  $('#collectionBackInline')?.addEventListener('click', () => $('#collectionBack')?.click());

  $('#annotationSwitch').addEventListener('click', event => {
    const button = event.target.closest('[data-note]');
    if (!button) return;
    activeNote = button.dataset.note;
    $$('#annotationSwitch button').forEach(candidate => {
      const active = candidate === button;
      candidate.classList.toggle('is-active', active);
      candidate.setAttribute('aria-pressed', String(active));
    });
    renderManuscript();
  });

  $('#sceneTrigger').addEventListener('click', () => {
    const stage = $('#narrativeStage');
    stage.classList.remove('is-playing');
    requestAnimationFrame(() => requestAnimationFrame(() => stage.classList.add('is-playing')));
    const sceneVideoDialog = $('#sceneVideoDialog');
    const sceneVideo = $('#sceneVideo');
    if (sceneVideoDialog && sceneVideo) {
      sceneVideoDialog.showModal();
      sceneVideo.currentTime = 0;
      sceneVideo.play().catch(() => {});
    }
    showToast(`正在展开「${activeManuscript().story.title}」段落场景`);
  });
  $('#closeSceneVideo')?.addEventListener('click', () => {
    const sceneVideo = $('#sceneVideo');
    sceneVideo?.pause();
    closeDialog($('#sceneVideoDialog'));
  });

  $('#danmakuToggle').addEventListener('change', renderDanmaku);
  $('#noteForm').addEventListener('submit', event => {
    event.preventDefault();
    const input = $('#noteInput');
    const text = input.value.trim();
    if (!text) return;
    activeDanmakuNotes().unshift({ text, curated: false });
    input.value = '';
    renderDanmaku();
    showToast('笺注已绑定当前篇章，审核后可成为精选');
  });

  $('#glassesToggle').addEventListener('click', () => openGlassesBooking());
  $('#openRestricted').addEventListener('click', () => {
    const book = selectedBook;
    closeDialog($('#bookDialog'));
    openGlassesBooking(book);
  });
  $('#closeGlasses').addEventListener('click', stopGlasses);
  $('#glassesSlots').addEventListener('click', event => {
    const button = event.target.closest('[data-slot]');
    if (!button) return;
    selectedGlassesSlot = button.dataset.slot;
    $$('#glassesSlots button').forEach(candidate => candidate.classList.toggle('is-active', candidate === button));
  });
  $('#confirmGlasses').addEventListener('click', activateGlasses);

  $('#reserveBook').addEventListener('click', () => {
    if (!selectedBook || bookRequests.has(selectedBook.call)) return;
    bookRequests.add(selectedBook.call);
    closeDialog($('#bookDialog'));
    showToast(selectedBook.status === '借出' ? `已加入「${selectedBook.title}」预约队列` : `已将「${selectedBook.title}」加入借阅单`);
  });
  $('#navigateBook').addEventListener('click', () => {
    if (!selectedBook) return;
    closeDialog($('#bookDialog'));
    openVenueGuide({
      floor: selectedBook.mapFloor || 'f1',
      target: selectedBook.mapTarget || 'desk',
      label: `${selectedBook.location} · ${selectedBook.title}`,
      finalStep: selectedBook.restricted ? '到三层馆藏文献阅览区服务点，由馆员确认馆藏位置' : `按索书号抵达 ${selectedBook.location}`
    });
  });

  $('[data-close-dialog]').addEventListener('click', () => closeDialog($('#bookDialog')));
  $('[data-close-seat-dialog]').addEventListener('click', () => closeDialog($('#seatDialog')));
  $('[data-close-map]').addEventListener('click', () => closeDialog($('#mapDialog')));
  $('[data-close-glasses-dialog]').addEventListener('click', () => closeDialog($('#glassesDialog')));
  [$('#bookDialog'), $('#seatDialog'), $('#mapDialog'), $('#glassesDialog')].forEach(dialog => dialog.addEventListener('click', event => {
    if (event.target === dialog) closeDialog(dialog);
  }));
}

function initLibraryAssistant() {
  const observed = new WeakSet();
  const answered = new WeakSet();
  const companionResponses = new WeakMap();
  const companionPromptActive = new WeakSet();
  const companionResetTimers = new WeakMap();
  const companionAnswerTimers = new WeakMap();
  const companionHintTimers = new WeakMap();
  const companionCycleTimers = new WeakMap();
  const companionCycleIndex = new WeakMap();
  const companionCycleMessages = ['我在听', '戳一戳，向我提问吧', '我可以帮你找书、找座位', '也可以带你认识榆林文化'];
  const stopCompanionCycle = companion => {
    const timer = companionCycleTimers.get(companion);
    if (timer) window.clearInterval(timer);
    companionCycleTimers.delete(companion);
  };
  const startCompanionCycle = companion => {
    if (!companion || companionCycleTimers.has(companion)) return;
    stopCompanionCycle(companion);
    companionCycleIndex.set(companion, 0);
    const update = () => {
      if (companionPromptActive.has(companion)) return;
      const bubble = companion.querySelector('.bubble');
      if (!bubble) return;
      const index = companionCycleIndex.get(companion) || 0;
      bubble.textContent = companionCycleMessages[index];
      companionCycleIndex.set(companion, (index + 1) % companionCycleMessages.length);
    };
    update();
    companionCycleTimers.set(companion, window.setInterval(update, 2600));
  };
  const watchCompanion = companion => {
    if (!companion || companion.dataset.libraryAssistantReady === 'true') return;
    companion.dataset.libraryAssistantReady = 'true';
    startCompanionCycle(companion);
  };
  const promptDialog = $('#assistantPromptDialog');
  const promptInput = $('#assistantPromptInput');
  let promptCompanion = null;
  let promptPositionFrame = 0;
  const positionPromptBesideCompanion = () => {
    if (!promptDialog?.open || !promptCompanion?.isConnected) return;
    const companionBounds = promptCompanion.getBoundingClientRect();
    const promptBounds = promptDialog.getBoundingClientRect();
    const viewportPadding = 12;
    const companionGap = 12;
    const roomOnRight = window.innerWidth - companionBounds.right - companionGap - viewportPadding;
    const roomOnLeft = companionBounds.left - companionGap - viewportPadding;
    const placeOnLeft = roomOnRight < promptBounds.width && roomOnLeft >= promptBounds.width;
    const desiredLeft = placeOnLeft
      ? companionBounds.left - promptBounds.width - companionGap
      : companionBounds.right + companionGap;
    const roomAbove = companionBounds.top - companionGap - viewportPadding;
    const placeAbove = roomAbove >= promptBounds.height;
    const desiredTop = placeAbove
      ? companionBounds.top - promptBounds.height - companionGap
      : companionBounds.top + (companionBounds.height - promptBounds.height) / 2;
    const maxLeft = Math.max(viewportPadding, window.innerWidth - promptBounds.width - viewportPadding);
    const maxTop = Math.max(viewportPadding, window.innerHeight - promptBounds.height - viewportPadding);
    promptDialog.style.left = `${Math.min(Math.max(desiredLeft, viewportPadding), maxLeft)}px`;
    promptDialog.style.top = `${Math.min(Math.max(desiredTop, viewportPadding), maxTop)}px`;
  };
  const trackPromptPosition = () => {
    window.cancelAnimationFrame(promptPositionFrame);
    const update = () => {
      positionPromptBesideCompanion();
      if (promptDialog?.open) promptPositionFrame = window.requestAnimationFrame(update);
    };
    promptPositionFrame = window.requestAnimationFrame(update);
  };
  const answerQuestion = query => {
    if (/自习|座位/.test(query)) {
      $('#studySeats')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return '自习座位主要在一层 24 小时城市书房、二层自修区和三层自修区，已为你打开座位专区。';
    }
    if (/导航|怎么走|在哪里|位置|楼层|服务台|少儿|报刊/.test(query)) {
      window.setTimeout(() => $('#openVenueGuide')?.click(), 120);
      return '已为你打开馆内地图，可以切换楼层并查看建议路线。';
    }
    if (/开放|时间|几点|闭馆|营业/.test(query)) return '开放时间为周一至周日 09:00–21:30；节假日及特殊活动请以馆方公告为准。';
    if (/镇北台|长城|边塞/.test(query)) return '镇北台位于榆林城北，是明长城沿线的重要军事瞭望设施。';
    if (/红石峡|峡谷|摩崖/.test(query)) return '红石峡以红色砂岩峡谷和摩崖石刻闻名，是榆林重要的边塞文化地标。';
    if (/窑洞|地貌|黄土|剪纸|民俗/.test(query)) return '榆林北接毛乌素沙地、南连黄土高原，窑洞、剪纸和信天游都与当地地貌和生活方式紧密相连。';
    if (/古籍|四库|地方志|善本|金石|藏书/.test(query)) return '古典藏书包含《四库全书》、榆林地方志、古籍善本和金石拓本，均为馆内阅览。';
    return '我可以帮你导航，也能回答榆林地貌、镇北台、红石峡、窑洞、剪纸和古典藏书等问题。';
  };
  const setCompanionPrompt = companion => {
    const bubble = companion.querySelector('.bubble');
    if (!bubble) return;
    companionPromptActive.add(companion);
    stopCompanionCycle(companion);
    companion.dataset.promptActive = 'true';
    const response = companionResponses.get(companion);
    if (response) {
      answered.add(companion);
      if (bubble.textContent !== response) bubble.textContent = response;
    } else {
      answered.delete(companion);
    }
    if (!observed.has(companion)) {
      observed.add(companion);
      const observer = new MutationObserver(() => {
        const currentBubble = companion.querySelector('.bubble');
        if (!currentBubble) return;
        const response = companionResponses.get(companion);
        if (response && companionPromptActive.has(companion)) {
          if (currentBubble.textContent !== response) currentBubble.textContent = response;
          return;
        }
        if (companionPromptActive.has(companion)) return;
        if (/我在听/.test(currentBubble.textContent) && !companionHintTimers.has(companion)) {
          const hintTimer = window.setTimeout(() => {
            companionHintTimers.delete(companion);
            const nextBubble = companion.querySelector('.bubble');
            if (!companionPromptActive.has(companion) && nextBubble && /我在听/.test(nextBubble.textContent)) {
              nextBubble.textContent = '戳一戳，向我提问吧';
            }
          }, 900);
          companionHintTimers.set(companion, hintTimer);
        }
      });
      observer.observe(companion, { childList: true, characterData: true, subtree: true });
    }
    promptCompanion = companion;
    promptInput.value = '';
    promptDialog?.show();
    positionPromptBesideCompanion();
    trackPromptPosition();
    window.setTimeout(() => promptInput?.focus(), 0);
  };
  const resumeCompanionCycle = companion => {
    if (!companion) return;
    companionPromptActive.delete(companion);
    delete companion.dataset.promptActive;
    delete companion.dataset.answerActive;
    startCompanionCycle(companion);
    answered.delete(companion);
    companionResponses.delete(companion);
    const resetTimer = companionResetTimers.get(companion);
    if (resetTimer) window.clearTimeout(resetTimer);
    companionResetTimers.delete(companion);
    const answerTimer = companionAnswerTimers.get(companion);
    if (answerTimer) window.clearInterval(answerTimer);
    companionAnswerTimers.delete(companion);
    const bubble = companion.querySelector('.bubble');
    if (bubble && !/我在听|戳一戳/.test(bubble.textContent)) bubble.textContent = '我在听';
  };
  const closePromptAndResume = () => {
    const companion = promptCompanion;
    promptDialog?.close();
    resumeCompanionCycle(companion);
  };
  promptDialog?.addEventListener('cancel', event => {
    event.preventDefault();
    closePromptAndResume();
  });
  promptDialog?.addEventListener('close', () => {
    window.cancelAnimationFrame(promptPositionFrame);
    promptPositionFrame = 0;
  });
  window.addEventListener('resize', positionPromptBesideCompanion, { passive: true });
  $('#assistantPromptForm')?.addEventListener('submit', event => {
    event.preventDefault();
    if (!promptCompanion || !promptInput.value.trim()) { closePromptAndResume(); return; }
    const bubble = promptCompanion.querySelector('.bubble');
    answered.add(promptCompanion);
    const response = answerQuestion(promptInput.value.trim());
    companionResponses.set(promptCompanion, response);
    if (bubble) bubble.textContent = response;
    promptDialog?.close();
    delete promptCompanion.dataset.promptActive;
    promptCompanion.dataset.answerActive = 'true';
    if (bubble) {
      bubble.style.visibility = 'visible';
      bubble.style.opacity = '1';
      bubble.style.pointerEvents = 'auto';
      bubble.textContent = response;
    }
    const companion = promptCompanion;
    const answerTimer = window.setInterval(() => {
      if (!companionPromptActive.has(companion)) return;
      const currentBubble = companion.querySelector('.bubble');
      if (currentBubble && currentBubble.textContent !== response) currentBubble.textContent = response;
    }, 120);
    companionAnswerTimers.set(companion, answerTimer);
    const resetTimer = window.setTimeout(() => resumeCompanionCycle(companion), 4200);
    companionResetTimers.set(companion, resetTimer);
  });
  document.addEventListener('dblclick', event => {
    const path = typeof event.composedPath === 'function' ? event.composedPath() : [];
    const companion = event.target?.closest?.('#wbCompanion') || path.find(node => node?.id === 'wbCompanion');
    if (!companion) return;
    setCompanionPrompt(companion);
  }, true);
  const companionObserver = new MutationObserver(() => {
    const companion = document.querySelector('#wbCompanion');
    if (companion) watchCompanion(companion);
  });
  companionObserver.observe(document.body, { childList: true, subtree: true });
  const existingCompanion = document.querySelector('#wbCompanion');
  if (existingCompanion) watchCompanion(existingCompanion);
}

function initCompanionRewards() {
  const storageKey = 'yulin-study-session-v1';
  const outfitKey = 'yulin-companion-outfit-v1';
  const ranks = [
    { id: 'scholar', name: '秀才', hours: 0, look: '青衿初学' },
    { id: 'juren', name: '举人', hours: 10, look: '月白长衫' },
    { id: 'gongsheng', name: '贡生', hours: 30, look: '玉带书生' },
    { id: 'jinshi', name: '进士', hours: 80, look: '绛色官袍' },
    { id: 'tanhua', name: '探花', hours: 150, look: '金枝探花' },
    { id: 'bangyan', name: '榜眼', hours: 250, look: '云纹榜眼' },
    { id: 'zhuangyuan', name: '状元', hours: 400, look: '翰墨状元' }
  ];
  const readSeconds = () => {
    try { return Math.max(0, Number(JSON.parse(localStorage.getItem(storageKey) || '{}').totalSeconds) || 0); } catch { return 0; }
  };
  const readOutfit = () => localStorage.getItem(outfitKey) || 'scholar';
  const rankFor = seconds => ranks.reduce((current, rank) => seconds >= rank.hours * 3600 ? rank : current, ranks[0]);
  const formatHours = seconds => `${Math.floor(seconds / 3600)}小时${Math.floor((seconds % 3600) / 60)}分`;
  const render = () => {
    const seconds = readSeconds();
    const current = rankFor(seconds);
    const unlocked = ranks.filter(rank => seconds >= rank.hours * 3600);
    let selected = ranks.find(rank => rank.id === readOutfit()) || current;
    if (!unlocked.some(rank => rank.id === selected.id)) { selected = current; localStorage.setItem(outfitKey, selected.id); }
    const widget = document.querySelector('#companionRewardWidget');
    if (!widget) return;
    widget.dataset.rank = current.id;
    widget.querySelector('[data-reward-current]').textContent = `${selected.name} · ${selected.look}`;
    widget.querySelector('[data-reward-hours]').textContent = `累计专注 ${formatHours(seconds)}`;
    widget.querySelector('[data-reward-next]').textContent = current.id === ranks[ranks.length - 1].id ? '已解锁全部功名装扮' : `下一阶：${ranks[ranks.findIndex(rank => rank.id === current.id) + 1].name} · 还需 ${formatHours(Math.max(0, (ranks.find(rank => rank.hours > current.hours)?.hours || current.hours) * 3600 - seconds))}`;
    widget.querySelector('[data-reward-progress]').style.width = `${Math.min(100, Math.max(6, ((seconds - current.hours * 3600) / Math.max(1, (((ranks.find(rank => rank.hours > current.hours)?.hours || current.hours + 1) - current.hours) * 3600))) * 100))}%`;
    widget.querySelector('[data-reward-list]').innerHTML = ranks.map(rank => `<button type="button" class="reward-outfit ${unlocked.includes(rank) ? 'is-unlocked' : 'is-locked'} ${selected.id === rank.id ? 'is-selected' : ''}" data-outfit="${rank.id}" ${unlocked.includes(rank) ? '' : 'disabled'}><span class="reward-outfit__seal">${unlocked.includes(rank) ? '◆' : '·'}</span><b>${rank.name}</b><small>${rank.hours ? `${rank.hours}小时` : '起步'}</small></button>`).join('');
    widget.querySelectorAll('[data-outfit]').forEach(button => button.addEventListener('click', () => { localStorage.setItem(outfitKey, button.dataset.outfit); render(); applyToCompanion(); }));
  };
  const applyToCompanion = () => {
    const companion = document.querySelector('#wbCompanion');
    if (!companion) return;
    const seconds = readSeconds();
    const current = rankFor(seconds);
    const selected = ranks.find(rank => rank.id === readOutfit()) || current;
    companion.dataset.rewardRank = current.id;
    companion.dataset.rewardOutfit = selected.id;
    let badge = companion.querySelector('.companion-rank-badge');
    if (!badge) { badge = document.createElement('button'); badge.type = 'button'; badge.className = 'companion-rank-badge'; badge.setAttribute('aria-label', '查看小人学习等级与装扮'); companion.appendChild(badge); badge.addEventListener('click', event => { event.stopPropagation(); document.querySelector('#companionRewardWidget')?.classList.toggle('is-open'); }); }
    badge.textContent = selected.name;
  };
  const root = document.createElement('aside');
  root.id = 'companionRewardWidget'; root.className = 'companion-reward-widget'; root.innerHTML = `<button class="companion-reward-toggle" type="button" aria-expanded="false"><span class="companion-reward-crown">✦</span><span><b data-reward-current>秀才 · 青衿初学</b><small data-reward-hours>累计专注 0小时</small></span><i data-lucide="chevron-up" aria-hidden="true"></i></button><div class="companion-reward-panel"><div class="companion-reward-heading"><div><p class="eyebrow">STUDY MERIT · 学习功名</p><h3>装扮进阶</h3></div><span data-reward-next>下一阶：举人</span></div><div class="companion-reward-track"><i data-reward-progress></i></div><div class="companion-reward-list" data-reward-list></div></div>`;
  const studyCompanionCard = document.querySelector('.study-companion--link');
  if (studyCompanionCard?.parentElement) studyCompanionCard.insertAdjacentElement('afterend', root);
  else document.body.appendChild(root);
  refreshIcons();
  const toggle = root.querySelector('.companion-reward-toggle');
  toggle.addEventListener('click', () => { const open = root.classList.toggle('is-open'); toggle.setAttribute('aria-expanded', String(open)); });
  render(); applyToCompanion();
  // The companion script updates its own subtree frequently; watching the whole
  // document makes every bubble animation trigger a full reward pass. A light
  // polling loop is enough to catch the companion when it is injected.
  const observer = new MutationObserver(() => applyToCompanion()); observer.observe(document.body, { childList: true });
  window.addEventListener('storage', event => { if (event.key === storageKey || event.key === outfitKey) { render(); applyToCompanion(); } });
  window.setInterval(() => { render(); applyToCompanion(); }, 10000);
}

function init() {
  $('#classicalCollectionPanel')?.classList.add('is-awaiting-selection');
  $('#seatDate').value = localDateValue();
  $('#seatDate').min = localDateValue();
  renderCatalog();
  renderSeats();
  updateSeatSummary();
  renderReaderSignals();
  initReadingWorkbenchExtras();
  initCityMemory();
  renderLibraryZone();
  renderClassicsNav();
  renderManuscript();
  initEvents();
  initLibraryAssistant();
  initCompanionRewards();
  initMiniProgramBridge();
  initStudyCompanion();
  initScrollReveals();
  initSectionTransitions();
  updateGlassesAvailability();
  $$('.filter-button').forEach(button => button.setAttribute('aria-pressed', String(button.classList.contains('is-active'))));
  $$('#annotationSwitch button').forEach(button => button.setAttribute('aria-pressed', String(button.classList.contains('is-active'))));
  refreshIcons();
}

function findBookByTitle(query = '') {
  return books.find(book => book.title === query || book.title.includes(query) || query.includes(book.title));
}

function initReadingWorkbenchExtras() {
  const floorGuideMap = {
    '负一层': { floor: 'b1', target: 'stacks', label: 'B1 密集书库', finalStep: '沿负一层指示前往书库；密集书库需先在服务台登记，由馆员协助取书' },
    '一层': { floor: 'f1', target: 'youth', label: '一层青少年 / 幼儿 / 亲子阅览区', finalStep: '从一层大厅进入青少年、幼儿与亲子阅览区域，按现场分区标识取阅' },
    '二层': { floor: 'f2', target: 'open', label: '二层开放阅览区', finalStep: '沿二层开放阅览标识前往书架区，按索书号定位具体书架' },
    '三层': { floor: 'f3', target: 'specialized', label: '三层专题与地方文献阅览区', finalStep: '沿三层专题阅览标识前往；古籍、地方文献请在服务点登记后阅览' }
  };
  $$('[data-floor-query]').forEach(button => {
    button.addEventListener('click', () => {
      const guide = floorGuideMap[button.dataset.floorQuery];
      if (!guide) return;
      openVenueGuide(guide);
    });
  });

  $$('[data-book-title]').forEach(button => {
    button.addEventListener('click', () => {
      const book = findBookByTitle(button.dataset.bookTitle);
      if (book) showBook(book);
    });
  });

  $$('[data-subject-query]').forEach(button => button.addEventListener('click', () => {
    switchService('catalog');
    const input = $('#catalogSearch');
    input.value = button.dataset.subjectQuery || '';
    renderCatalog();
    input.focus();
  }));

  const form = $('#readingNoteForm');
  const output = $('#savedNotes');
  if (!form || !output) return;
  let notes = [];
  try { notes = JSON.parse(localStorage.getItem('yulin-reading-notes') || '[]'); } catch (error) { notes = []; }
  const renderNotes = () => {
    output.innerHTML = notes.length
      ? notes.map(note => `<article class="saved-note"><span>${escapeHtml(note.text)}</span><time>${escapeHtml(note.time)}</time></article>`).join('')
      : '<p class="empty-state">还没有笔记，先留下一条阅读线索吧。</p>';
  };
  renderNotes();
  form.addEventListener('submit', event => {
    event.preventDefault();
    const textarea = $('#readingNoteText');
    const text = textarea.value.trim();
    if (!text) { textarea.focus(); return; }
    notes.unshift({ text, time: new Date().toLocaleString('zh-CN', { dateStyle: 'medium', timeStyle: 'short' }) });
    notes = notes.slice(0, 8);
    localStorage.setItem('yulin-reading-notes', JSON.stringify(notes));
    textarea.value = '';
    renderNotes();
    showToast('笔记已保存在这台设备');
  });
}

function initCityMemory() {
  const form = $('#memoryForm');
  const list = $('#memoryList');
  if (!form || !list) return;
  const samples = [
    { name: '榆林老读者', tags: '老街', text: '记得八十年代的二街，新华书店门口总排着借书的长队。' },
    { name: '镇北台守护人', tags: '长城', text: '风从镇北台吹下来时，城墙和地方志里的文字忽然有了同一种重量。' }
  ];
  let memories = [];
  try { memories = JSON.parse(localStorage.getItem('yulin-city-memories') || '[]'); } catch (error) { memories = []; }
  const render = () => {
    list.innerHTML = [...memories, ...samples].map((item, index) => `<article class="memory-card"><header><b>${escapeHtml(item.name || '匿名读者')}</b><span>${escapeHtml(item.tags || '城市记忆')}</span>${item.own ? `<button type="button" data-delete-memory="${index}" aria-label="删除这条记忆"><i data-lucide="trash-2"></i></button>` : ''}</header><p>${escapeHtml(item.text)}</p></article>`).join('');
    refreshIcons();
  };
  form.addEventListener('submit', event => {
    event.preventDefault();
    const text = $('#memoryText').value.trim();
    if (!text) return;
    memories.unshift({ name: $('#memoryName').value.trim(), tags: $('#memoryTags').value.trim(), text, own: true });
    localStorage.setItem('yulin-city-memories', JSON.stringify(memories));
    form.reset(); render(); showToast('城市记忆已保存在本机');
  });
  list.addEventListener('click', event => {
    const button = event.target.closest('[data-delete-memory]');
    if (!button) return;
    memories.splice(Number(button.dataset.deleteMemory), 1);
    localStorage.setItem('yulin-city-memories', JSON.stringify(memories)); render();
  });
  render();
}

init();
