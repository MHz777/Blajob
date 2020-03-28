// pages/resume/resume.js
var app =  getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl:'',
    username:'',
    gender:'',
    professional:'',
    grade:'',
    college:'',
    age:''
  },

  //提交按钮事件
  saveHandle:function (e) {
    if(!app.globalData.user_id){
      wx.showToast({
        title: '请您登陆',
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
 
    else if(!this.data.username){
      wx.showToast({
        title: '请您登陆',
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
    else if(!this.data.gender){
        wx.showToast({
          title: '请输入性别',
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
    else if(!this.data.age){
      wx.showToast({
        title: '请输入年龄',
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
    else if(!this.data.college){
      wx.showToast({
        title: '请输入学校',
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
    else if(!this.data.grade){
      wx.showToast({
        title: '请输入年级',
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
  else if(!this.data.professional){
    wx.showToast({
      title: '请输入专业',
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
  else{ 
        var reqTask = wx.request({
          url: 'http://localhost/treehole/index.php/Home/User/user_info',
          data: {
            user_id:app.globalData.user_id,
            username:this.data.username,
            age:this.data.age,
            gender:this.data.gender,
            grade:this.data.grade,
            college:this.data.college,
            professional:this.data.professional
          },
          header: {'content-type':'application/x-www-form-urlencoded'},
          method: 'POST',
          dataType: 'json',
          responseType: 'text',
          success: (result)=>{
              console.log(result.data.data);


              if(result.data.error_code ==0){
                    wx.showToast({
                      title: '保存成功！',
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
          fail: ()=>{},
          complete: ()=>{}
        });

        //延时跳转
        setTimeout(() => {
          wx.navigateBack({
            delta: 1
          });
        }, 1500);
     
  }

   },
   
   genderInput:function(e){
        this.setData({
          gender:e.detail
        })
   },
   ageInput:function(e){
        this.setData({
          age:e.detail
        })
   },
   collegeInput:function(e){
        this.setData({
          college:e.detail
        })
   },
   gradeInput:function(e){
        this.setData({
          grade:e.detail
        })
   },
   professionalInput:function(e){
        this.setData({
          professional:e.detail
        })
   },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      
      this.setData({
        username:app.globalData.username,
        avatarUrl: app.globalData.avatarUrl,
        gender:app.globalData.gender
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
      var that = this;
      var reqTask = wx.request({
        url: 'http://localhost/treehole/index.php/Home/Lauch/saved_info',
        data: {
          user_id:app.globalData.user_id,
          username:app.globalData.username
        },
        header: {'content-type':'application/x-www-form-urlencoded'},
        method: 'POST',
        dataType: 'json',
        responseType: 'text',
        success: (result)=>{
              console.log(result);
              that.setData({
                gender:result.data.gender,
                age:result.data.age,
                college:result.data.college,
                grade:result.data.grade,
                professional:result.data.professional,
                
                
              })
        },
        fail: ()=>{},
        complete: ()=>{}
      });
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