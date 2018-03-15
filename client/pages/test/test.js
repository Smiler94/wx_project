// pages/test.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		// array:[
		// 	{
		// 		id:5,
		// 		unique:"unique_5"
		// 	},
		// 	{
		// 		id: 4,
		// 		unique: "unique_4"
		// 	},
		// 	{
		// 		id: 3,
		// 		unique: "unique_3"
		// 	},
		// 	{
		// 		id: 2,
		// 		unique: "unique_2"
		// 	},
		// 	{
		// 		id: 1,
		// 		unique: "unique_1"
		// 	},
		// ],
		// numberArray:[
		// 	1,2,3,4
		// ]
		// item: {
		// 	index: 0,
		// 	msg: 'this is a template',
		// 	time: '2016-09-15'
		// }
		imgUrls: [
			'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
			'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
			'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
		],
		items: [
			{ name: 'USA', value: '美国' },
			{ name: 'CHN', value: '中国', checked: 'true' },
			{ name: 'BRA', value: '巴西' },
			{ name: 'JPN', value: '日本' },
			{ name: 'ENG', value: '英国' },
			{ name: 'TUR', value: '法国' },
		]
	},
    request1 : function() {
        wx.request({
            url: 'https://ug6erpx5.qcloud.la',
            method: 'GET',
            success: function(res) {
                console.log(res)
            },
            complete: function(res) {
                console.log(res.data)
            }
        })
    },
    requestPost: function() {
        wx.request({
            url: 'https://demo.hcoder.net/index.php?m=postMode',
            method: 'POST',
            data: {'name':'hc', 'age':12},
            header: {'content-type':'application/x-www-form-urlencode'},
            success: function(res) {
                console.log(res)
            }
        })
    },


    chooseImg: function() {
        wx.chooseImage({
            success: function(res) {
                console.log(res)
            },
        })
    },

    showImg: function() {
        var imgs = [
            'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
        ]
        wx.previewImage({
            urls: imgs,
            success: function(res) {
                console.log(res)
            }
        })
    },
	handleTap1: function(e) {
		console.log('tap1')
	},
	handleTap2: function (e) {
		console.log('tap2')
	},
	handleTap3: function (e) {
		console.log('tap3')
		console.log(e.target.dataset.elementType)
		console.log(e.target.dataset.name)
	},
	// switch: function(e) {
	// 	const length = this.data.array.length
	// 	for(let i = 0;i < length; ++i) {
	// 		const x = Math.floor(Math.random() * length)
	// 		const y = Math.floor(Math.random() * length)
	// 		const temp = this.data.array[x]
	// 		this.data.array[x] = this.data.array[y]
	// 		this.data.array[y] = temp
	// 	}
	// },

	// addToFront: function(e) {
	// 	const length = this.data.array.length
	// 	this.data.array = [
	// 		{
	// 			id:length,
	// 			unique:'unique_' + length
	// 		}
	// 	].concat(this.data.array)
	// 	this.setData({
	// 		array: this.data.array
	// 	})
	// },

	// addNumberToFront: function(e) {
	// 	this.data.numberArray = [
	// 		this.data.numberArray.length + 1
	// 	].concat(this.data.numberArray)
	// 	this.setData({
	// 		numberArray: this.data.numberArray
	// 	})
	// },
	checkboxChange: function (e) {
		console.log('checkbox发生change事件，携带value值为：', e.detail.value)
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