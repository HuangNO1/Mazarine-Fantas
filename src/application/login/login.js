import Vue from 'vue'
import App from './login.vue'
import router from "./router" //引入 router

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router
}).$mount('#app')