import Vue from 'vue'
import Router from 'vue-router'

import index from '@/pages/article/index/index.vue'
import home from '@/pages/article/index/home.vue'
import detail from '@/pages/article/detail'
import edit from '@/pages/article/edit'
import commonpage from '@/pages/commonPages/commonpage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history', // 去掉url中的#
  routes: [
    {
      path: '/',
      component: commonpage,
      redirect: '/',
      children: [
        {
          path: '/index',
          name: 'index',
          component: index
        },
        {
          // path: '/detail/:path' + '.html',
          path: '/article/:path',
          name: 'article',
          component: detail
        },
        {
          path: '/edit',
          name: 'edit',
          component: edit
        },
        {
          path: '/',
          name: 'home',
          component: home
        }
      ]
    }
  ]
})
