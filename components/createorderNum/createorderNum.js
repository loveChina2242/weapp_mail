
Component({
	properties: {

	},
	data: {
	
		numval:'',
		disabled:false,
		orderList:[],
		disableditem:false,
	},
	methods: {
		//输入框获得焦点
		bindinput: function (e) {
			let numval = e.detail.value
			if(!Number(numval)){
				this.setData({numval: ''})
				return
			}
			this.setData({numval})
		},
		//输入框失去焦点
		onblur(e){
			if(e.detail.value > 0){
				this.setData({disabled:true})
			}
			this.setinput(this.data.numval)
		},
		
		setinput(numval){
		// 创建对应input
			for(let i = 0; i < numval; i++){
			
        this.data.orderList.push({status:'0',
        mail:'',id:i+1,
        disabled:false})
			}
			this.setData({orderList:this.data.orderList})
		},
		iptchange(e){
			let item = e.target.dataset.items
			let val = e.detail.value
			let id = item.id
			let _this = this
			if(val == ''){
				return
			}
			this.data.orderList.filter( v => v.id == id )[0].mail = val
			wx.showModal({
				  title:val,
			 	content:'确认快递单号,确认后不可修改',
				success:({confirm}) =>{
					if(confirm === true){
						_this.data.orderList.filter( v => v.id == id )[0].disabled = true
						_this.setData({
							orderList :_this.data.orderList
						})
					}
				}
			})
		},
		//删除单号
		deleinfo(e){
        if(this.data.numval<0){
          console.log("0");
          this.setData({disabled:false})
      }
			let index = e.target.dataset.info
			let _this = this
			wx.showModal({
				title:'是否移除快递单号？',
				success:res =>{
					if(res.confirm === true){
            _this.data.orderList.splice(index,1)
            console.log( _this.data.orderList.length);
						_this.setData({
              orderList :_this.data.orderList,
              numval:_this.data.numval-1
						})
					}
				}
			})
		},
		//增加单号
		onadd(){
      let _this = this;
      wx.showModal({
        title: '提示',
        content: '是否增加一个快递？',
        success(res) {
          if (res.confirm) {
            let time = new Date().getTime()
            let obj = {
              status:'0',mail:'',id:time,disabled:false
            }
            _this.data.orderList.push(obj)
            _this.setData({
              orderList:_this.data.orderList,
              numval:Number(_this.data.numval) + 1
            })
          } else if (res.cancel) {
            // console.log('用户点击取消')
          }
        }
      })
		
		}
	}
})
