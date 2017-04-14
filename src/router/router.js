import Vue from 'vue'
import VueRouter from 'vue-router'

// 使用vue-router
Vue.use(VueRouter)

import pageTransition from '../components/pageTransition/pageTransition.vue'
import list from '../views/list/List.vue'
import article from '../views/article/article.vue'

const routes = [
  {
    path: '/',
    component: pageTransition,
    name: 'pageTransition',
    children: [
      {
        path: '',
        component: list,
        name: 'list'
      },
      {
        path: '/article/:topicId',
        component: article,
        name: 'article'
      }
    ]
  }
]

// 实例化vue-router
export default new VueRouter({
  // 开启html History模式
  // mode: 'history',
  routes
})
