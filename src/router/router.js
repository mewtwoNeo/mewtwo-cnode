import Vue from 'vue'
import VueRouter from 'vue-router'

// 使用vue-router
Vue.use(VueRouter)

import list from '../components/list/List.vue'

const routes = [
  {path: '/list',
    component: list
  }]

// 实例话vue-router
export default new VueRouter({
  routes
})

