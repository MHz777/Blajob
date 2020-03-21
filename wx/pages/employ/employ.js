// pages/employ/employ.js
var app =  getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    jobname:"发传单",
    salary:"100元/天",
    address:"学校门口",
    date:"2020-02-02",
    company:"asdasdasd",
    phonenumber:'',
    jobDetail:"",
    city:''
  },

  jobnameInput:function(e){
      console.log(e.detail)
      this.setData({
        jobname:e.detail
      })
  },
  salaryInput:function(e){
    console.log(e.detail);
    this.setData({
      salary:e.detail
    })
  },
  addressInput:function(e){
    console.log(e.detail);
      this.setData({
        address:e.detail
      })
  },
  dateInput:function(e){
    console.log(e.detail);
      this.setData({
        date:e.detail
      })
  },
  companyInput:function(e){
    console.log(e.detail);
      this.setData({
        company:e.detail
      })
  },
  phoneInput:function(e){
    console.log(e.detail);
      this.setData({
        phonenumber:e.detail
      })
  },

  jobDetailInput:function(e){
    console.log(e.detail);
    this.setData({
      jobDetail:e.detail
    })
},

  //定位按钮
  navigate:function(){
    wx.navigateTo({
      url: '../position/position',
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },

  //提交按钮
  publishHandle:function(e){
    // jobname:"发传单",
    // salary:"100元/天",
    // address:"学校门口",
    // date:"2020-02-02",
    // company:"asdasdasd",
    // phonenumber:'',
    // jobDetail:""
    var that = this;
      var jobname = that.data.jobname;
      var salary = that.data.salary;

  },


  // onChange(e) {
  //   // e.detail 为当前输入的值
  //   console.log(e.detail);
  // },

  
  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad: function (options) {

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
      var city = this.data.city;
      city = app.globalData.City;
      this.setData({
        city:city
      })
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