Page({
  data: {
    available: 76,
    total: 100,
    routes: [
      { tag: '01', title: '四库编纂现场', meta: '古典藏书区 · 约 25 分钟' },
      { tag: '02', title: '榆林千年城脉', meta: '馆内历史节点 · 约 40 分钟' },
      { tag: '03', title: '边塞诗里的西北', meta: '文学书库 · 约 20 分钟' }
    ]
  },
  onLoad() {
    const app = getApp();
    this.setData({ available: app.globalData.glassesAvailable, total: app.globalData.glassesTotal });
  },
  openScan() { wx.navigateTo({ url: '/pages/scan/index?demo=1' }); },
  useCamera() {
    wx.scanCode({
      scanType: ['barCode', 'qrCode'],
      success: result => wx.navigateTo({ url: `/pages/scan/index?code=${encodeURIComponent(result.result)}` }),
      fail: error => {
        if (!String(error.errMsg).includes('cancel')) wx.showToast({ title: '相机暂不可用', icon: 'none' });
      }
    });
  },
  openDiscover() { wx.navigateTo({ url: '/pages/discover/index' }); }
});
