const books = [
  {
    title: '四库全书·文渊阁本选卷', author: '清·纪昀等纂修', category: '古典藏书 · 四库全书',
    call: 'GJ-SK-001', location: '四层 古典藏书区 A-01', status: '馆内阅览', restricted: true,
    description: '以经、史、子、集四部统摄古代重要典籍。本馆选取代表性卷册开展馆内数字注释与眼镜导览。'
  },
  {
    title: '延绥镇志', author: '明·谭吉璁修', category: '古典藏书 · 榆林地方志',
    call: 'GJ-DFZ-018', location: '四层 古典藏书区 B-03', status: '馆内阅览', restricted: true,
    description: '记载延绥镇建置、边防、山川与人物，是理解明代榆林城市格局的重要地方文献。'
  },
  {
    title: '资治通鉴', author: '宋·司马光', category: '历史', call: 'K204.3/124',
    location: '三层 社科书库 H-12', status: '在馆', restricted: false,
    description: '编年体通史巨著，以历代治乱兴衰为鉴，贯通周威烈王至五代后周世宗。'
  },
  {
    title: '梦溪笔谈', author: '宋·沈括', category: '科技史', call: 'N092/044',
    location: '三层 综合书库 C-08', status: '借出', restricted: false,
    description: '涉及天文、数学、地理、物理、生物与工程技术，呈现宋代知识世界的广阔面貌。'
  },
  {
    title: '杜工部集', author: '唐·杜甫', category: '古典文学', call: 'I222.742/071',
    location: '二层 文学书库 D-16', status: '在馆', restricted: false,
    description: '杜甫诗文别集，作品书写时代与民生，也连接着西北边塞和黄土地的历史记忆。'
  },
  {
    title: '榆林府志校注', author: '榆林市地方志办公室', category: '地方文献', call: 'K294.13/062',
    location: '四层 地方文献 L-05', status: '在馆', restricted: false,
    description: '对榆林府志进行整理、点校和注释，便于当代读者进入地方历史。'
  },
  {
    title: '边塞诗中的榆林', author: '李闻远', category: '地方文献', call: 'I207.22/133',
    location: '四层 地方文献 L-09', status: '借出', restricted: false,
    description: '从诗歌、地理和军事史三个维度，梳理榆林在古代边塞文学中的形象。'
  },
  {
    title: '道德经古本合校', author: '老子著·高明校', category: '哲学', call: 'B223.1/036',
    location: '三层 社科书库 B-07', status: '在馆', restricted: false,
    description: '汇校多种传本，帮助读者比较经典文本在不同时代的流变。'
  }
];

const clubs = [
  { day: '23', month: 'AUG', title: '共读《榆林府志》：从城墙看见城市', place: '四层地方文献阅览室', time: '14:30', left: 7, joined: false },
  { day: '27', month: 'AUG', title: '边塞诗夜读：月照长城', place: '屋顶城市观景台', time: '19:00', left: 12, joined: false },
  { day: '31', month: 'AUG', title: '四库入门：经史子集如何读', place: '古典藏书区导览厅', time: '10:00', left: 4, joined: false }
];

const classicalCollections = {
  '四库全书': [
    {
      key: '经', label: '义理与经典', en: 'CLASSICS', section: '经部 · 四书类', title: '《论语集注》',
      meta: '宋 · 朱熹集注　特藏索书号 SK-J-008', chapter: '学而第一',
      text: '子曰：“学而时习之，不亦说乎？有朋自远方来，不亦乐乎？人不知而不愠，不亦君子乎？”',
      notes: {
        original: '“习”不只是温习，也有实践、践行之意。经典从来不是停在书页上的文字，而是反复进入生活的行动。',
        translation: '孔子说：学习之后按时实践，不也是令人欣喜的吗？有志同道合的人从远方来，不也是快乐的吗？',
        allusion: '“有朋自远方来”后来常用于表达迎接远客。书友会以此句命名“远朋计划”，连接周边地区来馆读者。'
      },
      story: { place: '杏坛', person: '孔门弟子', title: '远方来学', text: '书页化作行旅，远来的书友在此相逢。', image: '60% 58%' }
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
        allusion: '杜甫在安史之乱中辗转至羌村。榆林的边塞诗共读也以“归客千里至”回应远道而来的书友。'
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
  { text: '远方来馆的书友，也是“有朋自远方来”。', curated: true },
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
let selectedBook = null;
let selectedSeat = null;
let selectedFloor = '二层';
let selectedTime = '09:00-12:00';
let selectedGlassesSlot = '14:00-14:30';
let activeCollection = '四库全书';
let activeClassicalItem = 0;
let activeNote = 'original';
let glassesTarget = '古典藏书区展柜 A-01';
let glassesAvailable = 3;
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
  list.forEach(book => {
    const row = document.createElement('article');
    row.className = 'catalog-row';
    row.tabIndex = 0;
    row.innerHTML = `
      <div class="catalog-title"><b>${book.title}</b><small>${book.author} · ${book.category}</small></div>
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
  });
  $('#catalogEmpty').hidden = list.length > 0;
  $('#catalogList').setAttribute('aria-label', `找到 ${list.length} 条馆藏`);
  refreshIcons();
}

function showBook(book) {
  selectedBook = book;
  $('#dialogCategory').textContent = book.category;
  $('#dialogTitle').textContent = book.title;
  $('#dialogAuthor').textContent = book.author;
  $('#dialogDescription').textContent = book.description;
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
  if (name === 'seats') renderSeats();
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

function renderClubs() {
  const container = $('#clubList');
  container.innerHTML = '';
  clubs.forEach((club, index) => {
    const row = document.createElement('article');
    row.className = 'club-row';
    row.innerHTML = `
      <div class="club-date"><strong>${escapeHtml(club.day)}</strong><small>${escapeHtml(club.month)}</small></div>
      <div class="club-info"><h4>${escapeHtml(club.title)}</h4><p>${escapeHtml(club.time)} · ${escapeHtml(club.place)}</p></div>
      <div class="club-action"><span>余 ${club.left} 席</span><button class="secondary-button${club.joined ? ' is-joined' : ''}" type="button" data-club-index="${index}"${club.left === 0 && !club.joined ? ' disabled' : ''}><i data-lucide="${club.joined ? 'check' : 'user-plus'}"></i>${club.joined ? '已报名' : club.left === 0 ? '已满员' : '报名'}</button></div>`;
    container.appendChild(row);
  });
  $$('[data-club-index]', container).forEach(button => {
    button.addEventListener('click', () => {
      const club = clubs[Number(button.dataset.clubIndex)];
      if (!club.joined && club.left === 0) {
        showToast('本场活动已满员');
        return;
      }
      club.joined = !club.joined;
      if (club.joined) club.left = Math.max(0, club.left - 1);
      else club.left += 1;
      showToast(club.joined ? `已报名「${club.title}」` : '已取消活动报名');
      renderClubs();
    });
  });
  refreshIcons();
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
  $('#chapterMark').textContent = item.chapter;
  $('#originalText').textContent = item.text;
  $('#annotationText').textContent = item.notes[activeNote];
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
  if (entry) entry.innerHTML = `<i></i>今日可用 ${glassesAvailable} / 8`;
  if (stock) stock.textContent = `${glassesAvailable} 台可用`;
  if (stockDetail) stockDetail.textContent = `共 8 台 · ${8 - glassesAvailable} 台使用中或已预约`;
}

function openGlassesBooking(book = null) {
  if ($('#special').classList.contains('is-glasses')) {
    showToast('设备 R-03 已分配，可在预约时段到服务台领取');
    $('#glassesStatus').scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }
  glassesTarget = book?.restricted ? `${book.location} · ${book.title}` : `古典藏书区 · ${activeCollection}展柜`;
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
  showToast('预约成功：设备 R-03 已为你保留');
}

function stopGlasses() {
  if (!$('#special').classList.contains('is-glasses')) return;
  glassesAvailable = Math.min(3, glassesAvailable + 1);
  $('#special').classList.remove('is-glasses');
  $('#glassesStatus').hidden = true;
  $('#glassesToggle').setAttribute('aria-pressed', 'false');
  $('#deviceAgreement').checked = false;
  updateGlassesAvailability();
  renderDanmaku();
  showToast('已结束眼镜导览，感谢按时归还设备');
}

function initEvents() {
  let introOpening = false;
  $('#introEnter').addEventListener('click', () => {
    if (introOpening) return;
    introOpening = true;
    const intro = $('#intro');
    intro.classList.add('is-opening');
    document.body.classList.remove('intro-open');
    setTimeout(() => {
      intro.hidden = true;
      intro.setAttribute('aria-hidden', 'true');
      $('#globalSearch').focus({ preventScroll: true });
    }, 1200);
  });

  $$('[data-scroll]').forEach(button => button.addEventListener('click', () => {
    document.getElementById(button.dataset.scroll).scrollIntoView({ behavior: 'smooth' });
  }));

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

  $('#catalogSearch').addEventListener('input', renderCatalog);
  $$('.filter-button').forEach(button => button.addEventListener('click', () => {
    activeStatus = button.dataset.status;
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

  $$('.service-panel .segmented').forEach(group => group.addEventListener('click', event => {
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
    showToast(`预约成功：${$('#seatDate').value} ${selectedFloor} ${String(reserved).padStart(2, '0')}号座位`);
  });

  $('.club-intro .secondary-button').addEventListener('click', () => {
    const title = window.prompt('请输入共读主题（例如：共读《榆林府志》）');
    if (!title?.trim()) return;
    const date = new Date();
    clubs.unshift({
      day: String(date.getDate()).padStart(2, '0'),
      month: date.toLocaleString('en-US', { month: 'short' }).toUpperCase(),
      title: title.trim().slice(0, 36),
      place: '一层共享阅读区',
      time: '19:00',
      left: 20,
      joined: true
    });
    renderClubs();
    showToast('共读提议已提交，馆员确认后将开放报名');
  });

  $('#collectionTabs').addEventListener('click', event => {
    const button = event.target.closest('[data-collection]');
    if (!button) return;
    activeCollection = button.dataset.collection;
    activeClassicalItem = 0;
    $$('#collectionTabs button').forEach(candidate => {
      const active = candidate === button;
      candidate.classList.toggle('is-active', active);
      candidate.setAttribute('aria-selected', String(active));
    });
    renderClassicsNav();
    renderManuscript();
  });

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
    showToast(`正在展开「${activeManuscript().story.title}」段落场景`);
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

  $('#rokidAnimationPreview').addEventListener('click', () => {
    const slot = $('#rokidAnimationSlot');
    slot.classList.remove('is-previewing');
    requestAnimationFrame(() => slot.classList.add('is-previewing'));
    setTimeout(() => slot.classList.remove('is-previewing'), 2600);
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
    $('#mapDestination').textContent = `目的地：${selectedBook.location} · ${selectedBook.title}`;
    $('#mapFinalStep').textContent = selectedBook.restricted ? '到四层服务台核验预约后进入古典藏书区' : `抵达 ${selectedBook.location}`;
    openDialog($('#mapDialog'));
  });

  $('[data-close-dialog]').addEventListener('click', () => closeDialog($('#bookDialog')));
  $('[data-close-map]').addEventListener('click', () => closeDialog($('#mapDialog')));
  $('[data-close-glasses-dialog]').addEventListener('click', () => closeDialog($('#glassesDialog')));
  [$('#bookDialog'), $('#mapDialog'), $('#glassesDialog')].forEach(dialog => dialog.addEventListener('click', event => {
    if (event.target === dialog) closeDialog(dialog);
  }));
}

function init() {
  $('#seatDate').value = localDateValue();
  $('#seatDate').min = localDateValue();
  renderCatalog();
  renderSeats();
  updateSeatSummary();
  renderClubs();
  renderClassicsNav();
  renderManuscript();
  initEvents();
  updateGlassesAvailability();
  $$('.filter-button').forEach(button => button.setAttribute('aria-pressed', String(button.classList.contains('is-active'))));
  $$('#annotationSwitch button').forEach(button => button.setAttribute('aria-pressed', String(button.classList.contains('is-active'))));
  refreshIcons();
}

init();
