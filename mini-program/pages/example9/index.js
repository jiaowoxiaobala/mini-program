// pages/example9/index.js
Page({
  // 监听页面下拉
  onPullDownRefresh () {
    // 一般在这里请求接口,返回数据后结束页面下拉
    setTimeout(() => {
      // 结束下拉
      wx.stopPullDownRefresh();
    }, 1000)
  },
  handleBtnClick() {
    wx.pageScrollTo({
      // scrollTop: 0,
      duration: 300,
      // 设置滚动到哪个元素的位置
      selector: '.title'
    })
  },
  handleRequest() {
    const request = wx.request({
      url: 'https://binaryify.github.io/NeteaseCloudMusicApi/_coverpage.md',
      success: res => {
        console.log(res);
      }
    });
    // 取消网络请求
    request.abort();
  },
})