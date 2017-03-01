<template>
  <div id="app">
    <list></list>
  </div>
</template>

<script>
  import List from './components/list/List.vue'
  export default {
    name: 'app',
    components: {
      List
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
</style>
