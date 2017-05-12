import Vue from 'vue'
import VueRouter from 'vue-router'

// 使用vue-router
Vue.use(VueRouter)

import pageTransition from '../components/pageTransition/pageTransition'
import list from '../components/list/list'
import home from '../views/home/home'
import article from '../views/article/article'

const routes = [
  {
    path: '/',
    component: pageTransition,
    name: 'pageTransition',
    children: [
      {
        path: 'home',
        component: home,
        name: 'home',
        children: [
          {
            path: ':tab',
            component: list,
            name: 'list'
          }
        ]
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
