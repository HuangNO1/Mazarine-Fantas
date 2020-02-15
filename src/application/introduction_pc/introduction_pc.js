import Vue from 'vue'
import App from './introduction_pc.vue'
import router from "./router" //引入 router
import 'ant-design-vue/dist/antd.css';

import { Button, Carousel, Drawer } from 'ant-design-vue';
Vue.use(Button).use(Carousel).use(Drawer);

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router
}).$mount('#app')