<template>
  <div>
    <mu-appbar :title='title' class="appBar"  >
      <mu-icon-button icon='menu' slot="left" @click="clickMenu"/>
      <mu-icon-button icon='add' slot="right"/>
    </mu-appbar>
  </div>
</template>

<script>
  export default {
    props: {
      title: String
    },
    methods: {
      clickMenu () {
        this.$emit('clickMenu')
      }
    }
  }
</script>

<style lang="css">
  .appBar {
    text-align: center;
  }
</style>
