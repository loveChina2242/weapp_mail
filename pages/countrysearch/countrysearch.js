// pages/countrysearch/countrysearch.js
Page({

  data: {
    newData:{ },
    coutryData:{
      A:[
        {name:"阿富汗",egname:'Afghanistan'},
        {name:"阿尔巴尼亚",egname:'Albania'},
        {name:"阿尔及利亚",egname:'Algeria'},
        {name:"安道尔",egname:'Andorra'},
        {name:"安哥拉",egname:'Angola'},
    ],
      B:[
        {name:" 巴哈马",egname:'Bahamas'},
        {name:"巴林Bahrain",egname:'Bahrain'},
        {name:"孟加拉 ",egname:'Bangladesh'},
        {name:"巴巴多斯 ",egname:'Barbados'},
    ],
      C:[
        {name:" 柬埔寨",egname:'Cambodia'},
        {name:"喀麦降",egname:'Cameroon'},
        {name:"加拿大",egname:'Canada '},
    ],
      D:[
        {name:" 丹麦",egname:'Denmark'},
        {name:"吉布提",egname:'Djibouti'},
        {name:"多米尼克",egname:'Dominica'},
    ],
      E:[
        {name:" 东帝汶",egname:'East Timor'},
        {name:"厄瓜多尔",egname:'Egypt'},
        {name:"赤道几内亚",egname:'liquatorial CGuinca'},
    ],
      F:[
        {name:" 斐济",egname:'Fiji'},
        {name:"芬兰",egname:'Finland'},
        {name:"法国",egname:'France'},
    ],
  
      G:[
        {name:" 加蓬",egname:'Gabon'},
        {name:"冈比亚",egname:'Gambia'},
    ],

    
    },
    msg:"",
    value:''
  },
   // 选择国家
   clickCountry(e){
    let coutryval = e.target.dataset.name
 if(coutryval){
   wx.setStorageSync('country', coutryval)
  // var arr = getApp()
  // arr.data.country = coutryval;
 wx.navigateBack()
 }else{
   return
 }

  },
  // search
  onSearch(e){
    let _this = this
    let val = e.detail;
    let reg = /^[\u4E00-\u9FA5]/g;
    let coutyInfo = {};
    let valType = reg.test(val)?'name':'egname'//判断值类型
    let newReg  = new RegExp(val)
    for(const i in _this.data.coutryData){
      this.data.coutryData[i].forEach(item => {
          if(newReg.test(item[valType])){
            if(coutyInfo[i]){
              coutyInfo[i].push(item)
            }else{
              coutyInfo[i] = [item]
            }
            // console.log(coutyInfo);
            _this.setData({
              newData:coutyInfo
            })
          }else{
            _this.setData({
              msg:'查询不到~'
            })
          }
      });
    }

    },
    // onCancel
    onCancel(){
      wx.navigateBack()
    }



})