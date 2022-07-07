// pages/cotsEstimate/cotsEstimate.js
Page({

  data: {
    show: false,
    radio: '1',
    tijishow:false,
  },
  seletype(){
    this.setData({ show: true });
  },
  selekg(){
    this.setData({ tijishow: true });
  },
  onClose(){
    this.setData({ 
      show: false
     });
  },
  onClose2(){
    this.setData({ 
      tijishow: false
     });
  },
  onChangeradio(e){
    this.setData({
      radio: e.detail,
    });

  }
})