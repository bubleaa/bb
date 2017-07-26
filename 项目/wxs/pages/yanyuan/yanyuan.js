Page({
  data:{
    texta:{}
  },
  onLoad:function(opt){
    // 页面初始化 options为页面跳转所带来的参数
    var id= opt.id;
   var _this=this;
   this.getdata(id,function (par) {
     console.log(par);
     console.log(1);
     _this.setData({
       texta:par
       
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
      url:'https://api.douban.com/v2/movie/celebrity/'+arr,
      header:{
        'content-type':'application'
        },
        method:"GET",
       success:function(dat){
          fun && fun(dat.data);
       } 

   })
 },
  tapA:function (eve) {
    console.log(eve);
    var id=eve.currentTarget.dataset.id;

    wx.navigateTo({
      url:'../aa/aa?id='+id
    })
  }
 
})