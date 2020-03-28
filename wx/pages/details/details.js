// pages/details/details.js
var app =  getApp();
Page({

  /**
   * 页面的初始数据
   */

  
  data: {
    
    // jobname:"招聘",
    // salary:"100/day",
    // address:"万达",
    // date:"2020-02-02",
    // company:"公司",
    // phonenumber:"123456789",
    // jobDetail:"asdasdasd.askfnlaskvcnlasncas"
  },

  navigateHandle:function(e){
      //获取需要传递的参数
      var job_name = this.data.jobname;
      var boss_id = this.data.user_id;
      var company = this.data.company;

      wx.navigateTo({
        url: '../leavemsg/leavemsg?jobname='+job_name + '&boss_id='+boss_id +'&company='+company,
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
      //获取跳转前页面传递的参数index
      //console.log(options);
      //获取全局变量中存储的列表，并使用索引取出相对应的数组。
      var jobContent = app.globalData.jobList[options.index];
      console.log(jobContent);
      //将发布信息用户的user_id保存在data中
      var user_id = jobContent.user_id;

      //发送请求到接口查询，所对应的电话号码
      var reqTask = wx.request({
        url: 'http://localhost/treehole/index.php/Home/Lauch/select_phonenum',
        data: {
          user_id:jobContent.user_id
        },
        header: {'content-type':'application/x-www-form-urlencoded'},
        method: 'POST',
        dataType: 'json',
        responseType: 'text',
        success: (result)=>{
            //console.log(result.data.data);
            that.setData({
              phonenumber:result.data.data.phonenumber
            })
        },
        fail: ()=>{},
        complete: ()=>{}
      });

      //将所获取相对应数组中的信息取出并set到前台
      this.setData({
        user_id:user_id,
        jobname:jobContent.job_name,
        username:jobContent.username,
        salary:jobContent.salary,
        address:jobContent.address,
        date:jobContent.date,
        company:jobContent.company,
        jobDetail:jobContent.jobdetail
        
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
