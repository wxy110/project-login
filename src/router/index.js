import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'
import Login from '../views/Login.vue'
import HelloWorld from '../components/HelloWorld.vue'
import HomeInfo from '../views/home-component/HomeInfo.vue'
import FutureFuc from '../views/home-component/FutureFuc.vue'
import CandyLib from '../views/home-component/CandyLib.vue'
import ShareStore from '@/store/index.js'
const HomeViewLazy = () =>import('../views/HomeView.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: HelloWorld
  },
  {
    path: '/login',
    name: 'login',
    component: () =>import('../views/Login.vue')
  },
  {
    path: '/home',
    name: '/home',
    component: HomeViewLazy,
    children:[{
      path: '/',redirect:'/home/info'
    },
  {
    path: 'info',
    component: HomeInfo
  },
{
  path: 'candy',
  component: CandyLib
},
{path:'future',component:FutureFuc}]
  },
  {
    path: '*',
    name: 'notfound',
    component: NotFound
  }
//   {
//     path: '/info',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
//   }
 ]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})
// 路由守卫

// router.beforeEach((to, from, next) => {

//   let token = ShareStore.getAction('token') // 怎么拿token？

//   if (to.name === 'home' || to.path === '/login') {
//     next();
//     // 这个地方，拿上token，取后端判断


//   } else if (token) {
//     next()
//   } else { // 用户有没有登录
//     next('/login')
//   }
// })


export default router