Page({
  // 回显新增地址
  onShow() {
    let data = wx.getStorageSync('newarea')
    if (data) {
      this.setData({
        userinfos: data
      })
    }
  },

  data: {
    sele: {},
    newarea: [],
    userinfos: [],
    radio: true
  },
  // 选中的地址
  seletedarea(e) {
    let msg = e.currentTarget.dataset.msg
    console.log(msg);
    wx.setStorageSync({
      key: 'selectarea',
      data: msg
    })
    // 跳转携带选中地址回显
    var pages = getCurrentPages();
    var prevpage = pages[pages.length - 2]
    if (prevpage) {
      prevpage.setData({
        selectarea: msg
      })
    }

    wx.navigateBack({
      delta: 1
    })
  },
  // onShow(){
  //   if(this.data.userinfos){
  //   //   let a =  this.data.userinfos.filter(v=>v.checked == true).splice(-1)[0]
  //   }
  // },

  onChange(e) {
    this.setData({
      radio: e.detail,
    });
    // let radio = this.data.radio
    // this.data.userinfos.map(item => item.checked = false)
    // this.data.userinfos[e.detail].checked = true
    // console.log(this.data.userinfos)
   
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
      url: '/pages/newAddress/newAddress',
    })
  }


})