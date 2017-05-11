<template>
  <div v-html="content" class="markdown-body article"></div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'

  export default {
    data () {
      return {
        topicId: this.$route.params.topicId
      }
    },
    mounted () {
      this.getTopic(this.topicId)
    },
    computed: {
      ...mapState({
        content: state => state.article.article.content
      })
    },
    methods: {
      ...mapActions([
        'getTopic'
      ])
    }
  }
</script>

<style lang="css">
  .article {
    padding:0 10px;
  }
</style>
