Page({
  data: {
    range: ['xiaoba', '23']
  },
  // 滚动结束后执行的延迟回调
  handleProgress(e) {
    console.log(e)
  },
  handleSelectArea({ detail: { value } }) {
    // 获取选择的省市区
    console.log(value);
  },
  handleSelectPerson({ detail: { value } }) {
    // 获取选择了第几项
    console.log(value);
  },
  handleSliderChange({ detail: { value } }) {
    // 获取滑到的百分比
    console.log(value);
  }
})