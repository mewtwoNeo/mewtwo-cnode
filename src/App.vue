<template>
  <div id="app">
    <appBar></appBar>
    <router-view class="main"></router-view>
    <bottomNavigation></bottomNavigation>
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  .main{padding: 56px 0;}
</style>
