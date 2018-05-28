const number = '1';
// pages/orderSuccess/orderSuccess.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    labels: {
      title: '预约成功!',
      subTitle1: '- 您是第 ',
      subTitle2: ' 位使用者 -',
      content1_1: '恭喜！您已成功预约 ',
      month: ' 月 ',
      day: ' 日 ',
      content1_2: ' 赛事的康复套餐：',
      content2_1: '以 ',  
      content2_2: ' 为主的 ',
      content2_3: ' 模式',
      content3_1: '预计所需时间： ',
      content3_2: ' 分钟。',
      bottomTip1: '运动损伤无小病  朴素中医康复行',
      bottomTip2: '动臻格康复工作室'
    },
    src: {
      ogzIcon: '/assets/img/mainIcon.jpeg',
      qrCode: '/assets/img/qrcode.png'
    },
    time: '6-12',
    userCount: '0007',
    months: '__',
    days: '__',
    event: '_____ ____',
    curePart: '____',
    cureSet: '___',

  },

  onReady(){
  }
})