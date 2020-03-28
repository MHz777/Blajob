// pages/job/job.js
var app =  getApp();


Page({

  /**
   * 页面的初始数据
   */
  data: {
      city:"",
      jobList:[
       
        
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
      var that = this;
      that.setData({
        city:app.globalData.city
      });

      // if(!that.data.city){
      
        var reqTask = wx.request({
          url: 'https://invisibles.top/index.php/Home/Job/get_alljob',
          data: {},
          header: {'content-type':'application/x-www-form-urlencoded'},
          method: 'POST',
          dataType: 'json',
          responseType: 'text',
          success: (result)=>{
            //console.log(result.data.data);
            var jobList = result.data.data;
            that.setData({
              jobList:jobList
            })
          },
          fail: ()=>{
            wx.showToast({
              title: '列表获取失败',
              icon: 'none',
              image: '',
              duration: 1500,
              mask: false,
              success: (result)=>{
                
              },
              fail: ()=>{},
              complete: ()=>{}
            });  
          },
          complete: ()=>{}
        });
      // }
      // else{
      //   var reqTask = wx.request({
      //     url: 'http://localhost/treehole/index.php/Home/Job/city',
      //     data: {
      //       city:that.data.city
      //     },
      //     header: {'content-type':'application/x-www-form-urlencoded'},
      //     method: 'POST',
      //     dataType: 'json',
      //     responseType: 'text',
      //     success: (result)=>{
      //       console.log(result.data.data);
            
      //     },
      //     fail: ()=>{},
      //     complete: ()=>{}
      //   });
      // }
      
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
    var that = this;
    var city = app.globalData.City;
    //console.log(city);
    that.setData({
      city:city
    })
    console.log(app.globalData);


    if(!that.data.city){
      
      var reqTask = wx.request({
        url: 'https://invisibles.top/index.php/Home/Job/get_alljob',
        data: {

        },
        header: {'content-type':'application/x-www-form-urlencoded'},
        method: 'POST',
        dataType: 'json',
        responseType: 'text',
        success: (result)=>{
          console.log(result.data.data);
          var jobList = result.data.data;
          app.globalData.jobList = jobList;
          
          that.setData({
            jobList:jobList
          })
        },
        fail: ()=>{
          wx.showToast({
            title: '列表获取失败',
            icon: 'none',
            image: '',
            duration: 1500,
            mask: false,
            success: (result)=>{
              
            },
            fail: ()=>{},
            complete: ()=>{}
          });  
        },
        complete: ()=>{}
      });
    }
    else{
      var reqTask = wx.request({
        url: 'https://invisibles.top/index.php/Home/Job/city',
        data: {
          city:that.data.city
        },
        header: {'content-type':'application/x-www-form-urlencoded'},
        method: 'POST',
        dataType: 'json',
        responseType: 'text',
        success: (result)=>{
          console.log(result.data.data);
          var jobList=[];
          jobList = result.data.data;
          that.setData({
            jobList:jobList
          })
        },
        fail: ()=>{},
        complete: ()=>{}
      });
    }
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
