<template>
    <div class="topics-infinite-container">
      <mu-list>
        <router-link :to="{name:'article',params:{topicId: topic.id}}" v-for="topic in now.list" :key='topic.id' >
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
                {{topic.create_at | timeagoFormat }}
              </mu-col>
            </mu-col>
            <mu-col width="40" class="textRight topics-tips-right">
              <mu-col >
                <mu-badge :content="topic.reply_count | toString"   primary/>/<mu-badge :content="topic.visit_count | toString"   />
              </mu-col>
              <mu-col >
                <span>{{ topic.last_reply_at | timeagoFormat }}</span>
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

  export default {
    data () {
      return {
        // 控制加载更多显示
        loading: false,
        scroller: null
      }
    },
    mounted () {
      // 设置目前列表的类型
      this.changeTopicsType(this.$route.params.listId)
      if (this.now.list.length === 0) {
        this.getTopics([this.now.pageNo, this.active])
      }
      this.scroller = this.$el
    },
    watch: {
      '$route' () {
        // 设置目前列表的类型
        this.changeTopicsType(this.$route.params.listId)
        if (this.now.list.length === 0) {
          this.getTopics([this.now.pageNo, this.active])
        }
        this.scroller = this.$el
      }
    },
    computed: {
      ...mapState({
        now: state => state.list.now,
        active: state => state.list.active
      })
    },
    methods: {
      ...mapActions([
        'getTopics',
        'changeTopicsType'
      ]),
      loadMore () {
        // 显示加载更多
        this.loading = true
        setTimeout(() => {
          // 加载更多
          this.getTopics([this.now.pageNo, this.active]).then(() => {
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
    height: 100%;
    width: 100%;
    position: absolute;
    overflow: auto;
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
