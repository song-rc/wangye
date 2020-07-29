// pages/advise/advise.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    textareanum:0,
    name:null,
    phone:null
  },
  textarea:function(e){
    // console.log(e)
    this.setData({textareanum:e.detail.cursor})
  },
  fromsubmit:function(e){
    var name = /^([\\u4e00-\\u9fa5]{1,20}|[a-zA-Z\\.\\s]{1,20})$/
    var phone = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/
    // console.log(e)
    if (!e.detail.value.radio) {
      wx.showModal({
        title: '提示',
        content: '问题分类还没选',
      })
    } else if (!e.detail.value.textarea) {
      wx.showModal({
        title: '提示',
        content: '意见还没填写',
      })
    } else if (name.test(e.detail.value.name||!e.detail.value.name)){
      var tpage=this
        wx.showModal({
          title: '提示',
          content: '姓名输入有误',
          success:function(res){
            tpage.setData({name:''})
          }
        }) 
    } else if (!phone.test(e.detail.value.phone||!e.detail.value.phone)) {
      var tpage = this
      wx.showModal({
        title: '提示',
        content: '电话输入有误',
        success: function (res) {
          tpage.setData({phone:''})
        }
      }) 
    }else{
      wx.showLoading({
        title: '提交成功',
        duration: 2000,
        success:function(res){
          app.globalData.advise=e.detail.value
          wx.navigateBack({
            url:'../user/user'
          })
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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