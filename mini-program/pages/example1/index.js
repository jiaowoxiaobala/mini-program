// pages/example1/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isAuthorization: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取用户当前设置
    wx.getSetting({
      // 解构赋值直接获取authSetting对象
      success: ({ authSetting }) => {
        if (authSetting && !authSetting['scope.writePhotosAlbum']) {
          // 调用授权的弹窗
          wx.authorize({
            scope: 'scope.writePhotosAlbum',
            success: res => {
              this.setData({
                isAuthorization: false
              })
            },
            fail: res => {
              this.setData({
                isAuthorization: true
              })
            }
          })
        }
      }
    })
  },
  // 也可以用wx.openSetting调起授权设置页面
  // 这个方法会在打开授权设置页后退时调用
  handleOpensetting({ detail }) {
    const { authSetting } = detail;
    if (authSetting && authSetting['scope.writePhotosAlbum']) {
      this.setData({
        isAuthorization: false
      })
    }
  },
  handleSaveImg() {
    wx.getSetting({
      success: ({ authSetting }) => {
        console.log(authSetting)
        if (!authSetting['scope.writePhotosAlbum']) {
          wx.showToast({
            title: '未获取用户授权',
          })
        } else {
          wx.saveImageToPhotosAlbum({
            filePath: '/images/wechat.jpg'
          })
        }
      }
    })
  }
})
// 注: 设置界面只会出现小程序已经向用户请求过的权限