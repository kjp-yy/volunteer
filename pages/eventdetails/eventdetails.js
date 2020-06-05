Page({
  data: {
    latitude:'',
    longitude: '',
    markers:[{
      iconPath: "../../images/m_1/ditu.png",
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
    }
   
    ]
},

onLoad (){
  wx.request({
    url: 'https://www.wumeili.top/w/website/bannerList',
    data:{},
    method:"GET",
    success:res=>{
      console.log(res);
      this.setData({
        bannerlist:res.data.data
      }) 
    }
  })
  wx.getLocation({
    success:rus=> {
      console.log(rus);
      this.setData({
        latitude:rus.latitude,
        longitude:rus.longitude,
        "markers[0].latitude":rus.latitude,
        "markers[0].longitude":rus.longitude,
      })
    }
  })
}

})
