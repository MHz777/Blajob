// pages/employ/employ.js
var app =  getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    jobname:'',
    salary:'',
    address:'',
    date:'',
    company:'',
    phonenumber:'',
    jobDetail:'',
    city:'',

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
    console.log(e.detail.value);
    this.setData({
      jobDetail:e.detail.value
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
      var that = this;
      var user_id =app.globalData.user_id;
      var username = app.globalData.username;
     //发送请求
      var reqTask = wx.request({
        url: 'http://localhost/treehole/index.php/Home/Job/publish_job',
        data: {
        user_id:user_id,
        username :username,
        job_name : that.data.jobname,
        salary : that.data.salary,
        address : that.data.address,
        date : that.data.date,
        company : that.data.company,
        phonenumber : that.data.phonenumber,
        jobDetail : that.data.jobDetail,
        city : that.data.city
        },
        header: {'content-type':'application/x-www-form-urlencoded'},
        method: 'POST',
        dataType: 'json',
        responseType: 'text',
        success: (result)=>{
            console.log(result.data);
            if(result.data.error_code ==0){
                wx.showModal({
                  title: '提示',
                  content: '插入成功',
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

                setTimeout(() => {
                    wx.switchTab({
                      url: '/pages/job/job',
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
            content: '连接失败，请检查您的网络',
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