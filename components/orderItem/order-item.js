// components/orderItem/order-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    detailSrc:{
      type: String,
      value: '/assets/img/svg/detail.svg',
    },
    mainPart: {
      type: String,
      value: '主要部位',
    },
    'package': {
      type: String,
      value: '康复套餐',
    },
    completed: {
      type: Boolean,
      value: false,
    },
    timeStr: {
      type: String,
      value: '预计所需时间',
    },
    timeNum: {
      type: String,
      value: '6-12 min',
    },
    suggest: {
      type: String,
      value: '已完成~ 我有话要说 >>>',
    }
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

  }
})
