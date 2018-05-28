Component({
  properties: {
    openPicker:{
      type: Boolean,
      observer: function(newVal, oldVal){
        if(newVal === true && oldVal !== newVal) {
          this.open();
        }
      }
    },
    choices: {
      type: Array
    }
  },
  data: {
    choice: '',
    value: 0,
    hidden: false,
    animate: '',
  },
  methods:{
    bindChange: function (e) {
      const val = e.detail.value
      this.setData({
        choice: this.properties.choices[val],
      })
    },
    confirm: function() {
      this.triggerEvent('chooseevent', { choice: this.data.choice }, { bubbles: true });
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
