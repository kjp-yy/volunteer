let res=require("../api.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 定义一个dataid赋给详情页
    id:0,
    datalist:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 初始化活动中心页面
    this.Auto(0)
  },
  now_join(e){
      let id=e.currentTarget.dataset.id
      this.Auto(id)
  },
  // 封装活动中心默认显示的数据
  Auto(n){
    let id=n
    res.SEND('website/huodongList','GET',{status:id},res=>{
      this.setData({
        datalist: res.data.data.list,
      })
    })
  },
  detail_jump(e){
    console.log(e)
    res.del(e.currentTarget.dataset.id)
  }

})