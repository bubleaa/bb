Page({
  data: {
    text: "Page yao"
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数


  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  yao: function (par) {
    wx.startAccelerometer({
      success: function () {
        var a = 0, b = ''


        wx.onAccelerometerChange(function (res) {
          if (b != res.x) {
            b = res.x
            console.log(++a);
          }
          if (a % 30 == 0) {
            wx.vibrateLong();
          }
        })
      }

    })

  },
  tin: function (par) {

  }

})