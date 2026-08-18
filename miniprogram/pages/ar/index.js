const SCENES = {
  book: {
    era: '乾隆三十八年 · 1773',
    title: '四库馆开馆纂修',
    copy: '抄录、校勘与总纂在书页之间交替推进，散佚典籍由此汇入经、史、子、集四部。',
    note: '《四库全书》纂修历时十余年，参与者包括纪昀、陆锡熊等。'
  },
  place: {
    era: '明成化七年 · 1471',
    title: '榆林卫城垣初成',
    copy: '城墙沿榆溪河铺展，商旅与戍守者从镇北台一线穿行，边塞城市的轮廓逐渐形成。',
    note: '此为数字复原演示，正式内容将以地方志与馆藏史料为依据。'
  }
};

Page({
  data: {
    mode: 'book',
    cameraReady: true,
    detecting: false,
    result: null
  },
  onLoad(options) {
    if (options.mode === 'place') this.setData({ mode: 'place' });
  },
  onUnload() {
    if (this.detectTimer) clearTimeout(this.detectTimer);
  },
  selectMode(event) {
    this.setData({ mode: event.currentTarget.dataset.mode, result: null, detecting: false });
  },
  recognize() {
    if (this.data.detecting) return;
    this.setData({ detecting: true, result: null });
    this.detectTimer = setTimeout(() => {
      this.setData({ detecting: false, result: SCENES[this.data.mode] });
      wx.vibrateShort({ type: 'light' });
    }, 900);
  },
  handleCameraError() {
    this.setData({ cameraReady: false });
    wx.showToast({ title: '已切换至演示画面', icon: 'none' });
  }
});
