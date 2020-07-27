Page({
  handleBtnClick() {
    // 判断小程序的API、组件是否在当前版本可用
    const res = wx.canIUse('createOffscreenCanvas')
    console.log(res);
    wx.getSystemInfo({
      // 获取当前基础库版本号
      success: ({ SDKVersion }) => {
        console.log(SDKVersion);
      }
    })
  },
  handleSetNavigation() {
    // 动态设置当前页面的标题
    wx.setNavigationBarTitle({
      title: '加油鸭~'
    });
    // 设置导航栏颜色条
    wx.setNavigationBarColor({
      // 按钮、标题、状态栏的颜色
      frontColor: '#ffffff',
      // 背景颜色
      backgroundColor: '#535d95',
      // 设置变更颜色的动画效果
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      }
    })
    // 可以给导航栏设置加载动画,需要手动取消
    wx.showNavigationBarLoading();
    setTimeout(() => {
      wx.hideNavigationBarLoading();
    }, 1000);
  },
  onShow() {
    // 设置下拉的背景字体,loading样式
    // 注: 需要在页面的json文件中设置"enablePullDownRefresh": true
    wx.setBackgroundTextStyle({
      textStyle: 'light' 
    });
  }
})