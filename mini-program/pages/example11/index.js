// pages/example11/index.js
Page({
  handleBtnClick({ target: { dataset:{ type } } }) {
    switch(type) {
      case 'save':
      wx.setStorageSync('name', 'xiaoba');
      break;
      case 'get':
      const name = wx.getStorageSync('name');
      console.log(name);
      break;
      case 'remove':
      // 移除指定storage
      wx.removeStorageSync('name');
      break;
      case 'info':
      // 获取storage的信息
      wx.getStorageInfo({
        success: res => {
          console.log(res)
        }
      });
      break;
      default:
      // 移除所有storage
      wx.clearStorage({
        success: res => {
          console.log(res)
        }
      });
      break;
    }
  }
})