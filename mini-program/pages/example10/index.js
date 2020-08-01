// pages/example10/index.js
const behavior = require('../../components/example/Behavior');
Component({
  data: {
    name: 'xiaoba'
  },
  behaviors: [behavior],
  methods: {
    onLoad() {
      console.log('页面example10展示了~')
    },
    handleTrigger(e) {
      console.log(e);
    },
    handleBtnClick() {
      // selectComponent调用时要传入一个匹配选择器
      const com = this.selectComponent('.custom-component');
      console.log(com);
      this.setData({
        name: 'xiaobaba'
      })
    }
  }
})