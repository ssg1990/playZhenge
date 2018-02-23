//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    title: '动臻格康复管家',
    tip: '赛事康复个性化定制服务',
    imgUrls: [
      '/assets/img/cover1.jpeg',
      '/assets/img/cover2.jpeg',
      '/assets/img/cover3.jpeg',
      '/assets/img/cover4.jpeg',
    ],
    indicatorDots: true,
    circular: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    indicatorColor: "rgba(0,0,0,.3)",
    indicatorActiveColor: "rgba(255,255,255,.7)",
    btnSrc: '/assets/img/svg/check.svg',
    btnText: '立即预约',
    userSrc: '/assets/img/svg/user.svg',
    bottomTextTips: '查看预约信息',
    rightArrowSrc: '/assets/img/svg/rightArrow.svg'
  },
  viewOrderList() {
    wx.navigateTo({
      url: '/pages/orderList/orderList',
    })
  }
})


