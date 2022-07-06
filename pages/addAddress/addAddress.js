// pages/addAddress/addAddress.js
Page({

  data: {
    addressInfo:{
      user:'张三',
      phone:19802220000,
      addressLoca:'广东省深圳市龙华观澜街道银星科技大厦'
    },
    Info: {
      name: '',
      phone:'',
      address: '',
      city: '',
      postcode: '',
   
    },
    errmsg: '',
    errmsg2: '',
    errmsg3: '',
    errmsg4: '',
    errmsg5: '',
  },

   // 提交
   commitAddress() {
    if(Object.values(this.data.Info)){
      console.log(Object.values(this.data.Info));
    let temp =   Object.values(this.data.Info).every((item,index)=>{
        return item !== ''
      })
      if(!temp){
        wx.showToast({
          title: '请填写完整信息哦~',
          icon:'none'
        })
        return 
      }else{
        wx.navigateTo({
          url: '/pages/transferknow/transferknow',
        })
      }
    }
  // console.log(Object.values(this.data.Info));  

  },
  // 获取输入框
  getValue(e) {
    let name = e.detail
  
    let _this = this;
    let Reg = /^[a-zA-Z]{2,8}$/; //匹配拼音及英文
    if (name) {
      if (!Reg.test(name)) {
        _this.setData({
          errmsg: "请输入正确格式"
        })
        return
      } else {
        _this.setData({
          errmsg: "",
          'Info.name':name
        })
      }
    } else {
      _this.setData({
        errmsg: "不能为空"
      })
    }
  },
  // phone
  getPhone(e) {
    let phone = e.detail
 
    let _this = this;
    let Reg = /^1[3-9][0-9]{9}$/; //数字
    if (phone) {
      if (!Reg.test(phone)) {
        _this.setData({
          errmsg2: "请输入正确格式"
        })
        return
      } else {
        _this.setData({
          errmsg2: "",
          'Info.phone':phone
        })
      }
    } else {
      _this.setData({
        errmsg2: "不能为空"
      })
    }
  },

  // dizhi
  getaddress(e){
    let name = e.detail
  
    let _this = this;
    let Reg = /^[a-zA-Z]/; //匹配拼音及英文
    if (name) {
      if (!Reg.test(name)) {
        _this.setData({
          errmsg3: "请输入正确格式",
          
        })
        return
      } else {
        _this.setData({
          errmsg3: "",
          "Info.address":name
        })
      }
    } else {
      _this.setData({
        errmsg3: "不能为空"
      })
    }
  },
  getcity(e){
    let city = e.detail

    let _this = this;
    let Reg = /^[a-zA-Z]/; //匹配拼音及英文
    if (city) {
      if (!Reg.test(city)) {
        _this.setData({
          errmsg4: "请输入正确格式",
         
        })
        return
      } else {
        _this.setData({
          errmsg4: "",
          "Info.city":city
        })
      }
    } else {
      _this.setData({
        errmsg4: "不能为空"
      })
    }
  },
  getcode(e){
    let postcode = e.detail
  
    let _this = this;
    let Reg = /^[1-9]\d{5}$/g; //匹配拼音及英文
    if (postcode) {
      if (!Reg.test(postcode)) {
        _this.setData({
          errmsg5: "请输入正确格式",
      
        })
        return
      } else {
        _this.setData({
          errmsg5: "",
          "Info.postcode":postcode
        })
      }
    } else {
      _this.setData({
        errmsg5: "不能为空"
      })
    }
  },




    btn(options){
      console.log(this.options.id);
    },
    // 一键复制
    copyInfo(){
      let _this = this;
      wx.setClipboardData({
        data: _this.data.addressInfo.user+_this.data.addressInfo.phone
        +_this.data.addressInfo.addressLoca,
        success (res) {
          wx.getClipboardData({
            success (res) {
              console.log(res.data) // data
            }
          })
        }
      })
    }

  
})