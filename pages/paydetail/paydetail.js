// pages/paydetail/paydetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checked:false
  },

  onChange(event) {
    this.setData({
      checked: event.detail,
    });
  },
  topay(){
    // 支付
    if(this.data.checked){
      console.log('ky');
    }else{
      wx.showToast({
        title: '请勾选同意',
        icon:'none'
      })
    }
  }
})