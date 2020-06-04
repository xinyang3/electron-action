import Vue from 'vue'
import Router from 'vue-router'


const originalPush = Router.prototype.push

// Router.prototype.push = function push (location, onResolve, onReject) {
//   if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
//   return originalPush.call(this, location).catch(err => err)
// }

const VueRouterPush = Router.prototype.push
Router.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

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
    {
      path: '/setting-version',
      name: 'version',
      component: () => import('../views/setting/version')
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
