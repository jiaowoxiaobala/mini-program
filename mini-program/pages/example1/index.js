// pages/example1/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isAuthorization: true
  },
  handleSaveImg() {
    // 保存前先获取用户授权信息
    wx.getSetting({
      success: ({ authSetting }) => {
        // 如果没有授权
        if (!authSetting['scope.writePhotosAlbum']) {
          // 弹出授权框
          wx.authorize({
            scope: 'scope.writePhotosAlbum',
            // 授权成功调用保存图片API
            success: () => {
              wx.saveImageToPhotosAlbum({
                filePath: '/images/wechat.jpg',
              })
            },
            // 授权失败弹窗提示
            fail: () => {
              wx.showToast({
                title:'请授权',
                icon: 'none'
              })
              this.setData({
                isAuthorization: false
              })
            }
          })
        } else {
          wx.saveImageToPhotosAlbum({
            filePath: '/images/wechat.jpg',
          })
        }
      }
    })
  },
  // 在打开授权设置页后返回时触发
  // 对象嵌套属性解构
  handleOpensetting({detail: { authSetting }}) {
    if (authSetting && authSetting['scope.writePhotosAlbum']) {
      this.setData({
        isAuthorization: true
      })
    }
  },
  handleBtnClick() {
    // 关闭当前页面,返回上一页面或多级页面
    wx.navigateBack({
      // 如果返回的页面数大于现有页面数,则返回到首页
      delta: 1
    })
  },
  onLoad(option) {
    // 获取路由传递的参数
    console.log(option)
  }
})
// 注: 设置界面只会出现小程序已经向用户请求过的权限