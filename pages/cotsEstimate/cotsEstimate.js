// pages/cotsEstimate/cotsEstimate.js
Page({

  data: {
    show: false,
    radio: '1',
  },
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
})