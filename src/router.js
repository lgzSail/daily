//引入vue
import Vue from 'vue';
import VueRouter from 'vue-router';
// 引入组件
import header from './components/header.vue'
import nav from './components/nav.vue'
// 引入页面
import Info from './page/info.vue'
import Diary from './page/diary.vue'
import Calendar from './page/calendar.vue'
import Bill from './page/bill.vue'

Vue.use(VueRouter)
// 引用页面

//定义routes路由的集合，数组类型
const routes = [
    {
        path: '/',
        component: header,
        children: [
            {
                path: '/',
                component: nav,
                children: [
                    {
                        path: '/info',
                        component: Info,
                    },
                    {
                        path: '/diary',
                        component: Diary,
                    },
                    {
                        path: '/calendar',
                        component: Calendar,
                    },
                    {
                      path: '/bill',
                      component: Bill,
                  },
                ]
            }
        ]
    },
]

const router = new VueRouter({
    routes
});

const routerPath = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return routerPath.call(this, location).catch(e => e)
}

export default router