// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderData:[
      { id:1,title:'待付款',icon:'/assets/images/waitpay.png',url:'/pages/order/order' },
      { id:2,title:'待发货',icon:'/assets/images/fahuo.png',url:'/pages/order/order' },
      { id:3,title:'待收货',icon:'/assets/images/shouhuo.png',url:'/pages/order/order'},
      { id:4,title:'待评价',icon:'/assets/images/pingjia.png',url:'/pages/order/order'},
    ],
    info:[
      {id:1,title:"我的地址",url:'/components/myAddress/myAddress',urlType:'navigateTo'},
      {id:2,title:"我的优惠券",url:'/pages/coupon/coupon',urlType:'switchTab'},
      {id:3,title:"活动中心",url:'',urlType:'navigateTo'},
      {id:4,title:"联系客服",url:'',urlType:'navigateTo'},
      {id:5,title:"转运流程",url:'',urlType:'navigateTo'},
      {id:6,title:"转运须知",url:'',urlType:'navigateTo'},
      {id:7,title:"关于我们",url:'',urlType:'navigateTo'},
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})