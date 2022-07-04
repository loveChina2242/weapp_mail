// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderData:[
      { id:1,title:'待付款',icon:'/assets/images/waitpay.png',url:'' },
      { id:2,title:'待发货',icon:'/assets/images/fahuo.png',url:'' },
      { id:3,title:'待收货',icon:'/assets/images/shouhuo.png',url:''},
      { id:4,title:'待评价',icon:'/assets/images/pingjia.png',url:''},
    ],
    info:[
      {id:1,title:"我的地址",url:''},
      {id:2,title:"我的优惠券",url:''},
      {id:3,title:"活动中心",url:''},
      {id:4,title:"联系客服",url:''},
      {id:5,title:"转运流程",url:''},
      {id:6,title:"转运须知",url:''},
      {id:7,title:"关于我们",url:''},
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