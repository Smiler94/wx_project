var self;
// pages/refresh/refresh.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
    
    },

    onLoad:function() {
        self = this
        getListMore(function (data) {
            self.setData({
                newlist: data
            })
        })
    },
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
        console.log('refresh')
        wx.showNavigationBarLoading()
        getListMore(function(data) {
            self.setData({
                newlist: data
            })
            wx.hideNavigationBarLoading()
            wx.stopPullDownRefresh()
        })
    },

    onReachBottom: function() {
        console.log('ok')
        self.setData({
            loadingMore: "加载中..."
        })
        setTimeout(function() {
            getListMore(function (data) {
                console.log(data)
                self.setData({
                    newlist: data.concat(self.data.newlist)
                })
            })
        }, 2000)
        
    }
})
function getListMore(callback) {
    wx.request({
        url: 'https://demo.hcoder.net/index.php?user=hcoder&pwd=hcoder&m=list1&page=2',
        method: 'GET',
        success: function (res) {
            callback(res.data.split('--hcSplitor--'))
        }
    })
}