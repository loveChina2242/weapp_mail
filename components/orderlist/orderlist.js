// components/orderlist/orderlist.js
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    copyMsg(){
      let _this = this;
      wx.setClipboardData({
        data: "data",
        success (res) {
          wx.getClipboardData({
            success (res) {
              console.log(res.data) // data
            }
          })
        }
      })
    },
    // quxiao
    cancel(e){
      console.log("cancel");
    },
    // 
    confirm(){
      console.log('confirm');
    }
  }
})
