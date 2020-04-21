import Vue from 'vue'
import App from './work_pc.vue'
import router from "./router" //引入 router
import 'ant-design-vue/dist/antd.css';

import {
    Button,
    Icon,
    Layout,
    Menu,
    Breadcrumb,
    Input,
    Tooltip,
    Select
} from 'ant-design-vue';
Vue.use(Button)
    .use(Icon)
    .use(Layout)
    .use(Menu)
    .use(Breadcrumb)
    .use(Input)
    .use(Tooltip)
    .use(Select);

import Vuex from 'vuex'
Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router
}).$mount('#app')