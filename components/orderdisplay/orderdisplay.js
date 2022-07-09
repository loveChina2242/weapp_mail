// components/orderdisplay/orderdisplay.js
Component({
  
  properties: {

  },
  data: {
    orderpic:[
    {id:1,url:'../../assets/images/oder.png'},
    {id:2,url:'../../assets/images/oder.png'},
    {id:3,url:'../../assets/images/oder.png'},
    ]
  },

  methods: {
    lookpic(e){
      let img = e.target.dataset.item
      console.log(img);
      wx.previewImage({
        current:img,
        urls:[img],
        success(res){
          console.log("succ",res);
        }
      })
    }
  }
})
