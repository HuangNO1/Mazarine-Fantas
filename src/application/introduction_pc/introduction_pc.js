import Vue from 'vue'
import App from './introduction_pc.vue'
import router from "./router" //引入 router
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router
}).$mount('#app')