// pages/example3/index.js
Page({
  handleBtnClick(e) {
    const { dataset: { route } } = e.currentTarget;
    if (route === 'navigateTo') {
      // 保留当前页面,跳转到应用某个页面,不能跳转到tabbar页面(可以返回)
      wx.navigateTo({
        // 传递参数的形式在路径后面拼接
        url: '/pages/example1/index?name=xiaoba&&age=22'
      })
    } else if (route === 'redirect') {
      // 关闭当前页面,跳转到应用内的某个页面,不能跳转到tabbar页面(不能返回)
      wx.redirectTo({
        url: '/pages/example2/index',
      })
    } else if (route === 'relaunch') {
      // 关闭所有页面,跳转到某个页面
      wx.reLaunch({
        url: '/pages/example5/index?name=xiaoba',
      })
    } else if (route === 'swicthTab') {
      // 跳转到tab页面,并关闭所有非tab页面,路径后面不能跟参数
      wx.switchTab({
        url: '/pages/example4/index?name=xiaoba',
      })
    } else {
      // getCurrentPages函数可获取页面栈,第一个元素为首页,最后一个元素为当前页面
      const routes = getCurrentPages();
      // 获取当前页面
      const currentRoutes = routes[routes.length - 1];
      console.log(currentRoutes);
      // this.route可以获取当前页面路由
      console.log(this.route)
    }

  }
})
// 注: 只有relaunch和swicthTab可以跳转到tab页面
// relauch可以带参数,switchTab不可以