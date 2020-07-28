// pages/example5/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: 0
  },
  // 当前是tab页面时点击原生tab时触发
  onTabItemTap(e) {
    console.log(e)
  },
  // 监听用户点击右上角菜单'收藏'按钮的行为,可自定义收藏内容
  // 注: 和onShareAppMessage及onShareTimeLine类似,都是返回一个对象自定义内容
  onAddToFavorites() {
    return {
      title: '自定义收藏内容',
      imageUrl: '/images/wechat.jpg'
    }
  },
  // 监听分享到朋友圈按钮的行为,可自定义分享内容
  // 注: 基础库要求高,需要做好兼容
  onShareTimeline() {
    return {
      title: '自定义分享到朋友圈',
      imageUrl: '/images/wechat.jpg'
    }
  },
  // 监听用户上拉触底事件,可以通过onReachBottomDistance设置触发距离
  onReachBottom() {

  },
  handleBtnClick() {
    // 返回一个selectorQuery对象实例,可以获取节点信息
    // 注: 在自定义组件或包含自定义组件的页面中,使用
    // this.createSelectorQuery()来代替
    const query = wx.createSelectorQuery();
    query.select('#btn').boundingClientRect(res => {
      // 对应的元素信息就在res对象里
      console.log(res)
    }).exec();
  },
  handleInput({ detail: { value } }) {
    value && this.setData({
      value
    })
  },
  handleGoPage() {
    const { value } = this.data;
    if (value === '4' || value === '7' || value === '8') {
      wx.switchTab({
        url: `/pages/example${value}/index`,
      });
      return;
    }
    wx.navigateTo({
      url: `/pages/example${value}/index`,
    })
  }
})