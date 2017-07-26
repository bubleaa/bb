



Page({
  data:{
    text:""
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
    var skinDefault = 'http://img8.zol.com.cn/bbs/upload/22918/22917881.JPG';
    var skin = '';
     
      if(!wx.getStorage('skin')){
          wx.setStorage('skin',skinDefault) 
      }
    skin = wx.getStorageSync('skin');
      this.setData({
       
        text:skin
      })
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  
  taplishi:function (par) {
    wx.navigateTo({
   url:"../lishi/lishi"

    })
  },
  
  tapyao:function (par) {
    wx.navigateTo({
   url:"../yao/yao"

    })
  },
 gotoSkin(){
      wx.navigateTo({
          url:'../skin/skin'
      })
  },

})