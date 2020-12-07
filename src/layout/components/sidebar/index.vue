<template>
  <div class="sidebar">
    <dl class="list">
      <dd
        v-for="(item, index) in list"
        :key="index"
        class="item">
        <router-link
          class="link"
          :to="item.path">
          <i :class="'iconfont ' + item.icon"></i>
          <span>{{item.name}}</span>
        </router-link>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  components: {},
  data () {
    return {
      list: [
        {
          name: '首页',
          icon: 'icon-shouye',
          path: '/home'
        },
        {
          name: '找房',
          icon: 'icon-sousuo',
          path: '/house'
        },
        {
          name: '我的',
          icon: 'icon-wode',
          path: '/user'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  .sidebar {
    position: relative;
    height: 50px;
    .list {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 10;
      display: flex;
      background: #ffffff;
      border-top: 1px solid #eeeeee;
    }
    .item {
      flex: 1;
    }
    .link {
      display: block;
      text-align: center;
      color: #bbbbbb;
      line-height: 0;
      padding: 5px 0;
      &.router-link-active {
        color: #21b97a;
      }
      i {
        line-height: 20px;
        font-size: 18px;
      }
      span {
        display: block;
        line-height: 20px;
        font-size: 12px;
      }
    }
  }
</style>
