import Vue from 'vue'
import App from './work.vue'
import router from "./router" //引入 router
import 'ant-design-vue/dist/antd.css';

import { Button } from 'ant-design-vue';
Vue.use(Button);
import { Icon } from 'ant-design-vue';
Vue.use(Icon);
import { Layout } from 'ant-design-vue';
Vue.use(Layout);
import { Menu } from 'ant-design-vue';
Vue.use(Menu);
import { Breadcrumb } from 'ant-design-vue';
Vue.use(Breadcrumb);

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router
}).$mount('#app')