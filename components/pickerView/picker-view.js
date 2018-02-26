// // components/pickerView/picker-view.js
// Component({
//   /**
//    * 组件的属性列表
//    */
//   properties: {

//   },

//   /**
//    * 组件的初始数据
//    */
//   data: {

//   },

//   /**
//    * 组件的方法列表
//    */
//   methods: {

//   }
// })

const date = new Date()
const events = [
  '4月15日爱江山越野跑',
  '4月16日爱美人越野跑',
  '4月17日乒乓球',
  '4月18日篮球争霸赛',
]



Component({
  data: {
    events: events,
    event: '4月15日爱江山越野跑',
    value: 0,
    hidden: false,
    animate: '',
  },
  methods:{
    bindChange: function (e) {
      const val = e.detail.value
      this.setData({
        event: this.data.events[val],
      })
    },
    confirm: function() {
      this.open();
      console.log('confirm');
    },
    cancel: function() {
      this.close();
      console.log('cancel');
    },
    close: function() {
      this.setData({
        animate: 'pushdown',
      });
    },
    open: function() {
      this.setData({
        animate: 'popup',
      });
    },
    animationEnd: function(e){
      let animationName = e.detail.animationName;
      if(animationName === 'pushdown') {
        this.setData({
          hidden: true
        })
      } else if (animationName === 'popup'){
        this.setData({
          hidden: false
        })
      }
    }
  }
})
