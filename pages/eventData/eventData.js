// pages/eventData/eventData.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openPicker: false,
    title: 'Step1',
    subTitle: '-填写个人参赛信息-',
    chooseEvent: '请选择赛事',
    eventName: '赛事名称',
    eventNameValue: '',
    eventNo:"赛事号码",
    eventNoTip:"请输入赛事号码",
    name: '您的名字',
    nameTip: "请输入您的名字",
    contactWay: '联系方式',
    contactWayTip: "请输入联系方式",
    returnVisit: "(便于后期回访)",
    warningTips: "带 * 问题必须填写",
    hideTips: true,
  },

  doOpenPicker() {
    this.setData({
      openPicker: true,
    });
  },

  chooseEvent(e) {
    this.console.log(e)
  },

  chooseEventListener: function (e) {
    this.setData({
      eventNameValue: e.detail.eventName,
    })
  },

  formSubmit(e) {
    const detail = e.detail.value;
    const completed = detail.eventName && detail.eventNo && detail.name;
    if(!completed) {
      this.showTips();
      return;
    } else {
      this.hideTips();
      this.goToQuestionaire();
      console.log('jump');
    }
  },

  showTips() {
    this.setData({
      hideTips: false,
    })
  },

  hideTips() {
    this.setData({
      hideTips: true,
    })
  },

  goToQuestionaire() {
    wx.navigateTo({
      url: '/pages/diagnoseQuestionaire/diagnoseQuestionaire',
    })
  }
})
