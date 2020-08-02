// pages/example12/index.js
Page({
  data: {
    imgSrc: ''
  },
  handleBtnClick({ currentTarget: { dataset: { type } } }) {
    switch(type) {
      case 'preview':
      wx.previewImage({
        urls: ['https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg']
      });
      break;
      case 'compress':
      wx.compressImage({
        src: '/images/wechat.jpg',
        success: res => {
          // 获取图片信息
          wx.getImageInfo({
            src: res.tempFilePath,
            success: data => {
              console.log(data);
            }
          })
        }
      });
      break;
      case 'choose':
      // 从本地相册中选择图片
      wx.chooseImage({
        sourceType: 'album',
        success: ({ tempFilePaths }) => {
          this.setData({
            imgSrc: tempFilePaths[0]
          })
        }
      });
      break;
      default:
      wx.chooseMessageFile({
        count: 3,
        type: 'file',
        // 过滤文件后缀名
        extension: ['jpg', 'png'],
        success: res => {
          console.log(res);
        }
      }) 
    }
  }
})