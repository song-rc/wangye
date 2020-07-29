// pages/pictures/pictures.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    select:[
      {text:"最新"},
      {text:"热门"}
    ],
    xc:[
      {
        img:"/images/xc.jpg"
      },
      {
        img: "/images/xc1.jpg"
      },
      {
        img: "/images/xc2.jpg"
      },
      {
        img: "/images/xc3.jpg"
      }
    ],
    
    seldata:0,
    show:true,
    index:0,
    clientHeight:''
  },
  sh:function(e){
    // console.log(e)
      this.setData({show:true})
  },
  sf:function(e){
    // console.log(e.currentTarget.dataset.xcidx) 
    this.setData({show:false})
    this.setData({ index: e.currentTarget.dataset.xcidx})
  },
  click: function (e) {
    // console.log(e)
    this.setData({ seldata: e.currentTarget.dataset.idx })
  },
  slide: function (e) {
    // console.log(e)
    if(e.detail.current==1){
      this.setData({show:true})
    }
    var tpage = this
    if (tpage.data.seldata === e.detail.current) {
      return false;
    } else {
      tpage.setData({ seldata: e.detail.current })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        // console.log(res)
        that.setData({
          clientHeight: res.windowHeight
        });
      }
    })
    // wx.request({
    //   url: 'http://localhost/xc.php', //仅为示例，并非真实的接口地址
    //   data: {
    //     x: '',
    //     y: ''
    //   },
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success(res) {
    //     // console.log(res.data)
    //     that.setData({ xc: res.data })
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})