<template>
  <div>
    <mu-appbar title="首页" class="appBar"  >
      <mu-icon-button icon='menu' slot="left" @click="toggle(true)"/>
      <mu-icon-button icon='add' slot="right"/>
    </mu-appbar>
    <mu-drawer
      :open="open"
      :docked="docked"
      @close="toggle()"
      class="drawer">
      <mu-list @itemClick="docked ? '' : toggle()">
        <mu-list-item title="mewtwo">
          <mu-avatar :size="30" icon="assignment" backgroundColor="blue" slot="leftAvatar" />
        </mu-list-item>
        <mu-list-item title="登陆">
          <mu-icon slot="left" value="person_outline"/>
        </mu-list-item>
      </mu-list>
      <mu-divider />
      <mu-list @itemClick="docked ? '' : toggle()">
        <mu-list-item title="全部" to="{path:'list',params:{tab: all}}" >
          <mu-icon slot="left" value="list"/>
        </mu-list-item>
          <mu-list-item title="精华" to="list/good">
            <mu-icon slot="left" value="thumb_up"/>
          </mu-list-item>
        <mu-list-item title="分享">
          <mu-icon slot="left" value="share"/>
        </mu-list-item>
        <mu-list-item title="问答">
          <mu-icon slot="left" value="help_outline"/>
        </mu-list-item>
        <mu-list-item title="招聘">
          <mu-icon slot="left" value="supervisor_account"/>
        </mu-list-item>
      </mu-list>
      <mu-divider />
      <mu-list @itemClick="docked ? '' : toggle()">
        <mu-list-item title="消息">
          <mu-badge slot="left" content="10" class="demo-icon-badge" circle secondary>
            <mu-icon value="notifications_none"/>
          </mu-badge>
        </mu-list-item>
        <mu-list-item title="关于">
          <mu-icon slot="left" value="info_outline"/>
        </mu-list-item>
        <mu-list-item title="退出">
          <mu-icon slot="left" value="exit_to_app"/>
        </mu-list-item>
      </mu-list>
    </mu-drawer>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        open: false,
        docked: true
      }
    },
    methods: {
      toggle (flag) {
        this.open = !this.open
        this.docked = !flag
      }
    }
  }
</script>

<style lang="css">
  .appBar {
    text-align: center;
  }
  .drawer{
    text-align: left;
  }
</style>
