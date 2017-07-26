// pages/skin/skin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      skin:[
        {
          images:'http://ww2.sinaimg.cn/wap720/acf304a9gw1f5o9rdgu0pj218g0qoake.jpg',
          name:'大雨海棠'
        },
        {
          images:'http://www.wallcoo.com/animal/Dogs_Summer_and_Winter/wallpapers/1920x1200/DogsB10_Lucy.jpg',
          name:'宠物'
        },
        {
          images:'http://img8.zol.com.cn/bbs/upload/22918/22917881.JPG',
          name:'模特'
        }
      ],
      activeIndex:0
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

    var skin = wx.getStorageSync('skin');

    var skinList = this.data.skin;

    var self = this;

    if(skin){
      skinList.forEach(function(item,index){
        if(skin == item.images){
            self.setData({
                activeIndex:index
            })
        }
      })
    }
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
  
  },
  setSkin(e){

    var zIndex = e.currentTarget.dataset.index,
        images = e.currentTarget.dataset.skin;

    this.setData({
      activeIndex:zIndex
    })
    
    wx.setStorageSync('skin',images);

  }
})