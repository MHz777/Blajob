// pages/collect/collect.js
var app =  getApp();

Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    collectNum:1,

    myColection:[
      // {
      //   job_name:1321,
      //   salary:123,
      //   address:'asdsadad',
      //   company:''
      // }
    ]
  },

  //删除此条信息
  deleteHandle:function(e){
      var that = this;
      //测试获取所点击按钮的index
      //console.log(e.currentTarget.dataset.index);

      //获取我发布的兼职列表
      var myjoblist = that.data.myColection;
      
      
      //发送请求
      var reqTask = wx.request({
        url: 'http://localhost/treehole/index.php/Home/User/deleteJob',
        data: {
          id:myjoblist[e.currentTarget.dataset.index].id,
          user_id:myjoblist[e.currentTarget.dataset.index].user_id
        },
        header: {'content-type':'application/x-www-form-urlencoded'},
        method: 'POST',
        dataType: 'json',
        responseType: 'text',
        success: (result)=>{
            console.log(result);
            //如果返回的error_code为0，则删除成功
            if(result.data.error_code ==0){
                  wx.showToast({
                    title: '删除成功',
                    icon: 'none',
                    image: '',
                    duration: 1500,
                    mask: false,
                    success: (result)=>{
                      
                    },
                    fail: ()=>{},
                    complete: ()=>{}
                  });

                  //将返回的列表设置回前台
                  that.setData({
                    myColection:result.data.data
                  })
            }
        },
        fail: ()=>{},
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
      var that = this;
      //发送请求
      var reqTask = wx.request({
        url: 'http://localhost/treehole/index.php/Home/Lauch/published_job',
        data: {
          user_id:app.globalData.user_id,
          username:app.globalData.username
        },
        header: {'content-type':'application/x-www-form-urlencoded'},
        method: 'POST',
        dataType: 'json',
        responseType: 'text',
        success: (result)=>{
            console.log(result.data);

            if (result.data.error_code == 1) {
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
            if (result.data.error_code == 0) {
                //console.log(result.data.data);
                that.setData({
                  myColection:result.data.data
                })
          }
        },
        fail: ()=>{
            wx.showToast({
              title: '连接失败，请检查网络',
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