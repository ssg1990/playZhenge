const date = new Date()
const events = [
  '4月15日爱江山越野跑',
  '4月16日爱美人越野跑',
  '4月17日乒乓球',
  '4月18日篮球争霸赛',
]

Component({
  properties: {
    openPicker:{
      type: Boolean,
      observer: function(newVal, oldVal){
        if(newVal === true && oldVal !== newVal) {
          this.open();
        }
      }
    }
  },
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
      this.triggerEvent('chooseevent', { eventName: this.data.event }, { bubbles: true });
      this.close();
    },
    cancel: function() {
      this.triggerEvent('closemodal', {}, {bubbles: true});
      this.close();
    },
    close: function() {
      this.properties.openPicker = false;
      this.setData({
        animate: 'pushdown',
      });
    },
    open: function() {
      this.setData({
        animate: 'popup',
      });
    },
  }
})
