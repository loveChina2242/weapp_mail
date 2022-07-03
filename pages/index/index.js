// pages/coupon/coupon.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperImg:[
      {index:1,img:'../../assets/images/轮播图.png'},
      {index:2,img:'../../assets/images/轮播图.png'},
    ],
    show: false,
    btnMsg:[
      {id:1,text:"普通货物"},
      {id:2,text:"电子产品"},
      {id:3,text:"液体粉末"},
      {id:4,text:"内地EMS"},
      {id:5,text:"广东EMS"},
    ]
  },
// 立即转运
goTransfer(){
  this.setData({ 
    show: true 
  });
},
onClose() {
  this.setData({ 
    show: false
   });
},
closeSelect(){
  this.setData({ show: false });
},
// 下一步
goAddress(){
  
}
})