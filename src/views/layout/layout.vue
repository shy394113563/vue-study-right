<template>
  <el-container class="home_container">
    <!--左侧菜单栏-->
    <el-aside width="200px">
      <Aside></Aside>
    </el-aside>
    <!--页面主体区域-->
    <el-container>
      <!--右侧头部-->
      <el-header>
        <Navbar></Navbar>
      </el-header>
      <!--右侧主体内容-->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Aside from './components/aside'
import Navbar from './components/navbar'
export default {
  name: 'Home',
  components: {
    Aside,
    Navbar,
  },
  methods: {},
}
</script>
<style lang="less" scoped>
.home_container {
  height: 100%;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #545c64;
  line-height: 200px;
  .el-menu {
    border: none;
  }
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
