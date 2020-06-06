// pages/personaldata/personaldata.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.login({
      complete: (res) => {
        console.log(res)
      },
    })
      // 获取用户信息
      wx.getUserInfo({
      complete: (res) => {
        // console.log(res.authSetting['scope.userInfo'])
        this.setData({
          userInfo:res.userInfo
        })
      },
  })
  },
})