// pages/example18/index.js
Page({
  data: {
    isMove: false
  },
  /* 
    createIntersectionObserver配置的参数
    -第一个参数:触发阈值的数组,配置1表示当监听对象完全与目标相交(比如整个监听对象被包含在目标中)
    -第二个参数:初始相交比列,如果调用时检测到相交比列与这个值不相等且达到阈值会触发一次回调函数
    -第三个参数:是否同时观测多个目标节点
  */
  onReady() {
    // 在包含自定义组件的页面或自定义组件中应该使用this代替wx
    const io = wx.createIntersectionObserver();
    // 监听类名为btn的dom元素是否与类名为title的dom元素相交
    io.relativeTo('.title').observe('.btn', res => {
      console.log(res);
      // 相交比列,用作临界判断的指标
      console.log(res.intersectionRatio);
      /* 
        回调返回的几个其他属性
        intersectionRect: 相交区域的边界
        boundingClientRect: 目标的边界
          -left: 从屏幕左侧到目标边界左侧的距离
          -right: 从屏幕左侧到目标边界右侧的距离
          -top: 从屏幕顶部到目标边界上方的距离
          -bottom: 从屏幕顶部到目标边界下方的距离
        relativeRect: 参照物的边界
      */
    })
  },
  handleBtnClick() {
    this.setData({
      isMove: !this.data.isMove
    });
  },
  onPageScroll() {
    const io = wx.createIntersectionObserver();
    // 指定页面显示区域作为参照区域的参数有问题
    io.relativeToViewport().observe('.click-btn', res => {
      if (res.boundingClientRect.top < 0) {
        console.log('滚出屏幕了');
      }
      // 相交的bottom要算上目标的高度, 比如想在屏幕顶部到100px的范围见相交
      // 则相交的bottom等于100加上目标的高度
      if (res.boundingClientRect.top > 0 && res.boundingClientRect.bottom <= 140) {
        console.log(res);
        console.log('在屏幕顶部到100px的区域出现了~~~')
      }
    });
  }
})