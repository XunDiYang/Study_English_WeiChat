Page({

  /**
   * 页面的初始数据
   */
  data: {
    Word: "",
    Meaning: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  wsearchIput: function (e) {
    this.setData({
      Word: e.detail.value
    });
  },

  searchWord: function () {
    if (!wx.cloud) {
      wx.redirectTo({
        url: '../home/home',
      })
      return
    }
    const db = wx.cloud.database();
    db.collection('dic').where({
      word: this.data.Word
    }).get({
      success: res => {
        this.setData({
          Meaning: res.data[0].meaning
        });
        console.log(res.data[0].meaning)
      },
    })
    console.log(this.data.Meaning)
    
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