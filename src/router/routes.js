export const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      title: 'Gallery',
      sitemap: {
        lastmod: new Date(),
        priority: 1,
        changefreq: 'monthly'
      }
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
    meta: {
      title: 'Profile',
      sitemap: {
        lastmod: new Date(),
        priority: 0.8,
        changefreq: 'yearly'
      }
    }
  },
  {
    path: '/stats',
    name: 'Stats',
    component: () => import('../views/Stats.vue'),
    meta: {
      title: 'Stats',
      sitemap: {
        lastmod: new Date(),
        priority: 0.3,
        changefreq: 'yearly'
      }
    }
  },
  {
    path: '/imprint',
    name: 'Imprint',
    component: () => import('../views/Imprint.vue'),
    meta: {
      title: 'Imprint',
      sitemap: {
        lastmod: new Date(),
        priority: 0,
        changefreq: 'never'
      }
    }
  }
]
