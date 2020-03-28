// pages/my/my.js
var app =  getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
      show:false,
      //判断小程序的API，回调，参数，组件等是否在当前版本可用
      canIUse: wx.canIUse('button.open-type.getUserInfo'),
      avatarUrl: "https://i2.tiimg.com/712483/4ddb012f862b3603.png",
      
      username:'      未登录/注册  点我登陆',
      gender:''
      
  },

  //退出登陆功能
  exitHandle:function (e) { 
      if(app.globalData.userInfo){
        
        app.globalData.username = '';
        app.globalData.avatarUrl='';
        app.globalData.gender='';
        app.globalData.userInfo=false;

        this.setData({
          avatarUrl:'https://i2.tiimg.com/712483/4ddb012f862b3603.png',
          username:'      未登录/注册  点我登陆'
        })
      }
   },

  //跳转注册页面
  signin:function (e) {
    
    this.setData({
      show:false
    });

     wx.navigateTo({
       url: '../sigin/sigin',
       success: (result)=>{
       },
       fail: ()=>{},
       complete: ()=>{}
     });
   },

  onClickShow() {
    this.setData({ show: true });
  },

  onClickHide() {
    this.setData({ show: false });
  },

  noop() {

  },

  

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
    if(app.globalData.username !='' && app.globalData.avatarUrl!=''){
      this.setData({
        username:app.globalData.username,
        avatarUrl:app.globalData.avatarUrl
  
      })
    }
    else{
      this.setData({
        avatarUrl: "https://i2.tiimg.com/712483/4ddb012f862b3603.png",
        username:'      未登录/注册  点我登陆'
      })
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