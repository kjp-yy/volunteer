// 封装获取接口的方法
let apiurl = "http://192.168.1.118:8080/volunteer/"
function SEND(url,method,data,success){
  wx.request({
    url: apiurl+url,
    header:{
      'content-type':'application/json'
    },
    method:method,
    data:data,
    success:success
  })
}
  // 跳转到详情
  function detail_jump(e){
    console.log(e)
    // let id=e.currentTarget.dataset.id
    // 调用一次接口为了获取id
    // 跳转到页面
    wx.navigateTo({
      url: '../eventdetails/eventdetails?id='+e,
    })
  }
  // 
// 暴露接口
module.exports={
  SEND:SEND,
  del:detail_jump
}