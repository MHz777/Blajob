// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //控制分类栏的隐藏和显示
    show:true,

    joblist:[
      // {
      //   jobname :"发传单",
      //   salary:"100元/天",
      //   address:"万达",
      //   date:"2020-02-02",
      //   company:"bulabulagongsi"
      // }
      
    
    ],


    mainActiveIndex: 0,
    activeId: null,

    items:[
      {
        // 导航名称
        text: '销售',
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '电话客服',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            disabled: false
          },
          {
            text: '超市销售',
            id: 2
          },
          {
            text: '门店导购',
            id: 3
          },
          {
            text: '传单分发',
            id: 4
          },
        
        ]
      },

      {
        // 导航名称
        text: '服务',
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '服务员',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            disabled: false
          },
          {
            text: '收银员',
            id: 2
          },
          {
            text: '物流兼职',
            id: 3
          },
          {
            text: '外卖兼职',
            id: 4
          },
          {
            text: '电商兼职',
            id: 5
          },
        ]
      },

      {
        // 导航名称
        text: '技术',
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '游戏测试',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
           
          },
          {
            text: '平面设计',
            id: 2
          },
          {
            // 名称
            text: '移动开发',
            // id，作为匹配选中状态的标识
            id: 3,
            // 禁用选项
           
          },
        
        ]
      },

      {
        // 导航名称
        text: '设计',
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '平面设计',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            disabled: false
          },
          {
            text: '广告设计',
            id: 2
          },
          {
            text: '广告策划',
            id: 3
          },
          {
            text: 'UI设计',
            id: 4
          },
        ]
      },

      {
        // 导航名称
        text: '教育',
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [
          {
            // 名称
            text: '辅导老师',
            // id，作为匹配选中状态的标识
            id: 1,
            // 禁用选项
            disabled: false
          },
          {
            text: '美术教师',
            id: 2
          },
          {
            text: '美术教师',
            id: 3
          },
          {
            text: '招生老师',
            id: 4
          },
        ]
      }
    ]


    
  },

  //输入框绑定搜索事件
  onSearch:function (e) {

      var that = this;
      //获取用户输入的值
      var userVal = e.detail;

      
      var reqTask = wx.request({
        url: 'http://localhost/treehole/index.php/Home/Job/search',
        data: {
          jobname:userVal
        },
        header: { 'content-type':'application/x-www-form-urlencoded'},
        method: 'POST',
        dataType: 'json',
        responseType: 'text',
        success: (result)=>{
          console.log(result.data.data);
          //将获取到的列表赋值给data
          var joblist = result.data.data;
            if(joblist){
              //如果返回的列表有值，将得到的列表渲染到前端
              that.setData({
                joblist: joblist,
                show:false
              })
            }
            else{
              //如果没用查询到值，将数组设置为空
              var joblist = [];
                that.setData({
                  joblist: joblist,
                  show:false
                })

              wx.showToast({
                title: '未查询到相关信息哦',
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
        fail: (res)=>{
          //console.log(res.data);
          wx.showToast({
            title: '未查询到相关信息哦',
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

      this.setData({
        
      })
   },

   onCancel:function (e) { 
    this.setData({
      show:true
    })
    },

   onClickNav({ detail = {} }) {
    this.setData({
      mainActiveIndex: detail.index || 0
    });
  },


  //点击nav下的item的事件{ detail = {} }
  onClickItem(e) {
    console.log(e.detail);
    var that = this;
    // const activeId = this.data.activeId === detail.id ? null : detail.id;
    // this.setData({ activeId });
    
    var itemVal = e.detail.text;
      //发送请求
      var reqTask = wx.request({
        url: 'http://localhost/treehole/index.php/Home/Job/search',
        data: {
          jobname:itemVal
        },
        header: { 'content-type':'application/x-www-form-urlencoded'},
        method: 'POST',
        dataType: 'json',
        responseType: 'text',

        success: (result)=>{
          console.log(result.data.data);
          //将获取到的列表赋值给data
          var joblist = result.data.data;
          that.setData({
            joblist: joblist,
            show:false
          })

          if(joblist){
            //如果返回的列表有值，将得到的列表渲染到前端
            that.setData({
              joblist: joblist,
              show:false
            })
          }
          else{
            //如果没用查询到值，将数组设置为空，即将之前赋值到页面的数组信息清空
            var joblist = [];
              that.setData({
                joblist: joblist,
                show:false
              })
            
            //弹出提示框
            wx.showToast({
              title: '未查询到相关信息哦',
              icon: 'none',
              image: '',
              duration: 1500,
              mask: false,
              success: (result)=>{
                
              },
              fail: ()=>{},
              complete: ()=>{
                //将隐藏的分类列表显示出来
                that.setData({
                  show:true
                })
              }
            });  
          }

        },
        fail: (res)=>{
          //console.log(res.data);
          wx.showToast({
            title: '未查询到相关信息哦',
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
        complete: ()=>{

         
        }
      });

      this.setData({
        
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