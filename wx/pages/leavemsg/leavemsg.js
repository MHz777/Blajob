// pages/leavemsg/leavemsg.js
  var app =  getApp();
  

Page({

  /**
   * 页面的初始数据
   */
  data: {
      inputVal:'',
      titletxt:'asdasd',
      company:'123',
      
      msglist:[
          {avatarUrl:'https://i2.tiimg.com/712483/d64e51ef021981b6.png',
            val:'abc'
        },
        {avatarUrl:'https://i2.tiimg.com/712483/d64e51ef021981b6.png',
        val:'abcasdadasdkasflkahfkajhfkajs'
        },
        {
          avatarUrl: 'https://i2.tiimg.com/712483/d64e51ef021981b6.png',
          val: 'abcasdadasdkasflkahfkajhfkajs'
        }
      ]
  },

  saveInpt:function (e) { 
    var inputVal = e.detail.value;
    this.setData({
      inputVal:inputVal
    });
    
 },

  sendMsg:function(e){
    var that = this;
    var arr= that.data.msglist;
    var val = that.data.inputVal
    console.log(arr)
    arr.push(
      {
      avatarUrl:'https://i2.tiimg.com/712483/d64e51ef021981b6.png',
      val:val
    })
    that.setData({
      msglist:arr
    })

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