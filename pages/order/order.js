// pages/order/order.js
Page({

  data: {
    active:0,
    listdata:[
      {id:1,setout:"中国",target:'加拿大',stauts:0,text:'待处理'},
      {id:2,setout:"中国",target:'英国',stauts:1,text:'待入仓'},
      {id:3,setout:"中国",target:'法国',stauts:2,text:'待捡货'},
      {id:4,setout:"中国",target:'印度',stauts:3,text:'待打包'},
      {id:4,setout:"中国",target:'美国',stauts:4,text:'待出仓'},
      {id:4,setout:"中国",target:'英国',stauts:5,text:'已出仓'},
      {id:4,setout:"中国",target:'阿富汗',stauts:6,text:'有异常'},
    ],
    listdata1:[
      {id:2,setout:"中国",target:'英国',stauts:1,text:'待支付'},

    ],
    listdata2:[
      {id:2,setout:"中国",target:'英国',stauts:3,text:'已完成'},
      {id:3,setout:"中国",target:'美国',stauts:2,text:'确认打包'},
      {id:4,setout:"中国",target:'阿富汗',stauts:3,text:'已完成'},
    ],
    listdata3:[
      {id:3,setout:"中国",target:'法国',stauts:2,text:'确认打包'},
      {id:4,setout:"中国",target:'印度',stauts:3,text:'已完成'},
    ],
  },

})