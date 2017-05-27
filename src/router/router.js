import Vue from 'vue'
import VueRouter from 'vue-router'

// 使用vue-router
Vue.use(VueRouter)

import {pageTransition} from '@/components/'
import home from '@/views/home/home'
import article from '@/views/article/article'

const routes = [
  {
    path: '',
    redirect: 'all'
  },
  {
    path: '/',
    component: pageTransition,
    name: 'pageTransition',
    children: [
      {
        path: ':listId',
        component: home,
        name: 'home'
      },
      {
        path: 'article/:topicId',
        component: article,
        name: 'article'
      }
    ]
  }
]

// 实例化vue-router
const router = new VueRouter({
  // 开启html History模式
  // mode: 'history',
  routes
})

export default router
