// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiper: [{ url:"/images/lb.jpg"}, { url: "/images/lb1.jpg"}, { url: "/images/lb2.jpg"}],
    select:[{text:'心情随笔'},{text:'学习笔记'}],
    xq:[
      {
        id:'01',
        img:"/images/xq.jpg",
        h3:"博客日记",
        cnt:"内容详情，显示2行，到这里就开始折叠了，内容详情，显示2行，到这里就开始折叠了",
        time:"2019/12/22"
      },
      {
        id:'02',
        img: "/images/xq1.jpg",
        h3: "博客日记",
        cnt: "内容详情，显示2行，到这里就开始折叠了，内容详情，显示2行，到这里就开始折叠了",
        time: "2019/12/22"
      },
      {
        id:'03',
        img: "/images/xq2.jpg",
        h3: "博客日记",
        cnt: "内容详情，显示2行，到这里就开始折叠了，内容详情，显示2行，到这里就开始折叠了",
        time: "2019/12/22"
      }
    ],
    xx:[
      {
        image:"/images/xx.jpg",
        text:"这是一个白色标题，背景黑色半透明"
      },
      {
        image: "/images/xx1.jpg",
        text: "这是一个白色标题，背景黑色半透明"
      },
      {
        image: "/images/xx2.jpg",
        text: "这是一个白色标题，背景黑色半透明"
      },
      {
        image: "/images/xx3.jpg",
        text: "这是一个白色标题，背景黑色半透明"
      },
    ],
    seldata:0,
    clientHeight: '',
    index:0
  },
  detail:function(e){
    var tpage=this
    // console.log(e.currentTarget.dataset.current)
    tpage.setData({ index: e.currentTarget.dataset.current})
    for(var i=0;i<tpage.data.xq.length;i++){
      if(i==tpage.data.index){
        // console.log(this.data.xq[i].img)
        wx.setStorage({
          key: 'value', 
          data: tpage.data.xq[i].img,
        })
        wx.navigateTo({
          url: '../article_detail/article_detail',
        })
      }
    }
    
  },
  click:function(e){
    console.log(e)
      this.setData({seldata:e.currentTarget.dataset.idx})
  },
  slide:function(e){
    // console.log(e)
    var tpage=this
    if(tpage.data.seldata===e.detail.current){
      return false;
    }else{
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
    //   url: 'http://localhost/tpt/public/index.php/index/select', //仅为示例，并非真实的接口地址
    //   data: {
    //     x: '',
    //     y: ''
    //   },
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success(res) {
    //     console.log(res)
    //     that.setData({swiper: res.data })
    //   }
    // })
    // wx.request({
    //   url: 'http://localhost/articleList.php', //仅为示例，并非真实的接口地址
    //   data: {
    //     x: '',
    //     y: ''
    //   },
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success(res) {
    //     console.log(res.data)
    //     that.setData({ xq: res.data })
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