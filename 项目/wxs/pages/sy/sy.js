Page({
  data:{
     imgs:[
       {imgsrc:"http://p0.so.qhimgs1.com/sdr/1587_1080_/t014ee8509d34bb9410.jpg",
        inde:"1"
        },
       {
         imgsrc:"http://p5.so.qhimgs1.com/t01f24ad7f71c008e0b.jpg",
        inde:"2"
        },
       {
         imgsrc:"http://p4.so.qhimgs1.com/t01db2ab49660dbe41a.jpg",
        inde:"3"
        }
     ],
     doban:[]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
   var _this=this;
       this.getdian(function(res){
             _this.setData({
                  doban:res
             })
        });
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  getdian:function (aa) {
    wx.showLoading({
      title:"数据正在加载中"
    });

   

    wx.request({
      url:"https://api.douban.com/v2/movie/in_theaters",
      header:{
          'content-type': 'application'
      },
      method:"GET",
         
      success:function (dat) {
        console.log(dat.data);
        wx.hideLoading();
        var da=dat.data.subjects;
        aa && aa(da);
   
      }
    })
  },
  tapA:function (eve) {
    console.log(eve);
    var id=eve.currentTarget.dataset.id;

    wx.navigateTo({
      url:'../aa/aa?id='+id
    })
  },
  tapB:function (eve) {
    console.log(eve);
 
    wx.navigateTo({
      url:'../shou/shou',
    })
  }
})