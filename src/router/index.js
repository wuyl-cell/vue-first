import Vue from 'vue'
import Router from 'vue-router'
import Index from "../components/Index";
import User from "../components/User";
import List from "../components/List";

Vue.use(Router)

export default new Router({
    routes: [
        {path: '/index', component: Index},
        {path: '/list', component: List},
        {path: '/user/:id', component: User},
        {path: '/', redirect:'/index'},
        {path: '/*', redirect:'/index'},
    ]
})
