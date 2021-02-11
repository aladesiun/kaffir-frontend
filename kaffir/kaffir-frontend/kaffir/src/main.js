import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import routes from './routes.js'
import store from './store/index'
import notification from './components/layouts/notification'
Vue.config.productionTip = false
Vue.component('notification', notification);

Vue.use(Vuex);

new Vue({
    router: routes,
    store:store,
    render: h => h(App),
        data:{
          sendvalue:'',
        }
}).$mount('#app')
