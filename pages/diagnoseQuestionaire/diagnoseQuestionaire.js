// pages/diagnoseQuestionaire/diagnoseQuestionaire.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // logical flags
    modalHidden: true,
    // static labels
    sexLabel: '·性别：',
    ageLabel: '·年龄：',
    title: 'Step2',
    subTitle: '-自我诊断-',
    chooseAge: '选择年龄',
    submitBtn: '确认预约',
    sportsTitle: '·请选择您最长进行的运动：',
    running: '跑步',
    swimming: '游泳',
    bycycle: '自行车',
    painTitle: '·请在下图中点击您运动后最易产生不适的部位:',
    other1: '其他：',
    // src
    maleSrc: '/assets/img/svg/male-selected.svg',
    femaleSrc: '/assets/img/svg/female-unselect.svg',
    avatarImg: '/assets/img/avatar.jpeg',
    // data
    maleSelect: 'select',
    femaleSelect: '',    
    age: '',
    choices: [
      '<10岁',
      '10~20岁',
      '>20岁',
    ],
    tabSelect1: 'tab-selected',
    tabSelect2: '',
    tabSelect3: '',
    /* data package */
    sex: '男性',
    goodSports: '跑步',
    /* part color List */
    selectDict: {
      select1: false,
      select2: false,
      select3: false,
      select4: false,
      select5: false,
      select6: false,
      select7: false,
    },
    /* pain array */
    pain: '',
    /* canvas attribute */
    canvasWidth:  '0px',
    canvasHeight: '0px',
    isScroll: true
  },

  doOpenPicker() {
    let cHeight = 0;
    wx.getSystemInfo({
      success: function (res) {
        cHeight = res.windowHeight + 'px';
      },
    })
    this.setData({
      openPicker: true,
      modalHidden: false,
      isScroll: false,
    });
  },

  setSex(e) {
    const flag = e.target.dataset.value
    const femaleObj = {
      maleSelect: '',
      femaleSelect: 'select',
      femaleSrc: '/assets/img/svg/female-selected.svg',
      maleSrc: '/assets/img/svg/male-unselect.svg',
      sex: '女性',
    };
    const maleObj = {
      maleSelect: 'select',
      femaleSelect: '',
      maleSrc: '/assets/img/svg/male-selected.svg',
      femaleSrc: '/assets/img/svg/female-unselect.svg',
      sex: '男性',
    };
    flag === '0' ? this.setData(maleObj) : this.setData(femaleObj);
  },

  tapTab(e) {
    const index = e.target.dataset.index;
    const sportsList = ['跑步', '游泳', '自行车'];
    let tabSelectObj = {
      tabSelect1: '',
      tabSelect2: '',
      tabSelect3: '',
    }
    tabSelectObj["tabSelect" + index] = 'tab-selected';
    this.setData(tabSelectObj);
  },

  chooseEventListener: function (e) {
    this.setData({
      age: e.detail.choice,
      modalHidden: true,
      isScroll: true,
    })
  },

  closeModalListener: function (e) {
    this.setData({
      modalHidden: true,
      clientHeight: 'auto',
      scroll: 'auto',
      isScroll: true,
    })
  },

  resetSelectDict() {
    let initSelectDict = {
      select1: false,
      select2: false,
      select3: false,
      select4: false,
      select5: false,
      select6: false,
      select7: false,
    }
    this.setData({
      selectDict: initSelectDict,
    })
  },
  
  painPoint: function(e) {
    const value = e.target.dataset.value;
    const select = e.target.dataset.select;
    let str = "selectDict." + select;
    this.resetSelectDict();
    this.setData({
      [str]: true,
      pain: value,
    });
    console.log(this.data.pain);
  },

  formSubmit(e) {
    console.log(e.detail.value);
  },
  rem(src) {
    const commonWidth = 375;
    const ratio = wx.getSystemInfoSync().windowWidth / 375;
    return src*ratio|0;
  },
  canvasDraw() {{
    var context = wx.createCanvasContext('avatarCanvas');
    context.setStrokeStyle('#888888');
    context.setFontSize(14)
    context.setTextBaseline('middle');
    const rem = this.rem;
    // 肩颈
    context.setLineWidth(rem(1));
    context.moveTo(rem(105), rem(70));
    context.lineTo(rem(153), rem(25));
    context.lineTo(rem(230), rem(25));
    context.stroke();
    context.fillText("肩颈", rem(233), rem(25));

    // 肘部
    context.beginPath();
    context.moveTo(rem(155), (95));
    context.lineTo(rem(183), rem(65));
    context.lineTo(rem(230), rem(65));
    context.stroke();
    context.fillText("肘部", rem(233), rem(65));

    //腰臀
    context.beginPath();
    context.moveTo(rem(145), rem(130));
    context.lineTo(rem(235), rem(130));
    context.stroke();
    context.fillText("腰臀", rem(238), rem(130));

    //大腿
    context.beginPath();
    context.moveTo(rem(170), rem(190));
    context.lineTo(rem(205), rem(165));
    context.lineTo(rem(240), rem(165));
    context.stroke();
    context.fillText("大腿", rem(243), rem(165));

    //腕部
    context.beginPath();
    context.moveTo(rem(50), rem(146));
    context.lineTo(rem(35), rem(100));
    context.stroke();
    context.fillText("腕部", rem(25), rem(100));

    //膝部
    context.beginPath();
    context.moveTo(rem(73), rem(220));
    context.lineTo(rem(93), rem(250));
    context.stroke();
    context.fillText("膝部", rem(96), rem(250));

    //踝及足底
    context.beginPath();
    context.moveTo(rem(73), rem(300));
    context.lineTo(rem(123), rem(300));
    context.stroke();
    context.fillText("踝及足底", rem(126), rem(300));

    context.draw();
  }},

  painPointBlur(e) {
    this.data.pain = e.detail.value;
    this.resetSelectDict();
    console.log(this.data.pain);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.canvasDraw();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})