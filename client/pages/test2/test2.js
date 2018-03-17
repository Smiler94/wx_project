// pages/test2.js
var items = ['操作A', '操作B', '操作C'];
Page({

    /**
     * 页面的初始数据
     */
    data: {
    
    },

    test: function() {
        wx.showToast({
            title: 'ok',
            icon: 'loading',
            mask: true,
            success: function() {
                setTimeout(function(){
                    wx.hideToast();
                }, 3000);
            }
        })
    },

    showModal: function() {
        wx.showModal({
            title: '测试模态框',
            content: '这是一段测试文本',
            showCancel: true,
            cancelText: '取消',
            success: function(res) {
                console.log(res)
            }
        })
    },

    showSheet: function() {
        wx.showActionSheet({
            itemList: items,
            itemColor: '#FF0000',
            success: function(res) {
                console.log('选择了'+items[res.tapIndex])
            }
        })
    },

    changeTitle: function() {
        wx.setNavigationBarTitle({
            title: 'new Title',
        })
    },

    changeNavigate: function() {
        console.log('aaa')
        wx.redirectTo({
            url: '../test/test',
            fail: function(res){
                console.log(res)
            }
        })
    },

    changeTab: function() {
        wx.switchTab({
            url:"../test/test"
        })
    }
})