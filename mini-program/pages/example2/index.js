// pages/example2/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    obj: {
      name: 'xiaoba',
      age: 22
    }
  },
  handleBtnClick() {
    this.setData({
      // 对于对象或数组字段,可以直接修改一个其下的子字段,这样做通常比修改整个对象
      // 或数组更好
      'obj.name':'xiaobala'
    }, () => {
      // setData第二个参数是回调函数,在setData引起界面更新渲染完毕后执行
      console.log(this.data.obj)
    })
    // 如果通过wx.getUserInfo获取用户信息,需要已获取授权
    // 注: 本身不会弹出授权框
    wx.getUserInfo({
      complete: (res) => {
        console.log(res)
      },
    })
  },
  // 点击设置open-type="share"的按钮时触发
  onShareAppMessage(res) {
    console.log(res)
    // 通过设置返回的对象可自定义转发内容
    return {
      title: '这是我的电子名片,请惠存',
      path: '/pages/example2',
      // 定义转发的图片
      imageUrl: '/images/wechat.jpg'
    }
  },
  // 获取用户信息
  handleGetUserInfo(e) {
    const { userInfo } = e.detail;
    console.log(userInfo);
  },
  onLoad(option) {
    console.log(option)
  }
})
// 注: 只有定义了此事件处理函数,右上角菜单才会显示'转发'按钮