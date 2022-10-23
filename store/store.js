// 创建store实例对象 数据仓库
import {action, observable} from "mobx-miniprogram"

const store = observable({
    // state字段
    numA:1,
    numB:2,
    messageNum:1,
    activeIndex:0,

    // getter(state,getters)字段
    get sum(){
        return this.numA + this.numB
    },

    // mutations(state) actions(context)
    addNumA:action(function(step) {
        console.log(step);
        this.numA += step
    }),
    addNumB:action(function(step) {
        this.numB += step
    }),
    addMessage:action(function(step) {
        if(step<0 && this.messageNum==0){
            return wx.showToast({
              title: '无数据了~',
              icon:'none'
            })
        }
        console.log(1);
        this.messageNum += step
    }),
    updateActiveIndex:action(function(index) {
        this.activeIndex = index
    })
})

export default store