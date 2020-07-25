// pages/example6/index.js
Page({
  handleBtnClick({ currentTarget: { dataset: { type } } }) {
    if (type === 'showActionSheet') {
      // 显示操作菜单
      wx.showActionSheet({
        itemList: ['确定', '取消'],
        itemColor: '#535d95',
        success: ({tapIndex}) => {
          // 可以在这里对点击不同的选项做操作
          tapIndex === 0 && (console.log('你点击了确定'));
        },
        fail: err => {
          console.log(err)
        }
      })
    } else if (type === 'showToast') {
      // 显示消息提示框
      wx.showToast({
        title: '晚上好~',
        icon: 'none'
      })
    } else if (type === 'showLoading') {
      // 显示loading提示框
      // 注: 必须要主动调用wx.hideLoading才能关闭
      wx.showLoading({
        title: '加载中',
        mask: true
      })
      setTimeout(() => {
        wx.hideLoading();
      }, 2000);
    } else {
      // 显示模态对话框
      wx.showModal({
        title: '是否继续',
        showCancel: true,
        cancelText: '否',
        confirmText: '是'
      })
    }
  }
})