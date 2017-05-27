<template>
  <div class="menu" @click.prevent="clickMenuList">
    <mu-list>
      <mu-list-item title="mewtwo">
        <mu-avatar :size="30" icon="assignment" backgroundColor="blue" slot="leftAvatar" />
      </mu-list-item>
      <mu-list-item title="登陆">
        <mu-icon slot="left" value="person_outline"/>
      </mu-list-item>
    </mu-list>
    <mu-divider />
    <mu-list>

      <mu-list-item title="全部" :to="{path: 'all'}" >
        <mu-icon slot="left" value="list"/>
      </mu-list-item>

      <mu-list-item title="精华" :to="{path: 'good'}">
        <mu-icon slot="left" value="thumb_up"/>
      </mu-list-item>

      <mu-list-item title="分享" :to="{path: 'share'}">
        <mu-icon slot="left" value="share"/>
      </mu-list-item>


      <mu-list-item title="问答" :to="{path: 'ask'}">
        <mu-icon slot="left" value="help_outline"/>
      </mu-list-item>

      <mu-list-item title="招聘" :to="{path: 'job'}">
        <mu-icon slot="left" value="supervisor_account"/>
      </mu-list-item>

    </mu-list>
    <mu-divider />
    <mu-list>
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
  </div>
</template>

<script>

  export default {
    methods: {
      clickMenuList () {
        this.$emit('clickMenuList')
      }
    }
  }

</script>

<style lang="css">
  .menu{
    text-align: left;
  }
</style>
