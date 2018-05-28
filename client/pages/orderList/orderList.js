// pages/orderList/orderList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        event: '田径',
        part: '膝关节',
        suit: '针灸',
        needTime: '6-12 min',
        date: '2008年4月15日',
        completed: false,
      },
      {
        event: '田径',
        part: '膝关节',
        suit: '针灸',
        needTime: '6-13 min',
        date: '2008年4月16日',
        completed: true,
      },
      {
        event: '田径',
        part: '踝关节',
        suit: '针灸',
        needTime: '6-12 min',
        date: '2008年4月16日',
        completed: false,
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle(
      {
        title: '预约信息',
      }
    )
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