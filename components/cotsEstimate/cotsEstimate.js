// components/cotsEstimate/cotsEstimate.js
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
    show: false,
    radio: '1',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    seletype(){
      this.setData({ show: true });
    },
    onClose(){
      this.setData({ 
        show: false
       });
    },
    onChangeradio(e){
      this.setData({
        radio: e.detail,
      });
      // console.log(this.data.radio);
    }
  }
})
