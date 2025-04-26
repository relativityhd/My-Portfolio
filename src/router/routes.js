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
