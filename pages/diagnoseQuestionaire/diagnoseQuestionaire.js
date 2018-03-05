// pages/diagnoseQuestionaire/diagnoseQuestionaire.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // logical flags
    modalHidden: true,
    // static labels
    sexLabel: '·性别:',
    ageLabel: '·年龄:',
    title: 'Step2',
    subTitle: '-自我诊断-',
    chooseAge: '选择年龄',
    submitBtn: '确认预约',
    sportsTitle: '·请选择您最长进行的运动:',
    running: '跑步',
    swimming: '游泳',
    bycycle: '自行车',
    // src
    maleSrc: '/assets/img/svg/male-selected.svg',
    femaleSrc: '/assets/img/svg/female-unselect.svg',
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
  },

  doOpenPicker() {
    this.setData({
      openPicker: true,
      modalHidden: false,
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
    })
  },

  closeModalListener: function (e) {
    this.setData({
      modalHidden: true,
    })
  },

  formSubmit(e) {
    console.log(e.detail.value);
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