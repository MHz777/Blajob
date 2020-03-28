// pages/leavemsg/leavemsg.js
var app =  getApp();
var GoEasy = require('../../utils/goeasy-1.0.3');

Page({

  /**
   * 页面的初始数据
   */
  data: {
      inputVal:'',
      titletxt:'',
      company:'',
      
      msglist:[
        //   {avatarUrl:'https://i2.tiimg.com/712483/d64e51ef021981b6.png',
        //     val:'abc'
        // },
        // {avatarUrl:'https://i2.tiimg.com/712483/d64e51ef021981b6.png',
        // val:'abcasdadasdkasflkahfkajhfkajs'
        // },
        // {
        //   avatarUrl: 'https://i2.tiimg.com/712483/d64e51ef021981b6.png',
        //   val: 'abcasdadasdkasflkahfkajhfkajs'
        // }
      ]
  },
  //保存输入的内容
  saveInpt:function (e) { 
    var inputVal = e.detail.value;
    this.setData({
      inputVal:inputVal
    });
    
 },



  //发送按钮
  sendMsg:function(e){
    
    var that = this;
    var arr= that.data.msglist;
    var val = that.data.inputVal;

    //console.log(arr);
    arr.push(
      {
      avatarUrl:that.data.avatarUrl,
      val:val
    });

    that.setData({
      msglist:arr,
      inputVal:''
      
    })

    //发送消息
    getApp().globalData.goEasy.publish({
      channel: that.data.my_channel, //替换为您自己的channel
      message: val //替换为您想要发送的消息内容
  });
  
  //清空输入框的值
  this.setData({
    inputVal:''
  });
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //将上个页面传递的参数接收
    //console.log(options);
    var that = this;
    //获取发布者的用户id和已登陆用户的id和头像
    var user_id = app.globalData.user_id;
    var avatarUrl = app.globalData.avatarUrl;
    var boss_id =options.boss_id;
    
    //获取职位发布者的头像
    var reqTask = wx.request({
      url: 'http://localhost/blajob/index.php/Home/Lauch/find_avatarUrl',
      data: {
        user_id:boss_id
      },
      header: {'content-type':'application/x-www-form-urlencoded'},
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
          //console.log(result.data.data.avatarUrl);
          that.setData({
            boss_avatarUrl:result.data.data.avatarUrl
          })
      },
      fail: ()=>{},
      complete: ()=>{}
    });

    //将两用户的id拼接在一起，建立一个channel
    var my_channel = user_id + boss_id;
    console.log(user_id+'--'+avatarUrl+'---'+my_channel);
    
    that.setData({
      titletxt:options.jobname,
      company:options.company,
      avatarUrl:avatarUrl,
      my_channel:my_channel
    });
     //在onLaunch方法里初始化全局GoEasy对象
    app.globalData.goEasy = new GoEasy({
      host: "hangzhou.goeasy.io",//应用所在的区域地址，杭州：hangzhou.goeasy.io，新加坡：singapore.goeasy.io
      appkey: "BC-6d18f34eb4e8442696b94de2f7a322a4",//替换为您的应用appkey
      onConnected: function() {
          console.log('连接成功！')
      },
      onDisconnected: function() {
          console.log('连接断开！')
      },
      onConnectFailed: function(error) {
          console.log('连接失败或错误！')
      }
  });
    
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
    //订阅消息（接收）
    getApp().globalData.goEasy.subscribe({
      channel: this.data.my_channel,//替换为您自己的channel
      onMessage: function (message) {
          console.log("Channel:" + message.channel + " content:" + message.content);
      }
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