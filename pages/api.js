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
// 暴露接口
module.exports={
  SEND:SEND,
}