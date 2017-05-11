import Vue from 'vue'
import VueRouter from 'vue-router'

// 使用vue-router
Vue.use(VueRouter)

import pageTransition from '../components/pageTransition/pageTransition.vue'
import list from '../views/list/list.vue'
import article from '../views/article/article.vue'

const routes = [
  {
    path: '',
    component: pageTransition,
    name: 'pageTransition',
    children: [
      {
        path: '/list/:tab',
        component: list,
        name: 'list'
      },
      {
        path: '/article/:topicId',
        component: article,
        name: 'article'
      },
      {
        path: '',
        component: list,
        name: 'list'
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
