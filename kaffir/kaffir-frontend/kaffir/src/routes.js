 import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from './components/layouts/layout'
import home from './components/public/home'
import login from './components/auth/login'
import register from './components/auth/register'
import contact from './components/public/contact'
import profile from './components/public/profile'
import chat from './components/public/chat'
import sendmsg from './components/public/sendmsg'

Vue.use(VueRouter);

var routes = [
    {
        path: '',
        component: layout,
        children: [
            {
                path: '',
                component: home,
        
            },
            {
                path: '/contact',
                component: contact,
            }
        ]
    },    

    {
        path:'/login',
        component: login
    },

    {
        path:'/register',
        component: register
    },

    {
        path:'/profile',
        component: profile
    },

    {
        path:'/chat',
        component: chat
    },

    {
        path:'/sendmsg',
        component: sendmsg
    }
];

const router = new VueRouter({
    routes: routes,
    mode: "history"
});

export default router;