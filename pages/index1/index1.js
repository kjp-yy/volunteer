// pages/index1/index1.js
let res=require('../api.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datalist:[],
    datalist1:[],
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
    res.SEND('website/canjiaList','GET',{openId:'oiUyR4iykJCuGJOFg6t2IgGN0_xA',type:1,type1:1},(res)=>{
      // console.log(res.data.data.list[0].activity.imgList[0])
      console.log(res.data.data.list)
      this.setData({
        datalist:res.data.data .list
      })
    }),
    res.SEND('website/canjiaList','GET',{openId:'oiUyR4iykJCuGJOFg6t2IgGN0_xA',type:2,type1:1},(res)=>{
      // console.log(res.data.data.list[0].activity.imgList[0])
      console.log(res.data.data.list)
      this.setData({
        datalist1:res.data.data .list
      })
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
  // 查看更多
  click(){
    wx.navigateTo({
      url: '../activity/activity',
    })
  },
  // 活动招募跳转
  h_jump(){
    wx.navigateTo({
      url: '../new_activity/new_activity',
    })
  },
  // 政策法规跳转
  zcfg_jump(){
    wx.navigateTo({
      url: '../regulations/regulations',
    })
  },
})