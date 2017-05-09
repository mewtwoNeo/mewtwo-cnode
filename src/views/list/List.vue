<template>
    <div class="topics-infinite-container">
      <appBar></appBar>
      <mu-list>
        <router-link :to="{name:'article',params:{topicId: topic.id}}" v-for="topic in list" :key='topic.id' >
          <mu-row gutter class="topics-header">
            <mu-col width="20">
              <mu-badge :content="topic.tab | getTabInfo(topic.good,topic.top)"  v-if='topic.top||topic.good'  secondary/>
              <mu-badge :content="topic.tab | getTabInfo(topic.good,topic.top)"  v-else />
            </mu-col>
            <mu-col width="80" class="topics-title">{{topic.title}}</mu-col>
          </mu-row>
          <mu-row gutter>
            <mu-col width="20"><mu-avatar :src="topic.author.avatar_url" /></mu-col>
            <mu-col width="40" class="textLeft">
              <mu-col>
                {{topic.author.loginname}}
              </mu-col>
              <mu-col>
                {{topic.create_at | timeago('zh_CN')}}
              </mu-col>
            </mu-col>
            <mu-col width="40" class="textRight topics-tips-right">
              <mu-col >
                <mu-badge :content="topic.reply_count | toString"   primary/>/<mu-badge :content="topic.visit_count | toString"   />
              </mu-col>
              <mu-col >
                <span>{{ topic.last_reply_at | timeago('zh_CN') }}</span>
              </mu-col>
            </mu-col>
          </mu-row>
          <mu-divider/>
        </router-link>
      </mu-list>
      <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
    </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  import * as types from '@/vuex/types'
  import filters from '@/plugins/filters'
  import timeago from 'timeago.js'
  import appBar from '@/components/appBar/appBar.vue'

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
      MMDD: filters.MMDD,
      getTabInfo: filters.getTabInfo,
      toString: String,
      timeago: timeago().format
    },
    mounted () {
      if (this.now.list.length === 0) {
        this.getTopics([this.now.pageNo, this.active])
      }
      this.scroller = this.$el
    },
    components: {
      appBar
    },
    computed: {
      ...mapState({
        now: state => state.list.now,
        active: state => state.list.active
      })
    },
    methods: {
      ...mapActions({
        getTopics: [types.GET_TOPICS]
      }),
      loadMore () {
        // 显示加载更多
        this.loading = true
        setTimeout(() => {
          // 加载更多
          this.getTopics([this.page += 1, 'all', this.limit]).then(() => {
            this.num += this.limit
            // 隐藏加载更多
            this.loading = false
          })
        }, 500)
      }
    }
  }
</script>

<style lang="css">
  .topics-infinite-container {
    line-height: 24px;
  }
  .topics-header {
    padding: 5px 0;
    font-weight: 900;
  }
  .topics-title {
    font-size: 14px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    text-align: left;
  }
  .topics-tips-right {
    padding-right: 20px;
  }

</style>
