Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      pagePath: "/pages/index/index",
      iconPath: "/image/icon_lock0.png",
      selectedIconPath: "/image/icon_lock.png",
      text: "绝密"
    },
      {
        pagePath: "/pages/details/details",
        iconPath: "/image/icon_component.png",
        selectedIconPath: "/image/icon_component_HL.png",
        text: "资料"
      },
     {
      pagePath: "/pages/home/home",
      iconPath: "/image/icon_user0.png",
       selectedIconPath: "/image/icon_user.png",
      text: "我的"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})