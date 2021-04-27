<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import { initDynamicRoutes } from '@/router/index.js'
export default {
  created() {
    initDynamicRoutes()
  },
}
</script>
<style lang="less"></style>
