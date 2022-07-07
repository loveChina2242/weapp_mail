
Page({
data: {
  numvalue: [],
  errmsg: '',
  show: false,
  value: '',
  orderlist: [],
  arr: [],
  disabled:false
},
// 快递个数
onblur(e) {
  let val = Number(e.detail.value)
  if (typeof (val) === "number" && val < 10) {
    this.setinput(val)
    this.setData({
      show:true,
      numvalue:val,
      disabled:true
    })
  } else {
    this.setData({
      errmsg: '请按正确格式填写',
    })
  }
},
cancelorder(){
  wx.showModal({
    title: '是否取消订单',
    content: `取消订单后，订单将不能进行后续操作
    是否要继续？`,
    success (res) {
      if (res.confirm) {
        console.log('用户点击确定')
      } else if (res.cancel) {
        console.log('用户点击取消')
      }
    }
  })

},

//根据个数 创建对应的input
setinput(num){
  for (let i = 0; i < num; i++) {
    this.data.arr.push({
      status:0,
      value: '',
      id: i,
      disabled:false,
    })
    console.log("arr", this.data.arr);
  }
},

//单号
onblueorder(e) {
  let _this = this;
  let val = e.detail.value //订单号
  let k = e.target.dataset.order //下标
  if (val) {
    wx.showModal({
      title: '提示',
      content: `请确认快递单号${val}是否无误，
        一旦提交，不可修改。`,
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
         let arr = _this.data.arr 
     arr.filter(item=>{
        if(item.id == k){
          item.status = 1,
          item.value = val,
          item.disabled = true
          return item
        }
      })
      _this.setData({
        arr:_this.data.arr
      })
      console.log("arr",_this.data.arr);
      
  } else if (res.cancel) {
    console.log('用户点击取消')
  }
}
})
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
          numvalue: _this.data.numvalue + 1,
        })
      } else if (res.cancel) {
        console.log('用户点击取消')
      }
    }
  })
},
})