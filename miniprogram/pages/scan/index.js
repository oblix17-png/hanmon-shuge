Page({
  data: {
    note: '',
    discoverable: false,
    notes: [
      { id: 1, name: '城北读者', time: '昨天', text: '看到“鉴于往事”这一句，才明白历史不是离我们很远。' },
      { id: 2, name: '匿名读者 17', time: '3 天前', text: '建议从周纪开始慢慢读，旁边地方志展柜也值得看。' }
    ],
    recommendations: [
      { title: '《榆林府志校注》', type: '馆藏可借', place: '四层 B-03' },
      { title: '《梦溪笔谈》', type: '馆内阅览', place: '古典藏书区' },
      { title: '四库编纂现场', type: 'AR 馆藏活动', place: '古典藏书区' }
    ]
  },
  onLoad() { this.setData({ discoverable: getApp().globalData.discoverable }); },
  updateNote(event) { this.setData({ note: event.detail.value }); },
  submitNote() {
    const text = this.data.note.trim();
    if (!text) return;
    this.setData({ notes: [{ id: Date.now(), name: '我', time: '刚刚', text }].concat(this.data.notes), note: '' });
    wx.showToast({ title: '已留在书旁', icon: 'success' });
  },
  toggleDiscoverable(event) {
    const discoverable = event.detail.value;
    getApp().globalData.discoverable = discoverable;
    this.setData({ discoverable });
    wx.showToast({ title: discoverable ? '已允许区域级发现' : '已关闭同好发现', icon: 'none' });
  },
  scanAgain() {
    wx.scanCode({
      scanType: ['barCode'],
      success: () => wx.showToast({ title: '识别成功', icon: 'success' }),
      fail: error => {
        if (String(error.errMsg).indexOf('cancel') === -1) wx.showToast({ title: '未识别到图书条码', icon: 'none' });
      }
    });
  },
  openRecommendation(event) {
    const item = this.data.recommendations[Number(event.currentTarget.dataset.index)];
    if (!item) return;
    wx.showModal({ title: item.title, content: `${item.type}\n位置：${item.place}`, showCancel: false });
  },
  openHome() { wx.reLaunch({ url: '/pages/home/index' }); },
  openDiscover() { wx.navigateTo({ url: '/pages/discover/index' }); },
  previewAR() { wx.navigateTo({ url: '/pages/ar/index?mode=book' }); }
});
