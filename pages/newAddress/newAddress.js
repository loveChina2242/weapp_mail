import {
  areaList
} from '../../miniprogram/miniprogram_npm/@vant/area-data/index';
Page({

  data: {
    show: false, //弹出层
    areaList,
    areaData: [],
    checked: true,
    
    Info: {
      name: '',
      phone:'',
      address: '',
      city: '',
      postcode: '',
      country: '',
    },
    errmsg: '',
    errmsg2: '',
    errmsg3: '',
    errmsg4: '',
    errmsg5: '',
    errmsg6: '',
    // Info:[
    //   {id:1,title:"Name",value:'',plaText:'Please enter the username'},
    //   {id:2,title:"phone",value:'',plaText:'Please enter the phone'},
    //   {id:3,title:"address",value:'',plaText:'Please enter the address'},
    //   {id:4,title:"city",value:'',plaText:'Please enter the city'},
    //   {id:5,title:"postcode",value:'',plaText:'Please enter the postcode'},
    //   {id:6,title:"country",value:'',plaText:'Please enter the country'}
    // ]
  },

  showPopup() {
    this.setData({
      show: true
    });
  },

  onClose() {
    this.setData({
      show: false
    });
  },

  // quxiao
  cancel(e) {
    this.setData({
      show: false
    });
  },

  //
  confirm(res, index) {
    let data = res.detail.values
    let area = `${data[0].name}/${data[1].name}/${data[2].name}`
    console.log(area);
    this.setData({
      show: false, // 关闭遮罩
      areaData: area
    })
  },

  onChange({detail }) {
    // 需要手动对 checked 状态进行更新
    this.setData({
      checked: detail
    });
    console.log(this.data.checked);
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
     
        // wx.setStorageSync('address', )
        // 跳转
        // let arr  = getApp()
        // arr.data.newAddressData = `${Object.values(this.data.Info)}`+","+`${this.data.checked}`
        // console.log(arr.data.newAddressData);
      }
    }
  console.log(Object.values(this.data.Info));  

  },
  // 获取输入框
  getValue(e) {
    let name = e.detail
    console.log(name);
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
    console.log("phone", phone);
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
    console.log(name);
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
    console.log(city);
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
    console.log(postcode);
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
  getcountry(e){
    let country = e.detail
    console.log(country);
    let _this = this;
    let Reg = /^[a-zA-Z]/; //匹配拼音及英文
    if (country) {
      if (!Reg.test(country)) {
        _this.setData({
          errmsg6: "请输入正确格式",
         
        })
        return
      } else {
        _this.setData({
          errmsg6: "",
          "Info.country":country
        })
      }
    } else {
      _this.setData({
        errmsg6: "不能为空"
      })
    }
  },
})