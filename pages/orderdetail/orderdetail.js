// pages/orderdetail/orderdetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    numvalue: 0,
    errmsg: '',
    show: false,
    value:''
  },

  onblur(e) {
    console.log(e.detail);
    let val = parseInt(e.detail.value);
    console.log(val);
    // console.log(typeof(val) == "number");
    if (typeof (val) === "number") {

      this.setData({
        numvalue: val,
        show: true
      })
      console.log("val", val);
    } else {
      console.log('err');
      // this.setData({
      //   errmsg:'请按正确格式填写，如数字123'
      // })
    }

  },
  // 删除
  deleteinfo(e) {
    let _this = this;
    let index = e.currentTarget.dataset.id;
    console.log(index);
    // 删除时询问，
    wx.showModal({
      title: '提示',
      content: '是否移除一个快递？',
      success(res) {
        if (res.confirm) {
          // console.log('用户点击确定')
          _this.setData({
            numvalue: _this.data.numvalue - 1
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })




  },
  // 添加
  addinfo() {
    let _this = this;
    wx.showModal({
      title: '提示',
      content: '是否增加一个快递？',
      success(res) {
        if (res.confirm) {
          _this.setData({
            numvalue: _this.data.numvalue + 1
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }

      }

    })
  },
  // tianxie
  onblueorder(e){
    
    console.log(e.detail.value);//订单号
    // console.log(e.dataset.order);//下标
  }
})