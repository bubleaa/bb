Page({
  data:{
    text:{}
  },
  onLoad:function(opt){
   var id= opt.id;
   var _this=this;
   this.getdata(id,function (par) {
     console.log(par);
     _this.setData({
       text:par
       
     })
   })
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
 getdata:function (arr,fun) {
   wx.request({
      url:'https://api.douban.com/v2/movie/subject/'+arr+'',
      header:{
        'content-type':'application'
        },
        method:"GET",
       success:function(dat){
          fun && fun(dat.data);
       } 

   })
 }
  ,
  tapC:function (eve) {
    console.log(eve);
    var id=eve.currentTarget.dataset.id;

    wx.navigateTo({
      url:'../yanyuan/yanyuan?id='+id,
    })
  }
})