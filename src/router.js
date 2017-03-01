/**
 * Created by dengchongjing on 2017/3/1.
 */

const list = resolve => require(['./components/list/List.vue'], resolve)

export default [
  {path: '/list',
    name: 'list',
    component: list
  }]

