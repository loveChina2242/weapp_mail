import { areaList } from '../../miniprogram/miniprogram_npm/@vant/weapp/area/index';
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
    areaList,
    checked:true,
    Info:{
      name:'',
      phone:1111,
      address:'111',
      city:'',
      postcode:'',
      country:'',
    },
    Info:[
      {id:1,title:"Name",value:'',plaText:'Please enter the username'},
      {id:2,title:"phone",value:'',plaText:'Please enter the phone'},
      {id:3,title:"address",value:'',plaText:'Please enter the address'},
      {id:4,title:"city",value:'',plaText:'Please enter the city'},
      {id:5,title:"postcode",value:'',plaText:'Please enter the postcode'},
      {id:6,title:"country",value:'',plaText:'Please enter the country'}
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange({ detail }) {
      // 需要手动对 checked 状态进行更新
      this.setData({ checked: detail });
    },
    commitAddress(){
   
    },
    // 获取输入框
    getValue(e){
     let name =  e.detail.value
     console.log(name);
     console.log(str);
     let Reg =/^[A-Za-z0-9]+$/;
     if(name){
       if(!Reg.test(name)){
        wx.showToast({
          title: '填写不对',
        })
        return
       }
     }
      // console.log(e.detail.value.replace('/[^a-zA-Z]/g',''));
    }
  }
})
