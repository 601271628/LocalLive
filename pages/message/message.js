// 导入store
import {createStoreBindings} from "mobx-miniprogram-bindings"
import store from "../../store/store"

Page({
    // 事件
    async req(){
        // console.log(wx);
        // console.log(wx.p);
        let res =  await wx.p.request({
            url: 'https://applet-base-api-t.itheima.net/categories',
            method:'GET',
            // success:(res)=>{} promise后不写也行
        })
        console.log(res);
    },
    operate(e){
        // 获取参数
        // console.log(e.target.dataset.step);
        // 修改（使用store内部action提供的addNumA）
        this.addNumA(e.target.dataset.step)
    },
    addMessageNum(e){
        this.addMessage(e.target.dataset.step)
    },
    // created
    onLoad(options) {
        // 绑定store
        this.storeBindings = createStoreBindings(this,{
            store,
            fields:['numA','numB','sum','messageNum'],
            actions:['addNumA','addNumB','addMessage'],
        })
    },
    onUnload() {
        this.storeBindings.destroyStoreBindings();
    },

  
})