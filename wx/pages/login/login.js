// pages/login/login.js
const app =  getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phonenumber:'',
    password:''
  },

//获取用户输入信息
  usernameHandle:function(e){
      this.setData({
        phonenumber:e.detail
      })
  },
//获取用户输入密码
  pwdHandle:function(e){
    this.setData({
      password:e.detail
    })
  },

  loginHandle(e){
      var that = this;
      if(that.data.username == ''){
        wx.showModal({
          title: '提示',
          content: '请输入用户名',
          showCancel: false,
          confirmText: '确定',
          confirmColor: '#3CC51F',
          success: (result) => {
            if(result.confirm){
              
            }
          },
          fail: ()=>{},
          complete: ()=>{}
        });
      }
      else if(that.data.password ==''){
        wx.showModal({
          title: '提示',
          content: '密码不能为空！',
          showCancel: false,
          confirmText: '确定',
          confirmColor: '#3CC51F',
          success: (result) => {
            if(result.confirm){
              
            }
          },
          fail: ()=>{},
          complete: ()=>{}
        });
      }
      //发送请求
      var reqTask = wx.request({
        url: 'http://localhost/treehole/index.php/Home/User/login',
        data: {
          phonenumber:that.data.phonenumber,
          password:that.data.password
        },
        header: {'content-type':'application/x-www-form-urlencoded'},
        method: 'POST',
        dataType: 'json',
        responseType: 'text',
        success: (result)=>{
            console.log(result.data.error_code);
            
            if(result.data.error_code == 2){
                wx.showToast({
                  title: '该账号不存在，请注册',
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

            if(result.data.error_code == 3){
              wx.showToast({
                title: '密码错误，请重新输入密码',
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

          if(result.data.error_code == 0){
            
            console.log(result.data.data);
            app.globalData.user_id =result.data.data.user_id;
            app.globalData.username =  result.data.data.username;
            app.globalData.avatarUrl = result.data.data.avatarUrl;
            app.globalData.gender = result.data.data.gender;
            
            wx.showToast({
              title: '登陆成功',
              icon: 'none',
              image: '',
              duration: 1500,
              mask: false,
              success: (result)=>{

              },
              fail: ()=>{},
              complete: ()=>{}
            });
            //1.5秒后跳转到my页面
            setTimeout(() => {
              wx.switchTab({
                url: '/pages/my/my',
                success: (result)=>{
                  
                },
                fail: ()=>{},
                complete: ()=>{}
              });
            }, 1500);
          }
        },
        fail: ()=>{
            wx.showToast({
              title: '连接失败请检查您的网络',
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