// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoSrc: "",
    id:"",
    desc:""
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      id: options.id
    })
    const db = wx.cloud.database();
    db.collection('video').where({
      _id: this.data.id
    }).get({
      success: res => {
        console.log(res)
        this.setData({
          videoSrc: res.data[0].videoSrc,
          desc: res.data[0].desc
        });
      }
    })
    console.log(this.data.videoSrc)
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