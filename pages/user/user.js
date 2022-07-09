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
      {id:1,title:"我的地址",url:'/pages/myAddress/myAddress',urlType:'navigateTo'},
      {id:2,title:"我的优惠券",url:'/pages/coupon/coupon',urlType:'switchTab'},
      {id:3,title:"活动中心",url:'/pages/activecenter/activecenter',urlType:'navigateTo'},
      {id:4,title:"联系客服",url:'',urlType:'navigateTo'},
      {id:5,title:"转运流程",url:'/pages/transferprocess/transferprocess?status=0',urlType:'navigateTo'},
      {id:6,title:"转运须知",url:'/pages/transferknow/transferknow?status=0',urlType:'navigateTo'},
      {id:7,title:"关于我们",url:'',urlType:'navigateTo'},
    ]
  },

  handleContact (e) {
    console.log(e.detail.path)
    console.log(e.detail.query)
}
})
