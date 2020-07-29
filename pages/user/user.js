// pages/user/user.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:null,
    hidden:false,
    show:false,
    userInfo: null,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    xxData:[
      {
        url:"/images/lxdh.png",
        text:"联系电话"
      },
      {
        url: "/images/yx.png",
        text: "电子邮箱"
      },
      {
        url: "/images/weixin.png",
        text: "微信账号"
      }
    ],
    xxktop:[
      {
        url:"/images/lyb.png",
        text:"留言板",
        bq:"jt"
      },
      {
        url: "/images/yjfk.png",
        text: "意见反馈",
        bq:"jt"
      }
    ],
    xxkbottom: [
      {
        url: "/images/kf.png",
        text: "客服会话",
        bq: "jt"
      },
      {
        url: "/images/yjfk.png",
        text: "意见反馈",
        bq: "jt"
      },
      {
        url: "/images/zs.png",
        text: "赞赏",
        bq: "jt"
      }
    ]
  },
  yc:function(e){
    // console.log(e)
    this.setData({show:false})
  },
  select:function(e){
    // console.log(e.currentTarget.dataset.idx)
    if (e.currentTarget.dataset.idx==0){
      wx.makePhoneCall({
        phoneNumber: '18319401566',
        success(res){
          console.log('18319401566')
        }
      })
    } else if (e.currentTarget.dataset.idx == 1 ){
      wx.setClipboardData({
        data: '2365163958@qq.com',
        success(res) {
          console.log('2365163958@qq.com')
        },
        fail: function(res) {},
        complete: function(res) {},
      })
    } else if (e.currentTarget.dataset.idx == 2){
      wx.setClipboardData({
        data: '18319401566',
        success(res) {
          console.log('18319401566')
        }
      })
    }
  },
  getUserInfo: function (e) {
    // console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hidden: true
    })
    // wx.showTabBar({})
  },
  click:function(e){
    wx.reLaunch({
      url: '../index/index',
    })
  },
  top:function(e){
    if (e.currentTarget.dataset.idx==1){
      wx.navigateTo({
        url: '../advise/advise',
      })
    }
  },
  bottom:function(e){
    // console.log(e)
    this.setData({ index: e.currentTarget.dataset.idx})
    // this.setData({ index: e.currentTarget.dataset.idx})
    if(this.data.index==2){
      this.setData({show:true})
    }else if(this.data.index==1){
      wx.navigateTo({
        url: '../advise/advise',
      })
    }
  },
  kfhh:function(e){
    // console.log(e)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hidden: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hidden: true
        })
        // wx.showTabBar({})
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hidden: true
          })
          // wx.showTabBar({})
        },
      })
    }
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