// custom-tab-bar/index.js
import {storeBindingsBehavior} from "mobx-miniprogram-bindings"
import store from "../store/store"

Component({
    options:{
        styleIsolation:"shared"
    },
    data: {
        // active: 0,
        tabbarList: [
            {
                pagePath: "/pages/home/home",
                text: "首页",
                iconPath: "../images/tabbar/home-2-line.png",
                selectedIconPath: "../images/tabbar/home-2-line-copy.png"
            },
            {
                pagePath: "/pages/message/message",
                text: "消息",
                iconPath: "../images/tabbar/building-3-line.png",
                selectedIconPath: "../images/tabbar/building-3-line-copy.png",
                info:0
            },
            {
                pagePath: "/pages/logs/logs",
                text: "我的",
                iconPath: "../images/tabbar/building-2-line.png",
                selectedIconPath: "../images/tabbar/building-2-line-copy.png"
            }
        ]
    },
    properties:{},
    methods:{
        // 事件
        onChange(e) {
            console.log(e.detail);
            // event.detail 的值为当前选中项的索引
            // this.setData({ active: e.detail });
            //调用store来解决active问题
            this.updateActiveIndex(e.detail)
            // 切换页面 switchTab
            wx.switchTab({
              url: this.data.tabbarList[e.detail].pagePath,
            })
        },
    },
    behaviors:[storeBindingsBehavior],
    storeBindings:{
        store,
        fields:{
            messageNum:'messageNum',
            activeIndex:'activeIndex'
        },
        actions:{
            addMessage:'addMessage',
            updateActiveIndex:'updateActiveIndex'
        }
    },
    observers:{
        'messageNum':function(newV) {
            this.setData({
                'tabbarList[1].info':newV
            })
        }
    }
})