// pages/plIndex/plIndex.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:['','','','','','','','','','','','','','','','','','','','','','','','','']
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
  onShow(){
    wx.hideTabBar({
      success: function () {
        app.onTabBar('plan');
      }
    })
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
  noDealWithFn: function(_value){
    let _this = this, 
    _v = _value.currentTarget.dataset,
    w = wx.getSystemInfoSync().windowWidth;;
     if(parseInt(_v.status)){
      _this.setData({
        yesAnimationName: "show",
        noAnimationName: "hide",
        transformWidth: w,
        sliderWidth:w,
        sliderLeft:-w
      })
    }else{
      _this.setData({
        yesAnimationName:"hide",
        noAnimationName: "show",
        transformWidth: w/2,
        sliderWidth:w,
        sliderLeft:0
      })
    }
  }
})