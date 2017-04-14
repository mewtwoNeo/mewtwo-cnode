<template>
  <div id="app">
    <router-view class="main"></router-view>
  </div>
</template>

<script>
  import appBar from './components/appBar/appBar.vue'
  import bottomNavigation from './components/bottomNavigation/bottomNavigation.vue'

  export default {
    name: 'app',
    components: {
      appBar,
      bottomNavigation
    }
  }
</script>

<style>
  .main {
    position: absolute;
    height:100%;
    width: 100%;
    overflow: auto;
  }
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

  #app a, #app a:visited {
    text-decoration: none;
    color: #000
  }

</style>
