// pages/example8/index.js
Page({
  data: {
    isShow: true
  },
  handleBtnClick({ currentTarget: { dataset: { type } } }) {
   switch(type) {
     case 'redDot':
      // 显示tabbar某一项右上角的红点
      wx.showTabBarRedDot({ index:3 });
      break;
      case 'text':
      // 为tabbar某一项右上角添加文本(也会显示红点)
      wx.setTabBarBadge({
        index: 3,
        text: '99'
      });
      break;
      case 'content':
      // 设置tabbar某一项的内容
      wx.setTabBarItem({
        index: 3,
        text: '小八'
      });
      break;
      case 'setTabBar':
      // 设置tabbar整体样式
      wx.setTabBarStyle({
        borderStyle: 'black',
        // backgroundColor: '#535d95',
        selectedColor: '#f00',
        color: '#00f'
      });
      break;
      case 'toggle': 
      if (this.data.isShow) {
        wx.hideTabBar({
          animation: true,
        })
        this.setData({
          isShow: false
        })
      } else {
        wx.showTabBar({
          animation: true,
        })
        this.setData({
          isShow: true
        })
      }
      break;
      default:
      // 移除红点和隐藏文本效果一致
      wx.removeTabBarBadge({index: 3});
      // wx.hideTabBarRedDot({index:3})
      break;
   }
  }
})