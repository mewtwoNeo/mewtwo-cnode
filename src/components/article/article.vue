<template>
  <div v-html="article" class="article"></div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  import * as types from '../../store/types'
  import marked from 'marked'
  import hljs from 'highlight.js'
  import 'highlight.js/styles/default.css'

  marked.setOptions({
    highlight: function (code) {
      return hljs.highlightAuto(code).value
    }
  })

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
        article: state => marked(state.cnode.article.content)
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
    margin:20px;
  }
</style>
