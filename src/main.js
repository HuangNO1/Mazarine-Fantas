import Vue from 'vue'
import App from './App.vue'
import router from "./router" //引入 router
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false

import { Button } from 'ant-design-vue';
Vue.use(Button);
import { Menu } from 'ant-design-vue';
Vue.use(Menu);
import { Icon } from 'ant-design-vue';
Vue.use(Icon);
import { Layout } from 'ant-design-vue';
Vue.use(Layout);
import { Breadcrumb } from 'ant-design-vue';
Vue.use(Breadcrumb);

new Vue({
    render: h => h(App),
    router
}).$mount('#app')