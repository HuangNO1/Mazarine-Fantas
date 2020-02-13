import Vue from 'vue'
import App from './login_pc.vue'
import router from "./router" //引入 router
import 'ant-design-vue/dist/antd.css';

import { Button, Icon, Menu, Tabs, Row, Col, Form, Input } from 'ant-design-vue';
Vue.use(Button).use(Icon).use(Menu).use(Tabs).use(Row).use(Col).use(Form).use(Input);

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router
}).$mount('#app')