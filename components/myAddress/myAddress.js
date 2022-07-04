// components/myAddress/myAddress.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    userinfos: [
      {
      id: 1,
      username: "张三",
      phone: "12345671231",
      address: "某某省某某市某某县",
      realAddress: "某某地区",
      status: true
    },
     {
      id: 2,
      username: "李四",
      phone: "12345671212",
      address: `MEGASYSTEMS INC 799 E DRAGRAM SUITE 5ATUCSON, AZ 85705 USA`,
      realAddress: "某某地区",
      status: false
    }
  ],
    radio: 1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
      this.setData({
        radio: event.detail,
      });
    },
      // 编辑
    editBtn(e){
      console.log("edit",e);
    },
  // 删除
    deleteBtn(e){
      console.log("deleteBtn",e);
    },
    // 跳转新增页面
    addAddress(){
      wx.navigateTo({
        url: '/components/newAddress/newAddress',
      })
    }

  },

})
