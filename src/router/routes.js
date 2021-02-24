import Home from '../views/Home.vue'

export const routes = [
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
