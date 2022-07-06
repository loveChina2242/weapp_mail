
Page({
  data: {
    msg: "",
    disabled: true,
    nextTime: 0
  },

  onShow() {

      let num = 5
      let _this = this;
      _this.setData({
        msg:num+'s',
        disabled:true
      })
      let timer = setInterval(()=>{
        num --;
        if(num<=0){
          clearInterval(timer)
          _this.setData({
            disabled:false,
            msg:'我已悉知'
          })
        
        }else{
          _this.setData({
            disabled:true,
            msg:num+"s"
          })
        }
      },1000)

  },
  nextStepTap(){
   
  }

 
})