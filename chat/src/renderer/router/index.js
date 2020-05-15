import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'landing-page',
    //   component: () => import('../components/sys/LandingPage')
    // },
    {
      path: '/chat',
      name: 'chat',
      component: () => import('../views/chat')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/contacts')
    },
    // {
    //   path: '/',
    //   name: 'home',
    //   component: () => import('../views/home')
    // },
    {
      path: '*',
      redirect: '/chat'
    }
  ]
})
