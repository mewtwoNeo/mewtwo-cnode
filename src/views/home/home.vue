<template>
  <div class="topics-infinite-container">
    <appBar :title="title" @clickMenu="menuList"/>
    <mu-drawer :open="open" :docked="docked" @close="menuList">
      <menuList @clickMenuList="menuList"/>
    </mu-drawer>
    <router-view></router-view>
    <!--<list :tab="tab"/>-->
  </div>
</template>

<script>
  import appBar from '@/components/appBar/appBar'
  import menuList from '@/components/menuList/menuList'

  export default {
    data () {
      return {
        tab: this.$route.params.tab || 'all', // 从url参数获取列表类型，默认为all
        open: false,
        docked: true,
        title: '首页'
      }
    },
    components: {
      appBar,
      menuList
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
