Page({

  data: {
    sele: {},
    userinfos: [{
        id: 1,
        username: "Zhangsan",
        phone: "16588880000",
        address: "Shenzhen, Guangdong Province",
        realAddress: "Longhua District",
        status: true,
        postcode: 283737,
        city: 'shenzhen'
      },
      {
        id: 2,
        username: "lisi",
        phone: "16788889999",
        address: `MEGASYSTEMS INC 799 E DRAGRAM SUITE 5ATUCSON, AZ 85705 USA`,
        realAddress: "Longhua District",
        status: false,
        postcode: 283737,
        city: 'shenzhen'
      },
      {
        id: 3,
        username: "wangwu",
        phone: "19788889999",
        address: `MEGASYSTEMS INC 799 E DRAGRAM SUITE 5ATUCSON, AZ 85705 USA`,
        realAddress: "shenz",
        status: false,
        postcode: 283737,
        city: 'shenzhen'
      }
    ],
    radio: 1
  },
  // 选中的地址
  seletedarea(e) {
    let msg = e.currentTarget.dataset.msg
    console.log(msg);
    wx.setStorageSync({
      key: 'selectarea',
      data: msg
    })
    var pages = getCurrentPages();
    var prevpage = pages[pages.length - 2]
    if(prevpage){
       prevpage.setData({
      selectarea: msg
    })
    }
   
    wx.navigateBack({
      delta: 1
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
      success(res) {
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