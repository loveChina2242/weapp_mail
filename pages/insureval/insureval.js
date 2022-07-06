// pages/insureval/insureval.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checked: true,
    check: true,
  },
  onChange({ detail }) {
    // 需要手动对 checked 状态进行更新
    this.setData({ checked: detail });
  },
  onChange1({ detail }) {
    // 需要手动对 checked 状态进行更新
    this.setData({ check: detail });
  },
  gotonext(){
    if(!this.data.checked ){
      wx.showModal({
        title: '风险告知书',
        content: `
        尊敬的客户:
        您好，系统识别到您的订单未投保丢失保险，
  丢件的概率为万分之三，未购买丢失保险发生丢
  失的赔付原则为:退运费，按照实际货值赔付但不
  超过运费价值且最高不超过100美元。请悉知。`,
        success (res) {
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