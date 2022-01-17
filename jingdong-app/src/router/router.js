import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  { path: '/', name: 'Home', component: () => import(/*webpackChunkName: "home" */ '../views/home/Home.vue') },
  { path: '/shop/:id', name: 'Shop', component: () => import(/*webpackChunkName: "shop" */ '../views/shop/shop.vue') },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/*webpackChunkName: "register" */ '../views/register/register.vue'),
    beforeEnter(to, from, next) {
      const { isLogin } = localStorage
      if (isLogin) {
        //登录后访问不了login
        next({ name: 'Home' })
      } else {
        next()
      }
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/*webpackChunkName: "login" */ '../views/login/login.vue'),

    //只有在进入一个与之前不同的路由前才会被触发
    //在每一次访问login页面前都会执行
    beforeEnter(to, from, next) {
      const { isLogin } = localStorage
      if (isLogin) {
        //登录后访问不了login
        next({ name: 'Home' })
      } else {
        next()
      }
    }
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes//缩写，相当于routes: routes
})
//访问任何一个页面前都会执行
router.beforeEach((to, from, next) => {
  //isLogin不能一直是未登录。所以从本地存储里取login的状态
  let { isLogin } = localStorage
  const { name } = to
  const isLoginOrRegister = (name === 'Login' || name === 'Register')
  if (isLogin || isLoginOrRegister) {
    // already login
    next()
  } else {
    // unlogin且页面不是login页面（比如没登录访问Home就会跳到login）
    next({ name: 'Login' })
  }
})
export default router