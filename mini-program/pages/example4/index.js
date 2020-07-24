// pages/example4/index.js
Page({
  handleScroll(e) {
    // 获取距离scroll-view顶部的距离
    const { scrollTop } = e.detail;
    console.log(scrollTop);
  }
})