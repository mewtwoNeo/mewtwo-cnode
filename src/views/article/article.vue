<template>
  <div v-html="article" class="markdown-body article"></div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  import * as types from '@/vuex/types'

  export default {
    data () {
      return {
        topicId: this.$route.params.topicId
      }
    },
    mounted () {
      this.getTopicId(this.topicId)
    },
    computed: {
      ...mapState({
        article: state => {
          return state.cnode.article.content
        }
      })
    },
    methods: {
      ...mapActions({
        getTopicId: [types.GET_TOPIC_ID]
      })
    }
  }
</script>

<style lang="css">
  .article {
    padding:0 10px;
  }
</style>
