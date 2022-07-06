// pages/getcoupons/getcoupons.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:'',
    ishave:true
  },
  getcoupon(){
    this.setData({
      ishave:false
    })
    wx.showToast({
      title: '领取成功',
      icon:'none'
    })
    return
  }
  
})