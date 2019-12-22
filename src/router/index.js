import Vue from 'vue'
import Router from 'vue-router'

import index from '@/pages/article/index/index.vue'
import home from '@/pages/article/index/home.vue'
import detail from '@/pages/article/detail'
import edit from '@/pages/article/edit'
import commonpage from '@/pages/commonPages/commonpage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: commonpage,
      redirect: '/home',
      children: [
        {
          path: '/index',
          name: 'index',
          component: index
        },
        {
          path: '/detail',
          name: 'detail',
          component: detail
        },
        {
          path: '/edit',
          name: 'edit',
          component: edit
        },
        {
          path: '/home',
          name: 'home',
          component: home
        }
      ]
    }
  ]
})
