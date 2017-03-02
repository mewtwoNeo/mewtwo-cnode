<template>
  <div class="demo-infinite-container">
    <mu-list>
      <template v-for="item in list">
        <mu-list-item title="这个周末一起吃饭么?">
          <mu-avatar :src="avatar1" slot="leftAvatar"/>
          <span slot="describe">
            <span style="color: rgba(0, 0, 0, .87)">Myron Liu -</span> 周末要来你这里出差，要不要一起吃个饭呀，实在编不下去了,哈哈哈哈哈哈
          </span>
        </mu-list-item>
        <mu-divider/>
      </template>
    </mu-list>
    <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
  </div>
</template>

<script>

  export default {
    data () {
      const list = []
      for (let i = 0; i < 20; i++) {
        list.push('item' + (i + 1))
      }
      return {
        list,
        num: 10,
        loading: false,
        scroller: null
      }
    },
    mounted () {
      this.scroller = this.$el
    },
    methods: {
      loadMore () {
        this.loading = true
        setTimeout(() => {
          for (let i = this.num; i < this.num + 10; i++) {
            this.list.push('item' + (i + 1))
          }
          this.num += 10
          this.loading = false
        }, 2000)
      }
    }
  }
</script>

<style lang="css">
  .demo-infinite-container{
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    border: 1px solid #d9d9d9;
  }
</style>
