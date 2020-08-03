// pages/example15/index.js
Page({
  data: {
    src: '',
    isShow: false,
    isAuthorize: true
  },
  handleBtnClick() {
    wx.getSetting({
      success: ({ authSetting }) => {
        if (!authSetting['scope.camera']) {
          wx.authorize({
            scope: 'scope.camera',
            success: () => {
              this.handlePhoto();
            },
            fail: () => {
              wx.showToast({
                title: '请授权',
                icon: 'none'
              });
              this.setData({
                isAuthorize: false
              })
            }
          })
        } else {
          this.handlePhoto();
        }
      }
    })
  },
  handleOpensetting({ detail: { authSetting }}) {
    if (authSetting['scope.camera']) {
      this.setData({
        isAuthorize: true
      })
    }
  },
  handlePhoto() {
    this.setData({
      isShow: true
    })
    const ctx = wx.createCameraContext();
    ctx.takePhoto({
      quality: 'high',
      success: ({ tempImagePath }) => {
        console.log(tempImagePath)
        this.setData({
          src: tempImagePath,
          isShow: false
        })
      }
    });
  }
})