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
    /* modal */
    clientHeight: 'auto',
    overflow: 'auto',
    /* part color List */
    select1: false,
    select2: false,
    select3: false,
    select4: false,
    select5: false,
    select6: false,
    select7: false,
    /* pain array */
    painList: []
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
      clientHeight: cHeight,
      overflow: 'hidden',
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
    const sportsList = ['跑步', '有用', '自行车'];
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
      clientHeight: 'auto',
      scroll: 'auto',
    })
  },

  closeModalListener: function (e) {
    this.setData({
      modalHidden: true,
      clientHeight: 'auto',
      scroll: 'auto',
    })
  },

  painPoint: function(e) {
    const value = e.target.dataset.value;
    let painList = this.data.painList;
    const select = e.target.dataset.select;
    const selectValue = !this.data[select];
    const dataObj = {}
    selectValue ? painList.push(value) : painList = painList.filter((i) => i !== value);
    dataObj[select] = selectValue;
    dataObj.painList = painList;
    this.setData(dataObj);
    console.log(painList);
  },

  formSubmit(e) {
    console.log(e.detail.value);
  },

  canvasDraw() {{
    var context = wx.createCanvasContext('avatarCanvas');
    context.setStrokeStyle('#888888');
    context.setFontSize(14)
    context.setTextBaseline('middle');
    // 肩颈
    context.setLineWidth(1);
    context.moveTo(105, 70);
    context.lineTo(153, 25);
    context.lineTo(230, 25);
    context.stroke();
    context.fillText("肩颈", 233, 25);

    // 肘部
    context.beginPath();
    context.moveTo(155, 95);
    context.lineTo(183, 65);
    context.lineTo(230, 65);
    context.stroke();
    context.fillText("肘部", 233, 65);

    //腰臀
    context.beginPath();
    context.moveTo(145, 130);
    context.lineTo(235, 130);
    context.stroke();
    context.fillText("腰臀", 238, 130);

    //大腿
    context.beginPath();
    context.moveTo(170, 190);
    context.lineTo(205, 165);
    context.lineTo(240, 165);
    context.stroke();
    context.fillText("大腿", 243, 165);

    //腕部
    context.beginPath();
    context.moveTo(50, 146);
    context.lineTo(35, 100);
    context.stroke();
    context.fillText("腕部", 25, 100);

    //膝部
    context.beginPath();
    context.moveTo(73, 220);
    context.lineTo(93, 250);
    context.stroke();
    context.fillText("膝部", 96, 250);

    //踝及足底
    context.beginPath();
    context.moveTo(73, 300);
    context.lineTo(123, 300);
    context.stroke();
    context.fillText("踝及足底", 126, 300);

    context.draw();
  }},
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