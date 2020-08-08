// pages/example19/index.js
Page({
  handleBtnClick({ target: { dataset: { type } } }) {
    switch(type) {
      case 'call':
      wx.makePhoneCall({
        phoneNumber: '110'
      });
      break;
      case 'copy':
      wx.setClipboardData({
        data: 'jiaowoxiaobala'
      });
      break;  
      default:
      wx.scanCode({
        onlyFromCamera: true,
        success: res => {
          console.log(res);
        }
      });
      break;
    }
  }
})