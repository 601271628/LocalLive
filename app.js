// 将微信的API promise化
const {promisifyAll}  = require("miniprogram-api-promise")
const wxp = wx.p = {}
// 将wx这个对象promise化 然后挂载到wxp身上（wx.p身上）
promisifyAll(wx,wxp)

// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
