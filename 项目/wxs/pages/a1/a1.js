Page({
  data:{
    text:"",
    doban:{},
    inde:20
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
var _this=this;
 var index= this.data.inde;
      this.getdian(index, function(res){
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
  boot:function (para) {
   var index= this.data.inde+20;
      var _this=this;
     
      this.getdian(index, function(res){
         
           res=_this.data.doban.concat(res);
           _this.setData({
                 doban:res,
                 inde:index
            })
        });

  },
  getdian:function (aa,bb) {
    wx.showLoading({
      title:"数据正在加载中"
    });

   

    wx.request({
      url:"https://api.douban.com/v2/movie/coming_soon",
      header:{
          'content-type': 'application'
      },
      method:"GET",
        data:{
         start:aa
       } , 
      success:function (dat) {
        console.log(dat.data);
        wx.hideLoading();
        var da=dat.data.subjects;
        bb && bb(da);
   
      }
    })
  },tapA:function (eve) {
    console.log(eve);
    var id=eve.currentTarget.dataset.id;

    wx.navigateTo({
      url:'../aa/aa?id='+id
    })
  }
})