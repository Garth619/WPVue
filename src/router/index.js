import Vue from 'vue'
import Router from 'vue-router'
import Post from '@/components/Post'
import Page from '@/components/Page'
import Archive from '@/components/Archive'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Front',
      component: Page
    },
    {
      path: '/blog', 
      redirect: '/blog/page/1'
    },
    {
      path: '/blog/page/',
      redirect: '/blog/page/1'
    },
    {
      path: '/blog/page/:id',
      name: 'Blog',
      component: Archive
    },
    {
      path: '/post/:id',
      name: 'Post',
      component: Post
    },
    {
      path: '/:id',
      name: 'Page',
      component: Page
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
