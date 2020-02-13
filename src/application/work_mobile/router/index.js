import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/application/work_mobile/page/Home.vue'
import Setting from '@/application/work_mobile/page/Setting.vue'

//使用 vue-router
Vue.use(VueRouter)

//匯出vue-router 設置
export default new VueRouter({
    routes: [{
            name: 'Home', //元件呈現的名稱
            path: '/Home', //對應的路徑
            component: Home //對應的元件
        },
        {
            name: 'Setting',
            path: '/Setting',
            component: Setting
        }
    ]
})