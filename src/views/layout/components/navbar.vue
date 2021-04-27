<template>
  <div>
    {{ userName }}
    <el-button type="info" @click="exit">退出</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: null,
    }
  },
  created() {
    this.userName = this.$store.state.userName
    console.log(111111, this.userName)
  },
  methods: {
    exit() {
      localStorage.clear()
      this.$router.push('/login')
      window.location.reload()
    },
  },
}
</script>
