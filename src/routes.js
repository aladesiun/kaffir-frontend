import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from './components/layouts/layout'
import home from './components/public/home'
import login from './components/auth/login'
import forgotPassword from './components/auth/forgot-password'
import resetPassword from './components/auth/reset-password'
import register from './components/auth/register'
import contact from './components/public/contact'
import profile from './components/public/profile'
import chat from './components/public/chat'
import sendmsg from './components/public/sendmsg'
import message from './components/public/message'
import groups from './components/public/groups'
import report from './components/public/report'
import yourturn from './components/public/yourturn'
import Share from './components/public/imgshare'
// import { component } from 'vue/types/umd'

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
                path: '/report',
                component: report
            },
            {
                path: '/contact',
                component: contact,
            },
         
            {
                path:'/groups',
                component: groups
            },
            {
                path:'/profile',
                component: profile,
                meta:{
                    AuthRequired:true
                }
            },
            
           
        ]
    },
    {
        path:'/send-anonymous/:token',
        component: sendmsg
    },
   
    {
        path:'/message',
        component: message,
        meta:{
            AuthRequired:true
        }
    },
    {
        path: '/login',
        component: login
    },
    {
        path: '/yourturn',
        component: yourturn
    },
    {
        path: '/register',
        component: register
    },
    {
        path: '/forgot-password',
        component: forgotPassword
    },
    {
        path: '/reset-password/:token',
        component: resetPassword
    },
    {
        path: '/share',
        component: Share
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