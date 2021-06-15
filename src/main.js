import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import routes from './routes.js'
import store from './store/index'
import notification from './components/layouts/notification'
// import VueEcho from 'vue-echo-laravel'
import Pusher from 'pusher-js'
import Echo from "laravel-echo"
Vue.config.productionTip = false
Vue.component('notification', notification);

Vue.use(Vuex);
console.log(Pusher)
// Vue.use(VueEcho, {
//     broadcaster: 'Pusher',
//     host: 'http://127.0.0.1:8000',
// });

window.Echo = new Echo(
    {
        broadcaster: 'pusher',
        key: '0f018eca5868ce7a572a', 
        cluster: 'eu',
        encrypted: true,
        // authEndpoint : 'http://localhost:8000/broadcasting/auth',
    }
); 

new Vue({
    router: routes,
    store:store,
    render: h => h(App),
        data:{
          sendvalue:'',
        }
}).$mount('#app')
