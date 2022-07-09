Page({
  data: {
    value: '',
    checked: true,
    check: true,
    customs: 0,
    lossfree: 0
  },


  // 状态改变时，调用方法，计算价格
  changeless({detail}) {
    this.setData({ checked: detail});
      this.coutless()   
    console.log('checked', this.data.checked);
  },
  onChange1({ detail}) {
    this.setData({ check: detail});
      this.countCustoms()
    console.log('check',this.data.check);
  },

  coutless() {
    if (!this.data.checked) {
      this.setData({lossfree: 0})
        return
    }
    let lossfree = this.data.value * 0.03
    this.setData({
      lossfree: lossfree, //丢失险
    })
  },

  countCustoms() {
    if (!this.data.check) {
      this.setData({
        customs: 0
      })
      return
    } 
    let customs = this.data.value * 0.02
    this.setData({
      customs: customs, //关税险
    })
  },

  onblur(e) {
    let value = e.detail.value
    if (Number(value)) {
      this.setData({
        value: value
      })
      this.coutless()
      this.countCustoms()
    } else {
      wx.showToast({
        title: '请填写正确价格，如100',
      })
    }
  },

  gotonext() {
    if (!this.data.checked) {
      wx.showModal({
        title: '风险告知书',
        content: `
        尊敬的客户:
        您好，系统识别到您的订单未投保丢失保险，
  丢件的概率为万分之三，未购买丢失保险发生丢
  失的赔付原则为:退运费，按照实际货值赔付但不
  超过运费价值且最高不超过100美元。请悉知。`,
        success(res) {
          if (res.confirm) {
            console.log('购买保险')
          } else if (res.cancel) {
            console.log('承担风险')
          }
        }
      })

    }
  }
})