<template>
  <el-menu
    class="el-menu-vertical-demo"
    unique-opened
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :router="true"
    :default-active="activePath"
  >
    <!--一级菜单-->
    <el-submenu :index="item.id + ''" v-for="item in menuList" :key="item.id">
      <template slot="title">
        <i :class="iconsObj[item.id]"></i>
        <span>{{ item.authName }}</span>
      </template>
      <!--二级菜单-->
      <el-menu-item :index="'/' + subItem.path" v-for="subItem in item.children" :key="subItem.id" @click="saveActivePath('/' + subItem.path)">{{
        subItem.authName
      }}</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      menuList: [],
      activePath: '',
      iconsObj: {
        100: 'el-icon-user',
        101: 'el-icon-star-off',
        102: 'el-icon-goods',
      },
    }
  },
  methods: {
    saveActivePath(path) {
      this.activePath = path
      localStorage.setItem('activePath', path)
    },
  },
  created() {
    this.menuList = this.$store.state.rightsList
    this.activePath = localStorage.getItem('activePath')
  },
}
</script>
