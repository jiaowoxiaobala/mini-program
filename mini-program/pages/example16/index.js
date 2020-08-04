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
                  console.log(res);
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
              console.log(res);
              wx.request({
                url: 'https://geoapi.heweather.net/v2/city/lookup?location=113.88308,22.55329&key=11d5c67f43f745c3a3a12656b548f9d9',
                success: ({ data }) => {
                  wx.showToast({
                    title: `当前在${data.location[0].name}`,
                    icon: 'none'
                  })
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