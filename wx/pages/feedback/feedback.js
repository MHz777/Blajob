// pages/feedback/feedback.js
var app =  getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    feedback:''
  },


  //输入框失去焦点事件
  onblur(e){
    //console.log(e.detail.value);
    this.setData({
      feedback: e.detail.value
    })
  },

  //点击提交事件
  feedHandle:function(){
    var that = this;

    var reqTask = wx.request({
      url: 'http://localhost/treehole/index.php/Home/User/feedback',
      data: {
        user_id:app.globalData.user_id,
        feedback:that.data.feedback
      },
      header: {'content-type':'application/x-www-form-urlencoded'},
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
        console.log(result.data);

          if(result.data.error_code==0){
              wx.showToast({
                title: '恭喜您，反馈成功',
                icon: 'none',
                image: '',
                duration: 1500,
                mask: false,
                success: (result)=>{
                  
                },
                fail: ()=>{},
                complete: ()=>{}
              });

              //延迟返回
              setTimeout(() => {
                  wx.navigateBack({
                    delta: 1
                  });
              }, 1500);
          }

          if(result.data.msg=="参数不足：user_id"){
            wx.showToast({
              title: '请您先登陆哦',
              icon: 'none',
              image: '',
              duration: 1500,
              mask: false,
              success: (result)=>{
                
              },
              fail: ()=>{},
              complete: ()=>{}
            });
          }

          if(result.data.msg=="参数不足：feedback"){
            wx.showToast({
              title: '请填写反馈信息哦',
              icon: 'none',
              image: '',
              duration: 1500,
              mask: false,
              success: (result)=>{
                
              },
              fail: ()=>{},
              complete: ()=>{}
            });
          }
      },
      fail: ()=>{
          wx.showToast({
            title: '提交失败，请检查您的网络',
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