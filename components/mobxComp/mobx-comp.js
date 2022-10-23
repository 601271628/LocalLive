// 导入store
import {storeBindingsBehavior} from "mobx-miniprogram-bindings"
import store from "../../store/store"

Component({
    // 使用store
    behaviors:[storeBindingsBehavior],
    storeBindings:{
        store,
        fields:{
           numA:'numA',
           numB:'numB',
           sum:'sum'
        },
        actions:{
            addNumA:'addNumA',
            addNumB:'addNumB'
        }
    },
    options:{
        styleIsolation: 'apply-shared'
    },

    methods: {
        operate(e){
            this.addNumB(e.target.dataset.step)
        }
    }
})
