module.exports = Behavior({
  attached() {
    console.log('我是behavior中的生命周期')
  },
  methods: {
    handleBtnClick() {
      console.log(`按钮被点击了${this.data.count}次~~~`);
    }
  },
  data: {
    count: 1
  }
});