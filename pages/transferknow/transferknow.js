Page({
  data: {
    msg: "",
    disabled: true,
    nextTime: 0,
    checked: false,
    status: ''
  },
  onChange(e) {
    this.setData({
      checked: e.detail,
    });
    console.log(this.data.checked);
  },
  knowsee() {
    this.setData({
      disabled: false
    })
  },
  timeout(){
    let _this = this;
    let num = 8
      _this.setData({
        msg: num + 's',
        disabled: true
      })
    let timer = setInterval(() => {
      num--;
      if (num <= 0) {
        clearInterval(timer)
        _this.setData({
          disabled: false,
          msg: '我已悉知',
        })
      } else {
        _this.setData({
          disabled: true,
          msg: num + "s"
        })
      }
    }, 1000)
  },
  onShow() {
    let _this = this;
    let status = _this.options.status
    console.log(status);
    if (status) {
      _this.setData({
        status: status
      })
      return
    } else{
      _this.timeout()
    }
      // let num = 8
      // _this.setData({
      //   msg: num + 's',
      //   disabled: true
      // })
      // let timer = setInterval(() => {
      //   num--;
      //   if (num <= 0) {
      //     clearInterval(timer)
      //     _this.setData({
      //       disabled: false,
      //       msg: '我已悉知',
      //     })

      //   } else {
      //     _this.setData({
      //       disabled: true,
      //       msg: num + "s"
      //     })
      //   }
      // }, 1000)
    


  },
  nextStepTap() {
    if (!this.data.checked) {
      wx.showToast({
        title: '请勾选',
        icon: 'none'
      })
      return
    }
    wx.navigateTo({
      url: '/pages/orderdetail/orderdetail',
    })
  }


})