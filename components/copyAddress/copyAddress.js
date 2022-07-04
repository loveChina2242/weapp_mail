// components/copyAddress/copyAddress.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    addressMsg:{
        user:'张三',
        addressLoca:'广东省深圳市龙华观澜街道银星科技大厦',
        phone:18900002222,
        code:518000,
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  // 复制
    copyMsg(){
      let _this = this;
      wx.setClipboardData({
        data: _this.data.addressMsg.user+_this.data.addressMsg.phone
        +_this.data.addressMsg.addressLoca+_this.data.addressMsg.code,
        success (res) {
          wx.getClipboardData({
            success (res) {
              console.log(res.data) // data
            }
          })
        }
      })
    }



  }
})
