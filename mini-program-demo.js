(() => {
  const pages = [...document.querySelectorAll('[data-page]')];
  const routeButtons = [...document.querySelectorAll('[data-route]')];
  const bottomNav = document.querySelector('.bottom-nav');
  const headerBack = document.querySelector('#headerBack');
  const miniBrand = document.querySelector('.mini-brand');
  const toast = document.querySelector('#toast');
  const focusTime = document.querySelector('#miniFocusTime');
  const focusStatus = document.querySelector('#miniFocusStatus');
  const focusTotal = document.querySelector('#miniFocusTotal');
  const focusKey = 'yulin-study-session-v1';
  const syncFocus = () => { try { const data = JSON.parse(localStorage.getItem(focusKey) || 'null'); if (!data) return; const total = Math.max(0, Number(data.totalSeconds) || 0); const format = value => `${String(Math.floor(value / 60)).padStart(2, '0')}:${String(value % 60).padStart(2, '0')}`; focusTotal.textContent = format(total); focusStatus.textContent = '小程序独立计时 · 累计时长已同步'; } catch {} };
  window.addEventListener('storage', event => { if (event.key === focusKey) syncFocus(); });
  syncFocus();
  let activePage = 'home';
  let toastTimer;

  const icons = () => {
    if (window.lucide) window.lucide.createIcons({ attrs: { 'aria-hidden': 'true' } });
  };

  const showToast = (message) => {
    window.clearTimeout(toastTimer);
    toast.textContent = message;
    toast.hidden = false;
    toastTimer = window.setTimeout(() => { toast.hidden = true; }, 2200);
  };

  const setRoute = (route, trigger) => {
    const next = pages.find((page) => page.dataset.page === route);
    if (!next) return;
    pages.forEach((page) => {
      const active = page === next;
      page.hidden = !active;
      page.classList.toggle('is-active', active);
    });
    bottomNav.querySelectorAll('[data-route]').forEach((button) => {
      button.classList.toggle('is-active', button.dataset.route === route);
    });
    activePage = route;
    headerBack.hidden = route === 'home';
    miniBrand.style.display = route === 'ar' ? 'none' : '';
    window.scrollTo({ top: 0, behavior: 'instant' });

    if (route === 'scan' && trigger?.dataset.scanReady === 'true') revealScanResult();
    if (route === 'ar') document.querySelector('#arStory').hidden = false;
  };

  routeButtons.forEach((button) => button.addEventListener('click', () => setRoute(button.dataset.route, button)));
  headerBack.addEventListener('click', () => setRoute('home'));

  const scanner = document.querySelector('#scanner');
  const scannerHint = document.querySelector('#scannerHint span');
  const scanButton = document.querySelector('#scanButton');
  const scanActions = document.querySelector('#scanActions');
  const scanResult = document.querySelector('#scanResult');
  let scanTimer;

  function revealScanResult() {
    window.clearTimeout(scanTimer);
    scanner.classList.remove('is-scanning');
    scanActions.hidden = true;
    scanResult.hidden = false;
    scannerHint.textContent = '已识别《榆林府志》';
    scanResult.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  scanButton.addEventListener('click', () => {
    scanResult.hidden = true;
    scanButton.disabled = true;
    scanner.classList.add('is-scanning');
    scannerHint.textContent = '正在识别馆藏信息…';
    scanTimer = window.setTimeout(() => {
      scanButton.disabled = false;
      revealScanResult();
      showToast('识别成功 · 找到 3 位正在阅读的同好');
    }, 1550);
  });

  const flashButton = document.querySelector('#flashButton');
  flashButton.addEventListener('click', () => {
    flashButton.classList.toggle('is-on');
    const on = flashButton.classList.contains('is-on');
    flashButton.setAttribute('aria-pressed', String(on));
    showToast(on ? '补光灯已开启' : '补光灯已关闭');
  });
  document.querySelector('#albumButton').addEventListener('click', () => showToast('已选择演示封面《榆林府志》'));

  const saveBook = document.querySelector('#saveBook');
  saveBook.addEventListener('click', () => {
    const saved = saveBook.classList.toggle('is-saved');
    saveBook.setAttribute('aria-pressed', String(saved));
    saveBook.innerHTML = `<i data-lucide="${saved ? 'bookmark-check' : 'bookmark'}"></i>`;
    icons();
    showToast(saved ? '已加入稍后阅读' : '已取消收藏');
  });

  const communityTabs = [...document.querySelectorAll('[data-community-tab]')];
  const communityPanels = [...document.querySelectorAll('[data-community-panel]')];
  communityTabs.forEach((tab) => tab.addEventListener('click', () => {
    communityTabs.forEach((item) => {
      const active = item === tab;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-selected', String(active));
    });
    communityPanels.forEach((panel) => { panel.hidden = panel.dataset.communityPanel !== tab.dataset.communityTab; });
  }));

  document.addEventListener('click', (event) => {
    const like = event.target.closest('[data-like]');
    if (!like) return;
    const liked = like.classList.toggle('is-liked');
    const counter = like.querySelector('em');
    counter.textContent = Number(counter.textContent) + (liked ? 1 : -1);
    like.querySelector('svg')?.setAttribute('fill', liked ? 'currentColor' : 'none');
  });

  const noteForm = document.querySelector('#noteForm');
  noteForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.querySelector('#noteInput');
    const text = input.value.trim();
    if (!text) return;
    const article = document.createElement('article');
    article.className = 'reader-note';
    article.innerHTML = `<span class="reader-avatar">我</span><div><header><b>榆见读者</b><small>刚刚 · 正在读</small></header><p></p><footer><span>#我的笺注</span><button type="button" data-like><i data-lucide="heart"></i><em>0</em></button></footer></div>`;
    article.querySelector('p').textContent = text;
    document.querySelector('#noteList').prepend(article);
    input.value = '';
    icons();
    showToast('留言已留在《榆林府志》旁');
  });

  const recFilters = [...document.querySelectorAll('[data-rec-filter]')];
  const recItems = [...document.querySelectorAll('[data-rec-type]')];
  recFilters.forEach((filter) => filter.addEventListener('click', () => {
    recFilters.forEach((item) => item.classList.toggle('is-active', item === filter));
    recItems.forEach((item) => {
      item.hidden = filter.dataset.recFilter !== 'all' && item.dataset.recType !== filter.dataset.recFilter;
    });
  }));

  const arStories = {
    person: { index: '人物 · 01', title: '一笔一校，汇成万卷', text: '乾隆三十八年，纪昀等人在翰林院校勘群书。每部典籍都要经过辑录、辨伪与提要。' },
    book: { index: '典籍 · 02', title: '从散佚底本到四库定本', text: '各地进呈的底本汇集京师，誊录官以工整楷书抄写，再由校勘官逐页复核异文。' },
    place: { index: '地点 · 03', title: '文渊阁，书藏北方水意', text: '文渊阁仿宁波天一阁营建，以黑色琉璃瓦象征水，寄托防火与万卷长存之意。' }
  };
  const arHotspots = [...document.querySelectorAll('[data-hotspot]')];
  const arStory = document.querySelector('#arStory');
  arHotspots.forEach((hotspot) => hotspot.addEventListener('click', () => {
    arHotspots.forEach((item) => item.classList.toggle('is-active', item === hotspot));
    const story = arStories[hotspot.dataset.hotspot];
    document.querySelector('#arStoryIndex').textContent = story.index;
    document.querySelector('#arTitle').textContent = story.title;
    document.querySelector('#arStoryText').textContent = story.text;
    arStory.hidden = false;
  }));
  document.querySelector('#closeArStory').addEventListener('click', () => { arStory.hidden = true; });

  const arNarrate = document.querySelector('#arNarrate');
  arNarrate.addEventListener('click', () => {
    const playing = arNarrate.classList.toggle('is-playing');
    arNarrate.querySelector('span').textContent = playing ? '讲解播放中 · 点击暂停' : '听 38 秒讲解';
    showToast(playing ? '正在播放场景讲解' : '讲解已暂停');
  });
  const arCapture = document.querySelector('#arCapture');
  arCapture.addEventListener('click', () => {
    arCapture.classList.remove('is-captured');
    void arCapture.offsetWidth;
    arCapture.classList.add('is-captured');
    showToast('AR 画面已保存至临时相册');
  });
  document.querySelector('#arMap').addEventListener('click', () => showToast('下一处：古地图展柜 · 向前 18 米'));
  document.querySelector('#arNotes').addEventListener('click', () => setRoute('community'));

  window.addEventListener('hashchange', () => {
    const requested = window.location.hash.replace('#', '');
    if (pages.some((page) => page.dataset.page === requested) && requested !== activePage) setRoute(requested);
  });

  icons();
})();
