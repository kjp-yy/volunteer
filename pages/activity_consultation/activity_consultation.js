// pages/activity_consultation/activity_consultation.js
let res=require('../api.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
   datalist1:[],
   datalist2:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    res.SEND('website/huodongList','GET',{status:0,type:1,type1:1},(res)=>{
      console.log(res)
      this.setData({
        datalist1:res.data.data.list
      })
    }),
     res.SEND('website/wanchengList','GET',{openId:'oiUyR4iykJCuGJOFg6t2IgGN0_xA',type:1,type1:1},(res)=>{
       console.log(res)
       this.setData({
         datalist2:res.data.data.list
       })
     })
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