import Vue from 'vue'
import App from './work.vue'
import router from "./router" //引入 router
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router
}).$mount('#app')