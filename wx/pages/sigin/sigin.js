var app =  getApp();

// pages/sigin/sigin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    username:'请点击获取您的微信昵称/微信头像',
    password:'',
    repeatpassword:'',
    avatarUrl:'https://i2.tiimg.com/712483/4ddb012f862b3603.png',
    phonenumber:'',
    gender:1
  },

  //提交注册
  siginHandle:function(e){
    var that = this;
    //匹配手机号的正则表达式
    var reg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    
    if(that.data.username ==''){
      wx.showModal({
        title: '提示',
        content: '请输入用户名',
        showCancel: false,
        cancelText: '取消',
        cancelColor: '#000000',
        confirmText: '确定',
        confirmColor: '#3CC51F',
        success: (result) => {
          if(result.confirm){
            
          }
        },
      });
 
     
    }

    else if(that.data.password ==''){
      wx.showModal({
        title: '提示',
        content: '请输入密码',
        showCancel: false,
        cancelText: '取消',
        cancelColor: '#000000',
        confirmText: '确定',
        confirmColor: '#3CC51F',
        success: (result) => {
          if(result.confirm){
            
          }
        },
      });
 
     
    }


   else if(that.data.repeatpassword ==''){
      wx.showModal({
        title: '提示',
        content: '请确认密码',
        showCancel: false,
        cancelText: '取消',
        cancelColor: '#000000',
        confirmText: '确定',
        confirmColor: '#3CC51F',
        success: (result) => {
          if(result.confirm){
            
          }
        },
      });
 
     
    }


   else if(that.data.phonenumber ==''){
      wx.showModal({
        title: '提示',
        content: '请输入手机号',
        showCancel: false,
        cancelText: '取消',
        cancelColor: '#000000',
        confirmText: '确定',
        confirmColor: '#3CC51F',
        success: (result) => {
          if(result.confirm){
            
          }
        },
      });
    }

    else if(that.data.phonenumber.length !='11'){
      wx.showModal({
        title: '提示',
        content: '请输入正确的手机号',
        showCancel: false,
        cancelText: '取消',
        cancelColor: '#000000',
        confirmText: '确定',
        confirmColor: '#3CC51F',
        success: (result) => {
          if(result.confirm){
            
          }
        },
      });
    }
    else if(!reg.test(that.data.phonenumber)){
      wx.showModal({
        title: '提示',
        content: '请输入正确的手机号',
        showCancel: false,
        cancelText: '取消',
        cancelColor: '#000000',
        confirmText: '确定',
        confirmColor: '#3CC51F',
        success: (result) => {
          if(result.confirm){
            
          }
        },
      });
    }
    console.log(this.data)

    //信息验证正确后将数据发送到后台
    var reqTask = wx.request({
        url: 'http://localhost/treehole/index.php/Home/User/sigin',
        data: {
          username:that.data.username,
          password:that.data.password,
          repeatpassword:that.data.repeatpassword,
          avatarUrl:that.data.avatarUrl,
          phonenumber:that.data.phonenumber,
          gender:that.data.gender
        },
        header: {'content-type':'application/x-www-form-urlencoded'},
        method: 'POST',
        dataType: 'json',
        responseType: 'text',
        success: (result)=>{
            console.log(result);
            if (result.data.error_code ==2) {
                  wx.showModal({
                    title: '提示',
                    content: '输入的密码不一致',
                    showCancel: false,
                    cancelText: '取消',
                    cancelColor: '#000000',
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
            if (result.data.error_code ==3) {
              wx.showModal({
                title: '提示',
                content: '手机号已存在，请勿重复注册',
                showCancel: false,
                cancelText: '取消',
                cancelColor: '#000000',
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
            
            if (result.data.error_code==0) {
                wx.showModal({
                  title: '提示',
                  content: '注册成功',
                  showCancel: false,
                  cancelText: '取消',
                  cancelColor: '#000000',
                  confirmText: '确定',
                  confirmColor: '#3CC51F',
                  success: (result) => {
                    
                  },
                  fail: ()=>{},
                  complete: ()=>{}
                });

                setTimeout(() => {
                  //注册成功自动跳转
                  wx.redirectTo({
                    url: '/pages/login/login',
                    success: (result)=>{
                      
                    },
                    fail: ()=>{},
                    complete: ()=>{}
                  });
                }, 1500);
                
            }


        },
        fail: ()=>{
         
            wx.showModal({
              title: '提示',
              content: '连接失败，请检查您的网络，或联系管理人员',
              showCancel: false,
              cancelText: '取消',
              cancelColor: '#000000',
              confirmText: '确定',
              confirmColor: '#3CC51F',
              success: (result) => {
                if(result.confirm){
                  
                }
              },
              fail: ()=>{},
              complete: ()=>{}
            });
          
        },
        complete: ()=>{}
      });

  },

  //用户名输入框
  nameHandle:function(e){

        this.setData({
          username:e.detail
        })

  },
  //密码输入框
  pwdHandle:function(e){
        this.setData({
          password:e.detail
        })
  },
  //再次输入密码框
  repwdHandle:function(e){
        this.setData({
          repeatpassword:e.detail
        })
  },
  //手机号框
  phnumHandle:function(e){
        this.setData({
          phonenumber:e.detail
        })
  },


  //按钮绑定点击获取用户信息事件
  bindGetUserInfo (e) {
    console.log(e.detail.userInfo);
    wx.getUserInfo({
      success: (res)=>{
        this.setData({
          show:false,
          avatarUrl:res.userInfo.avatarUrl,
          username:res.userInfo.nickName,
          gender:res.userInfo.gender
        })
        //将获取到的头像和昵称性别贮存在全局变量中
          app.globalData.avatarUrl = res.userInfo.avatarUrl;
          app.globalData.username = res.userInfo.nickName;
          //app.globalData.gender = res.userInfo.gender;
      },
      fail: ()=>{
        console.log("获取失败");
        
      },
      complete: ()=>{}
    });

    


  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      // 查看是否授权
    wx.getSetting({
      success (res){
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function(res) {
              console.log(res.userInfo)
            }
          })
        }
      }
    })
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