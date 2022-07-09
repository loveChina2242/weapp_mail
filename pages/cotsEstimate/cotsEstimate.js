
Page({

  data: {
    total:0,
    volume: {},
    show: false,
    radio: '1',
    tijishow: false,
    selecttype: [{
        name: '1',
        title: '普通货物',
        firstheavy: 59,
        secondheavy: 39
      },
      {
        name: '2',
        title: '电子产品',
        firstheavy: 69,
        secondheavy: 49
      },
      {
        name: '3',
        title: '液体粉末',
        firstheavy: 79,
        secondheavy: 59
      },
      {
        name: '4',
        title: '内地ESM',
        firstheavy: 128,
        secondheavy: 49
      },
      {
        name: '5',
        title: '广东ESM',
        firstheavy: 128,
        secondheavy: 35
      },
    ],
    weightitem: [{
        id: 1,
        name: 'weight',
        title: '重量（KG)'
      },
      {
        id: 2,
        name: 'length',
        title: '长（CM）'
      },
      {
        id: 3,
        name: 'wdith',
        title: '宽（CM）'
      },
      {
        id: 4,
        name: 'height',
        title: '高(CM)'
      },
    ]
  },
  seletype() {
    this.setData({
      show: true
    });
  },
  seletweigth() {
    this.setData({
      tijishow: true
    });
  },
  onClose() {
    this.setData({
      show: false
    });
  },
  onClose2() {
    this.setData({
      tijishow: false
    });
  },
  onChangeradio(e) {
    this.setData({
      radio: e.detail,
    });
  },

  inputChange(e) {
    let val = e.detail.value;
    let name = e.target.dataset.name
    if (!Number(val)) {
      wx.showToast({
        title: '请输入正确格式',
        icon: "none"
      })
      return
    } else {
      this.count()
    }
  },

  count() {
    let type = this.data.radio; //选择的类型
    // 首重 续重
    let firstheavy = this.data.selecttype.filter(v => v.name == type)[0].firstheavy
    let secondheavy = this.data.selecttype.filter(v => v.name == type)[0].secondheavy
    let kg = 0.5
    let weight = this.data.volume.weight
    if (weight > kg) {
      // 超出一斤
      let second = weight - kg;
      let total = firstheavy + (second * secondheavy)
      console.log(total, "超出一斤");
      this.setData({
        total:total
      })
    } else {
      let total2 = firstheavy
      this.setData({
        total:total2
      })
    }

  },

  // 确定按钮
  formSubmit(e) {
    let volume = e.detail.value
    for (let key in volume) {
      let key = volume[key]
      if (!volume[key]) {
        console.log(key);
        console.log('no');
        return
      } else {
        this.setData({
          volume: volume,
          tijishow: false
        })
        console.log("填写的重量", this.data.volume);

        this.count()
      }
    }
  },
  inputweight(e) {
    console.log(e.detail);
  }

})