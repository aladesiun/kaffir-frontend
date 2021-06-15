import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from './components/layouts/layout'
import home from './components/public/home'
import login from './components/auth/login'
import forget from './components/auth/forget'
import register from './components/auth/register'
import contact from './components/public/contact'
import profile from './components/public/profile'
import chat from './components/public/chat'
import sendmsg from './components/public/sendmsg'
import message from './components/public/message'
import groups from './components/public/groups'

Vue.use(VueRouter);

var routes = [
    {
        path: '',
        component: layout,
        children: [
            {
                path: '/',
                component: home,
        
            },
            {
                path: '/contact',
                component: contact,
            },
            {
                path:'/profile',
                component: profile,
                meta:{
                    AuthRequired:true
                }
            },
            {
                path:'/groups',
                component: groups
            },
            {
                path:'/write-anonymous/:token',
                component: sendmsg
            },
            {
                path:'/message',
                component: message,
                meta:{
                    AuthRequired:true
                }
            },
        ]
    },
    {
        path: '/login',
        component: login
    },
    {
        path: '/register',
        component: register
    },
    {
        path: '/reset',
        component: forget
    },
    {
        path:'/group-chat',
        component: chat,
        meta:{
            // AuthRequired:true  /:token
        }
    },    
];

const router = new VueRouter({
    routes: routes,
    mode: "history"
});

export default router;