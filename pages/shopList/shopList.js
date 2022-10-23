// pages/shopList/shopList.js
// const address = require("address")
// import address from "address"
// const locahost = address.ip() || "0.0.0.0";

Page({
    /**
     * 页面的初始数据
     */
    data: {
        query:{},
        shopList:[],
        currentPage:1,
        pageSize:10,
        total:0,
        loading:true,
        loaded:false
    },
    // 方法
    getShopList(){
        wx.request({
          url: `http://192.168.137.80:3006/shopList/${this.data.query.id}/${this.data.currentPage}/${this.data.pageSize}`,
          method:'GET',
          success:(res)=>{
              this.setData({
                shopList:[...this.data.shopList,...res.data.data.shopList],
                // total:res.data.data.total
                total:this.data.total+10
              })
          }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        //如果没参数 说明不是正常进入 则返回
        if(!options){
            wx.navigateBack()
            return
        }
        // 获取参数
        this.setData({
            query:options
        })
        // 获取数据
        this.getShopList()
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        wx.setNavigationBarTitle({
            title:this.data.query.title
        })
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {
        console.log("下拉刷新~");
        wx.stopPullDownRefresh()
    },
 
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {
        console.log("上拉加载跟多...");
        if(this.data.total >= 30){
            this.setData({
                loading:false,
                loaded:true
            })
            wx.showToast({
                title: '没有更多数据了哟~',
                icon:'none'
            })
            return 
        }
        // 加载中
        this.setData({
            loading:true,
            loaded:false
        })
        setTimeout(() => {
            // 加载完成
            this.setData({
                loading:false,
                loaded:true
            })
            // 添加数据
            this.getShopList()
        }, 1000);
    },

})