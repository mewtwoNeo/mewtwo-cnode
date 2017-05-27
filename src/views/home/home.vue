<template>
  <div>
    <mu-drawer :open="open" :docked="docked" @close="menuList">
      <menuList @clickMenuList="menuList"/>
    </mu-drawer>
    <div class="main-content">
      <appBar :title="title" @clickMenu="menuList"/>
      <list/>
    </div>
  </div>
</template>

<script>
  import { appBar, menuList, list } from '@/components/'

  export default {
    name: 'home',
    data () {
      return {
        show: 'true',
        open: false,
        docked: true,
        title: '首页'
      }
    },
    components: {
      appBar,
      menuList,
      list
    },
    methods: {
      menuList () { // 操作菜单列表显示隐藏
        this.open = !this.open
        this.docked = !this.docked
      }
    }
  }
</script>

<style lang="css">

</style>
