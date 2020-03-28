//定义全局变量，将城市信息储存在里面
var app =  getApp();

// 引用百度地图微信小程序JSAPI模块 
var bmap = require('../../utils/bmap-wx.js'); 
var wxMarkerData = []; 
Page({ 
    data: { 
        markers: [], 
        latitude: '', 
        longitude: '', 
        rgcData: {} ,
        city:""
    },


    submit:function (e) { 
        //console.log(this.data.city);
        app.globalData.City = this.data.city;
        //console.log(app.globalData.City);
        
        //测试获取城市功能
        //console.log(this.data.markers[0].address);
        // var addr = this.data.markers[0].address;
        // console.log(addr);
        // var province =addr.indexOf('省') + 1;
        // var city = addr.substring(province,addr.indexOf('市'));
        // console.log(city);
        // City = city;
        // this.setData({
        //   city:city
        // })
        
        //跳转到job页面
        wx.navigateBack({
            delta: 1,
            success: (result)=>{
                
            },
            fail: ()=>{
                wx.switchTab({
                    url: '/pages/job/job',
                    success: (result)=>{
                        
                    },
                    fail: ()=>{},
                    complete: ()=>{}
                });
            },
            complete: ()=>{}
        });
        
        
     },
     
    // makertap: function(e) { 
    //     var that = this; 
    //     var id = e.markerId; 
    //     that.showSearchInfo(wxMarkerData, id); 

    // }, 

    onLoad: function() { 
        var that = this; 
        // 新建百度地图对象 
        var BMap = new bmap.BMapWX({ 
            ak: 'yBkcFGYgH5Dni4PhbYDsKo8bbRVFfdMa' 
        }); 
        var fail = function(data) { 
            console.log(data);
            
            wx.showToast({
                title: '请点击右上角设置赋予位置权限哦',
                icon: 'none',
                image: '',
                duration: 1500,
                mask: false,
                success: (result)=>{
                  
                },
                fail: ()=>{},
                complete: ()=>{}
              });  
        }; 
        var success = function(data) {

            wxMarkerData = data.wxMarkerData;
            var addr = wxMarkerData[0].address;
            var province =addr.indexOf('省') + 1;
            var city = addr.substring(province,addr.indexOf('市'));
            //console.log(city);
            
             
            that.setData({ 
                markers: wxMarkerData 
            }); 
            that.setData({ 
                latitude: wxMarkerData[0].latitude 
            }); 
            that.setData({ 
                longitude: wxMarkerData[0].longitude,
                city:city 
            }); 
        } 
        // 发起regeocoding检索请求 
        BMap.regeocoding({ 
            fail: fail, 
            success: success
        }); 

        
    },
    


    // showSearchInfo: function(data, i) { 
    //     var that = this; 
    //     that.setData({ 
    //         rgcData: { 
    //             address: '地址：' + data[i].address + '\n', 
    //             desc: '描述：' + data[i].desc + '\n', 
    //             business: '商圈：' + data[i].business 
    //         } 
    //     }); 
    // } 

})
