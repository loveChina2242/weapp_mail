// pages/myAddress/myAddress.js
Page({

 
  data: {
    userinfos: [{
      id: 1,
      username: "Zhangsan",
      phone: "16588880000",
      address: "Shenzhen, Guangdong Province",
      realAddress: "Longhua District",
      status: true
    },
    {
      id: 2,
      username: "李四",
      phone: "16788889999",
      address: `MEGASYSTEMS INC 799 E DRAGRAM SUITE 5ATUCSON, AZ 85705 USA`,
      realAddress: "Longhua District",
      status: false
    },
    {
      id: 3,
      username: "wangwu",
      phone: "12345671212",
      address: `MEGASYSTEMS INC 799 E DRAGRAM SUITE 5ATUCSON, AZ 85705 USA`,
      realAddress: "某某地区",
      status: false
    }
  ],
  radio: 1
  },
 // 选中的地址
 seletedarea(e){
  let msg = e.currentTarget.dataset.msg
  console.log(msg);
  wx.setStorageSync('selectarea', msg)
  wx.navigateTo({
    url: '/pages/addAddress/addAddress',
  })
},
onChange(event) {
  this.setData({
    radio: event.detail,
  });
},
// 编辑
editBtn(e) {
  console.log("edit", e);
},
// 删除
deleteBtn(e) {
  let _this = this;
  wx.showModal({
    // title: '提示',
    content: '确定删除吗？',
    success (res) {
      if (res.confirm) {
        let index = e.target.dataset.index; //下标
        let list = _this.data.userinfos;
        list.splice(index, 1)
        // console.log("删除后的",list);
        _this.setData({
          userinfos: list
        })
      } else if (res.cancel) {
        console.log('用户点击取消')
      }
    }
  })
 

},
// 跳转新增页面
addAddress() {
  wx.navigateTo({
    url: '/components/newAddress/newAddress',
  })
}


})