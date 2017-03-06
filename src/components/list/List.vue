<template>
  <div class="demo-infinite-container">
    <mu-list>
        <router-link :to="{name:'article',params:{topicId: topic.id}}" v-for="topic in list">
          <mu-list-item :title="topic.title" titleClass="textLeft" >
            <mu-avatar :src="topic.author.avatar_url" slot="leftAvatar"/>
            <span slot="right">{{ topic.last_reply_at | MMDD('-') }}</span>
          </mu-list-item>
          <mu-divider/>
        </router-link>
    </mu-list>
    <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  import * as types from '../../store/types'
  import utils from './../../filters/utils'

  export default {
    data () {
      return {
        // 页数
        page: 1,
        // 每页请求条数
        limit: 10,
        // 总数条数
        num: 10,
        // 控制加载更多显示
        loading: false,
        scroller: null
      }
    },
    filters: {
      MMDD: utils.MMDD
    },
    mounted () {
      this.getTopics([this.page, 'ask', this.limit])
      this.scroller = this.$el
    },
    computed: mapState({
      list: state => state.cnode.list
    }),
    methods: {
      ...mapActions({
        getTopics: [types.GET_TOPICS]
      }),
      loadMore () {
        // 显示加载更多
        this.loading = true
        setTimeout(() => {
          // 加载更多
          this.getTopics([this.page += 1, 'ask', this.limit]).then(() => {
            this.num += this.limit
            // 隐藏加载更多
            this.loading = false
          })
        }, 2000)
      }
    }
  }
</script>

<style lang="css">
  .textLeft {
    text-align: left;
  }
  .demo-infinite-container{
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    border: 1px solid #d9d9d9;
  }
</style>
