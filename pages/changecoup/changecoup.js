// pages/changecoup/changecoup.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
  },

  showPopup() {
    this.setData({ show: true });
  },

  onClose() {
    this.setData({ show: false });
  },
  oncanel(){
    this.setData({ show: false });
  },
  onchange(){
    console.log('0');
  }
  
})