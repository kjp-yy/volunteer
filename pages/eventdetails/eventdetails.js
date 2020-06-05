let res=require('../api.js')
Page({
  data: {
    datalist:{},
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

onLoad (options){
  // 获取到传过来的id
  // 获取对应id的数据
  res.SEND('website/huodong','GET',{id:options.id},res=>{
    console.log(res.data)
    this.setData({
      datalist:res.data.data
    })
  })
  // 获取地图位置
  wx.getLocation({
    success:rus=> {
      // console.log(rus);
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
