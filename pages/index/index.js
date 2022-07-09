// pages/coupon/coupon.js
Page({
  onShow(){
   let count =  wx.getStorageSync('country')
    this.setData({
      count:count
    })
  },
  data: {
    count:'',
    swiperImg:[
      {index:1,img:'../../assets/images/轮播图.png'},
      {index:2,img:'../../assets/images/轮播图.png'},
      {index:3,img:'../../assets/images/轮播图.png'},
      
    ],
    show: false,
    btnMsg:[
      {id:1,text:"普通货物"},
      {id:2,text:"电子产品"},
      {id:3,text:"液体粉末"},
      {id:4,text:"内地EMS"},
      {id:5,text:"广东EMS"},
    ],
    selecBtn:[]
  },

// 选择国家
goselet(){
  wx.navigateTo({
    url: '/pages/countrysearch/countrysearch',
  })
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
  let _this = this; 
  console.log(this.data.selecBtn);
  // if( _this.data.selecBtn === ''){
  //   return 
  // }
    wx.navigateTo({
      url: '/pages/addAddress/addAddress?id='+
      _this.data.selecBtn,
    })
},
// 预选渠道
selecBtn(e){
  this.setData({
    selecBtn:e.target.dataset.index
  })
  console.log(this.data.selecBtn);
}
})