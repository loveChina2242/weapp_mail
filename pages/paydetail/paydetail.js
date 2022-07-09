// pages/paydetail/paydetail.js
Page({

  data: {
    checked: false, //同意条款
    disabled: true, //按钮禁用状态
    show: false, //弹出层
    showcounp:false,//优惠弹窗
    changecop:1,//优惠券选项
    select:0,//选中的优惠券
    coplist:[
      {name:1,price:2000,text:'红杉资本优惠券',desc:'14天后到期 · 指定课程可用'},
      {name:2,price:80,text:'红杉资本优惠券',desc:'14天后到期 · 指定课程可用'},
      {name:3,price:100,text:'双11优惠券',desc:'14天后到期 ·满688减100'},
      {name:4,price:99,text:'618优惠券',desc:'满200减0'},
    ]
  },
  // 确认使用
  confirmuser(){
   let changecop =  this.data.changecop
   console.log(changecop);
   let select=  this.data.coplist.filter(v=>v.name == changecop)[0].price
   this.setData({
     select:select,
     showcounp:false
   })
  },
  // 监听优惠券选择改变
  onSelect(e){
    let info = e.detail
    this.setData({
      changecop:info
    })
    // console.log(info,"info");
  },
  // 点击弹出优惠弹窗
  selectopen(){
    this.setData({
      showcounp:true
    })
  },
  // 关闭优惠弹窗
  closeCounp(){
    this.setData({
      showcounp:false
    });
  },
 
  // 点击阅读 弹出弹窗
  readbtn() {
    this.setData({
      show: true
    })
  },
  // 同意阅读 显示对应状态
  onClose() {
    this.setData({
      checked: true,
      show: false
    })
    if (this.data.checked) {
      this.setData({
        disabled: false
      })
    } else {
      this.setData({
        disabled: true
      })
      wx.showToast({
        title: '请勾选同意',
        icon: 'none'
      })
    }
  },
  // 复选框取消选择，按钮禁用
  onChange(e) {
    this.setData({
      checked: e.detail,
    })
    if (!this.data.checked) {
      this.setData({
        disabled: true
      })
    }
  },
  //  按钮支付
  onClickButton() {
    wx.requestPayment({
      timeStamp: '',
      nonceStr: '',
      package: '',
      signType: 'MD5',
      paySign: '',
      success(res) {
        console.log(res);
      },
      fail(res) {}
    })
  }
})