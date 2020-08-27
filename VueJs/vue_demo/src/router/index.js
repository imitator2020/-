//编写路由器模块
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import News from '../views/News.vue'
import Messages from '../views/Messages.vue'
import MessageDetail from '../views/MessageDetail.vue'
Vue.use(VueRouter)


export default new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'news',
                    component:News
                },
                {
                    path:'messages',
                    component:Messages,
                    children:[
                        {
                            path:'/home/messages/:id',
                            component: MessageDetail
                        }
                    ]
                },
                {
                    path:"",
                    redirect:'/home/news'
                }
            ]

        },
        {
            path:'/about',
            component:About
        },
        {
            path:'/',
            redirect: '/about'
        }
    ]
})