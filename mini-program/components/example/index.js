// components/example/index.wxml.js
const behavior = require('./Behavior');
Component({
  // 感觉和vue的mixins类似
  behaviors: [behavior],
  // 表示组件接收外部传入的样式类
  externalClasses: ['my-class'],
  options: {
    // 在组件定义时的选项中启用多slot支持
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    // 传进来的数据需要在这里定义
    name: {
      type: String,
      value: ''
    },
    age: Number
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  attached() {
    const { name, age } = this.properties;
    console.log(name, age)
  },
  pageLifetimes: {
    show() {
      console.log('自定义组件展示了~')
    }
  }
})
