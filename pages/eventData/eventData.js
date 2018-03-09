const util = require('../../utils/util.js');
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
    eventNum:"赛事号码",
    eventNumTip:"请输入赛事号码",
    name: '您的名字',
    nameTip: "请输入您的名字",
    contactWay: '联系方式',
    contactWayTip: "请输入联系方式",
    returnVisit: "(便于后期回访)",
    warningTips: "带 * 问题必须填写",
    hideTipsFlag: true,
    modalHidden: true,
    choices: [
      '4月15日爱江山越野跑',
      '4月16日爱美人越野跑',
      '4月17日乒乓球',
      '4月18日篮球争霸赛',
    ]
  },

  doOpenPicker() {
    this.setData({
      openPicker: true,
      modalHidden: false,
    });
  },

  chooseEventListener: function (e) {
    this.setData({
      eventNameValue: e.detail.choice,
      modalHidden: true,
    })
  },

  closeModalListener: function(e) {
    this.setData({
      modalHidden: true,
    })
  },


  formSubmit: util.clickDebounce((e) => {
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
  }),

  showTips() {
    this.setData({
      hideTipsFlag: false,
    })
  },

  hideTips() {
    this.setData({
      hideTipsFlag: true,
    })
  },

  goToQuestionaire() {
    wx.navigateTo({
      url: '/pages/diagnoseQuestionaire/diagnoseQuestionaire',
    })
  },

  onLoad(options) {
    wx.setNavigationBarTitle(
      {
        title: '赛事信息',
      }
    )
  }
})
