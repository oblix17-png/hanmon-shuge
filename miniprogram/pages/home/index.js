Page({
  data: {
    available: 76,
    total: 100,
    selectedSlot: 0,
    booking: null,
    slots: [
      { time: '09:00-11:00', left: 24 },
      { time: '11:30-13:30', left: 18 },
      { time: '14:00-16:00', left: 21 }
    ],
    routes: [
      { tag: '01', title: '四库编纂现场', meta: '古典藏书区 · 约 25 分钟' },
      { tag: '02', title: '榆林千年城脉', meta: '馆内历史节点 · 约 40 分钟' },
      { tag: '03', title: '边塞诗里的西北', meta: '文学书库 · 约 20 分钟' }
    ]
  },
  onLoad() {
    const app = getApp();
    this.setData({
      available: app.globalData.glassesAvailable,
      total: app.globalData.glassesTotal,
      booking: app.globalData.glassesBooking
    });
  },
  openScan() { wx.navigateTo({ url: '/pages/scan/index?demo=1' }); },
  scanBook() {
    wx.scanCode({
      scanType: ['barCode'],
      success: result => wx.navigateTo({ url: `/pages/scan/index?code=${encodeURIComponent(result.result)}` }),
      fail: error => {
        if (String(error.errMsg).indexOf('cancel') === -1) {
          wx.showModal({
            title: '使用演示书目',
            content: '当前未识别到条码，是否用《资治通鉴》继续体验？',
            success: result => { if (result.confirm) this.openScan(); }
          });
        }
      }
    });
  },
  openAR() { wx.navigateTo({ url: '/pages/ar/index' }); },
  selectSlot(event) { this.setData({ selectedSlot: Number(event.currentTarget.dataset.index) }); },
  reserveGlasses() {
    const app = getApp();
    const slot = this.data.slots[this.data.selectedSlot];
    if (!slot || slot.left < 1) {
      wx.showToast({ title: '该时段已约满', icon: 'none' });
      return;
    }
    const deviceNumber = (`000${this.data.total - this.data.available + 1}`).slice(-3);
    const booking = {
      time: slot.time,
      code: String(Date.now()).slice(-6),
      device: `Rokid Max ${deviceNumber}`
    };
    app.globalData.glassesBooking = booking;
    app.globalData.glassesAvailable -= 1;
    this.setData({ booking, available: app.globalData.glassesAvailable });
    wx.showToast({ title: '预约成功', icon: 'success' });
  },
  cancelBooking() {
    const app = getApp();
    app.globalData.glassesBooking = null;
    app.globalData.glassesAvailable = Math.min(app.globalData.glassesTotal, app.globalData.glassesAvailable + 1);
    this.setData({ booking: null, available: app.globalData.glassesAvailable });
    wx.showToast({ title: '预约已取消', icon: 'none' });
  },
  openDiscover() { wx.navigateTo({ url: '/pages/discover/index' }); }
});
