<template>
  <mu-paper class="bottomNavigation">
    <mu-bottom-nav :value="bottomNav" shift @change="handleChange" >
      <mu-bottom-nav-item value="all" title="全部" icon="list"/>
        <mu-bottom-nav-item value="good" title="精华" icon="thumb_up"/>
      <mu-bottom-nav-item value="share" title="分享" icon="share"/>
      <mu-bottom-nav-item value="ask" title="问答" icon="help_outline"/>
      <mu-bottom-nav-item value="job" title="招聘" icon="supervisor_account"/>
    </mu-bottom-nav>
  </mu-paper>
</template>

<script>
  export default {
    data () {
      return {
        bottomNav: 'all'
      }
    },
    methods: {
      handleChange (val) {
        this.bottomNav = val
      }
    }
  }
</script>
<style lang="css">
  .bottomNavigation {
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
  }
</style>
