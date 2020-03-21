// pages/job/job.js
var app =  getApp();


Page({

  /**
   * 页面的初始数据
   */
  data: {
      city:"123",
      jobList:[
        {
          id:0,
          jobname:"发传单",
          salary:"100元/天",
          address:"学校门口",
          date:"2020-02-02",
          company:"asdasdasd"
        },
        { 
          id:1,
          jobname:"发asda传单",
          salary:"100元/天",
          address:"学校门口",
          date:"2020-02-02",
          company:"asdasdasd"
        },
        {
          id:2,
          jobname:"qwe",
          salary:"100元/天",
          address:"学校门口",
          date:"2020-02-02",
          company:"asdasdasd"
        },
        
      ],

      
  },

search:function (e) { 
      wx.navigateTo({
        url: '/pages/search/search',
        
      });
 },
 navagete:function (e) { 
   wx.redirectTo({
     url: '/pages/position/position',
     success: (result)=>{
       
     },
     fail: ()=>{},
     complete: ()=>{}
   });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  //   var that = this;

  //   wx.getLocation({
  //     type: 'wgs84',
  //     altitude:true,
  //     success (res) {
  //       console.log("wx.getlocation");
  //       console.log(res);
  //       if(res&&res.latitude && res.longitude)
  //       {
  //           var latitude = res.latitude;
  //           var longitude = res.longitude;
  //           that.loadCity(longitude,latitude)
  //       }
  //       else{
  //         that.setData({
  //             city:"获取失败"
  //         })
  //       }
  //     }
  //    })
     
  // },

  // loadCity:function (longitude,latitude) { 
  //     var that = this;
  //     wx.request({
  //       url: 'https://api.map.baidu.com/geocoder/v2/?ak=yBkcFGYgH5Dni4PhbYDsKo8bbRVFfdMa&location=' + latitude + ',' + longitude + '&output=json',
  //       data: {},
  //       header: {'content-type':'application/json'},
  //       success: (result)=>{
          
  //         console.log(result);
          
  //         if(result && result.data){
  //             var city = result.data.result.addressComponent.city;
  //             console.log(result);

  //             that.setData({
  //               city:city.indexOf('市') >-1?city.substr(0,city.indexOf('市')):city
  //             });
  //         }
  //         else{
  //           that.setData({
  //             city:"获取失败"
  //           })
  //         }
  //       },
  //       fail: ()=>{},
  //       complete: ()=>{}
  //     });
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
    var city = app.globalData.City;
    console.log(city);
    
    this.setData({
      city:city
    })
    console.log(app.globalData);
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