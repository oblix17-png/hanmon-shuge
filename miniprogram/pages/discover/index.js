Page({
  data: {
    interests: [
      { label: '地方史', count: 42, size: 'large' },
      { label: '古典文学', count: 31, size: 'medium' },
      { label: '边塞诗', count: 18, size: 'small' },
      { label: '科技史', count: 16, size: 'small' },
      { label: '金石', count: 9, size: 'tiny' }
    ],
    recommendations: [
      { title: '《延绥镇志》', reason: '因为你读过榆林地方史', place: '四层 B-03' },
      { title: '边塞诗数字展', reason: '8 位相似读者收藏', place: '二层西区' },
      { title: '四库编纂现场 AR', reason: '与你的历史兴趣匹配', place: '古典藏书区' }
    ]
  },
  openHome() { wx.reLaunch({ url: '/pages/home/index' }); },
  openScan() { wx.navigateTo({ url: '/pages/scan/index?demo=1' }); },
  openRecommendation(event) {
    const item = this.data.recommendations[Number(event.currentTarget.dataset.index)];
    if (!item) return;
    wx.showModal({ title: item.title, content: `${item.reason}\n位置：${item.place}`, showCancel: false });
  }
});
