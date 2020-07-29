// pages/example10/index.js
const behavior = require('../../components/example/Behavior');
Component({
  behaviors: [behavior],
  methods: {
    onLoad() {
      console.log('页面example10展示了~')
    }
  }
})