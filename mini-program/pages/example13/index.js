// pages/example13/index.js
Page({
  data: {
    isAuthorize: true
  },
  handleBtnClick() {
    wx.getSetting({
      success: ({ authSetting }) => {
        if (!authSetting['scope.record']) {
          wx.authorize({
            scope: 'scope.record',
            success: res => {
              // 获取录音管理器
              const recorderManager = wx.getRecorderManager();
              recorderManager.start();
            },
            fail: () => {
              wx.showToast({
                title: '请授权',
                icon: 'none'
              })
              this.setData({
                isAuthorize: false
              })
            }
          })
        } else {
          const recorderManager = wx.getRecorderManager();
          recorderManager.start();
        }
      }
    })
  },
  handleStopRecord() {
    const recorderManager = wx.getRecorderManager();
    recorderManager.stop();
    // 监听录音结束,可以获取到对应的录音信息
    recorderManager.onStop(res => {
      console.log(res);
    })
  },
  handleOpensetting({detail: { authSetting }}) {
    if (authSetting['scope.record']) {
      this.setData({
        isAuthorize: true
      })
    }
  }
})