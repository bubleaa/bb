Page({
  data:{
    text:"",
    doban:[],
     shou:{}
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
   console.log(this.data);
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

    wx.request({
      url:"https://api.douban.com/v2/movie/in_theaters",
      header:{
          'content-type': 'application'
      },
      method:"GET",
         
      success:function (dat) {
        console.log(dat.data);
        
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
  inputext:function (par) {
    console.log(par.detail.value);
    var txt=par.detail.value;
    this.setData({
                text:txt
           })
  },
 getshou:function () {
    var txt = this.data.text;
     var _this=this;
    wx.request({
      url:"https://api.douban.com/v2/movie/search?q="+txt,
      header:{
          'content-type': 'application'
      },
      method:"GET",
         
      success:function (dat) {
        console.log(dat.data);
        
        var da=dat.data.subjects;
         _this.setData({
                shou:da
           })
   
      }
    })
  }
})