<template>
  <div class="wrapper">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <sidebar class="sidebar" />
  </div>
</template>

<script>
import { sidebar } from './components/'

export default {
  name: 'Layout',
  components: {
    sidebar
  },
  computed: {},
  methods: {}
}
</script>

<style lang="less" scoped>
</style>
