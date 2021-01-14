import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import routes from './routes.js'
import store from './store/index'

Vue.config.productionTip = false
Vue.use(Vuex);

new Vue({
    router: routes,
    store:store,
    render: h => h(App),
}).$mount('#app')
