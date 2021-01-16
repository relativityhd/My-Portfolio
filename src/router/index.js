import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Gallery'
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
    meta: {
      title: 'Profile'
    }
  },
  {
    path: '/stats',
    name: 'Stats',
    component: () => import('../views/Stats.vue'),
    meta: {
      title: 'Stats'
    }
  },
  {
    path: '/imprint',
    name: 'Imprint',
    component: () => import('../views/Imprint.vue'),
    meta: {
      title: 'Imprint'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `Tobias Hölzer - ${to.meta.title || 'Portfolio'}`
  next()
})

export default router
