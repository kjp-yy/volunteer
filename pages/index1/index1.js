// pages/index1/index1.js
let res=require('../api.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图
    background: ['../../images/k_1/1.jpg', '../../images/k_1/2.jpg', '../../images/k_1/3.jpg'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    res.SEND('website/canjiaList','GET',{},(res)=>{
      // console.log(res)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  onUnload: function () {

  },
  onShareAppMessage: function () {

  },
  click(){
    wx.navigateTo({
      url: '../haa_look/haa_look',
    })
  },
  // 活动招募跳转
  h_jump(){
    wx.navigateTo({
      url: '../new_activity/new_activity',
    })
  }
})