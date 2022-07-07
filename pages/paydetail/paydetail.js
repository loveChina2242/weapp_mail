// pages/paydetail/paydetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checked:false,//同意条款
    disabled:true,//按钮禁用状态
    show: false,//弹出层
  },

  onClose(){
    // 关闭遮罩层
    this.setData({
      show: false,
      disabled:false
  })
  },
  onChange(event) {
    this.setData({
      checked: event.detail,
    });
     if(this.data.checked){
      this.setData({
          show: true 
      })
    }else{
      this.setData({
        disabled:true,
        show:false
    })
      wx.showToast({
        title: '请勾选同意',
        icon:'none'
      })
    }
  },
  onClickButton(){
    // 支付
    wx.requestPayment({
      timeStamp: '',
      nonceStr: '',
      package: '',
      signType: 'MD5',
      paySign: '',
      success (res) { 
        console.log(res);
      },
      fail (res) { }
    })
  }
})