// components/orderItem/order-item.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },                                                                                                                                                 
  /**
   * 组件的属性列表
   */
  properties: {
    event: {
      type: String,
    },
    date: {
      type: String,
    },
    part: {
      type: String,
    },
    suit: {
      type: String,
    },
    needTime: {
      type:String,
    },
    mstyle: {
      type: String,
    },
    completed: {
      type: Boolean,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    detailSrc: '/assets/img/svg/detail.svg',
    sportIcon: '/assets/img/svg/sport.svg',
    mainPart: '主要部位',
    'package': '康复套餐',
    timeStr: '预计所需时间',
    timeNum: '6-12 min',
    suggest: '已完成~ 我有话要说 >>>',
    uncompletedTitle: '-未完成订单-',
    completedTitle: '-已完成订单-'
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
