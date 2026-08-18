Page({
  data: {
    note: '',
    notes: [
      { name: '城北读者', time: '昨天', text: '看到“鉴于往事”这一句，才明白历史不是离我们很远。' },
      { name: '匿名读者 17', time: '3 天前', text: '建议从周纪开始慢慢读，旁边地方志展柜也值得看。' }
    ],
    recommendations: ['《榆林府志校注》', '《梦溪笔谈》', '四库编纂现场 AR 路线']
  },
  updateNote(event) { this.setData({ note: event.detail.value }); },
  submitNote() {
    const text = this.data.note.trim();
    if (!text) return;
    this.setData({ notes: [{ name: '我', time: '刚刚', text }, ...this.data.notes], note: '' });
    wx.showToast({ title: '已留在书旁', icon: 'success' });
  },
  openHome() { wx.reLaunch({ url: '/pages/home/index' }); },
  openDiscover() { wx.navigateTo({ url: '/pages/discover/index' }); },
  previewAR() { wx.showModal({ title: '手机轻量 AR', content: '正式版本会调用相机识别书封，并叠加四库编纂场景、人物与馆员校订注释。', showCancel: false }); }
});
