// components/addAddress/addAddress.js
Component({

  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    addressInfo:{
      user:'张三',
      phone:19802220000,
      addressLoca:'广东省深圳市龙华观澜街道银星科技大厦'
    },
    takeGoods:{
      name:'',
      phone:0,
      address:'',
      city:'',
      postCode:0
    }
    
  },

  
  methods: {
    // 获取输入框的值
    getValue(e){
      console.log(e.detail.value);
    },
    btn(options){
      console.log(this.options.id);
    },
    // 一键复制
    copyInfo(){
      let _this = this;
      wx.setClipboardData({
        data: _this.data.addressInfo.user+_this.data.addressInfo.phone
        +_this.data.addressInfo.addressLoca,
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
