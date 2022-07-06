// components/orderlist/orderlist.js
Component({
 
  properties: {
    listdata:Object
  },
  
  data: {

  },


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
  
  }
})
