let apiurl = "http://192.168.1.118:8080/"
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
module.exports={
  SEND:SEND
}