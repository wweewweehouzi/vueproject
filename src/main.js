import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'

import axios from 'axios'

Vue.config.productionTip = false

//配置axios
axios.defaults.baseURL = "https://www.fastmock.site/mock/7c2c64254f76747ad227fbd1c835c769/api"
Vue.prototype.$http = axios

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')