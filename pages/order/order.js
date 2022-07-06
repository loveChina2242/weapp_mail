// pages/order/order.js
Page({

  data: {
    active:0,
    listdata:[
      {id:1,setout:"中国",target:'加拿大',stauts:0,text:'待填写'},
      {id:2,setout:"中国",target:'英国',stauts:1,text:'待支付'},
      {id:3,setout:"中国",target:'法国',stauts:2,text:'确认打包'},
      {id:4,setout:"中国",target:'印度',stauts:3,text:'已完成'},
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