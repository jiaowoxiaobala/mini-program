// pages/example16/index.js
Page({
  data: {
    isUserLocation: true
  },
  handleBtnClick() {
    wx.getSetting({
      success: ({ authSetting }) => {
        // 定位授权需要在app.json中设置授权说明
        if (!authSetting['scope.userLocation']) {
          wx.authorize({
            scope: 'scope.userLocation',
            success: () => {
              wx.getLocation({
                success: res => {
                  // 还要判断手机是否开启位置信息
                  wx.getSystemInfo({
                    success: ({ locationEnabled }) => {

                    }
                  })
                }
              })
            },
            fail: () => {
              wx.showToast({
                title: '请开启授权',
                icon: 'none'
              })
              this.setData({
                isUserLocation: false
              })
            }
          })
        } else {
          wx.getLocation({
            success: res => {
                wx.getSystemInfo({
                    success: ({ locationEnabled }) => {
                      
                    }
                })

            }
          })
        }
      }
    })
  },
  handleOpenSetting({ detail: { authSetting } }) {
    if (authSetting['scope.userLocation']) {
      this.setData({
        isUserLocation: true
      })
    }
  }

})