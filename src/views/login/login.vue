<template>
  <div class="loginWindow">
    <div class="loginBox">
      <div class="title">Login</div>
      <div class="inputBox">
        <input type="text" name="" required="" v-model="loginForm.username" />
        <label>Username</label>
      </div>
      <div class="inputBox">
        <input type="password" name="" required="" v-model="loginForm.password" />
        <label>password</label>
      </div>
      <input type="submit" name="" value="Submit" @click="login" />
    </div>
  </div>
</template>

<script>
import { initDynamicRoutes } from '@/router/index.js'
export default {
  data() {
    return {
      loginForm: {
        username: null,
        password: null,
      },
    }
  },
  methods: {
    login() {
      this.$http.post('/user', this.loginForm).then((res) => {
        console.log(1111, res)
        if (res.data.meta.status === 200) {
          this.$store.commit('setUserName', res.data.user.username)
          this.$store.commit('setRightList', res.data.user.rights)

          localStorage.setItem('token', res.data.user.token)
          initDynamicRoutes()
          this.$message.success('登录成功！！！')
          this.$router.push('/home')
        } else {
          this.$message.error('用户名或者密码错误！！！')
        }
      })
    },
  },
}
</script>

<style>
.loginWindow {
  height: 100%;
  font-family: sans-serif;
  background-image: url('../../assets/pic/cat.jpg');
  background-size: cover;
}
.loginBox {
  padding: 40px;
  position: absolute;
  width: 400px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgb(0 0 0 / 6%);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}
.title {
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
}

.loginBox .inputBox {
  position: relative;
}
.loginBox .inputBox input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  letter-spacing: 1px;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}
.loginBox .inputBox label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  letter-spacing: 1px;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
}
.loginBox .inputBox input:focus ~ label,
.loginBox .inputBox input:valid ~ label {
  top: -18px;
  left: 0;
  color: #03a9f4;
  font-size: 12px;
}
.loginBox input[type='submit'] {
  background: transparent;
  border: none;
  outline: none;
  color: #fff;
  background: #03a9f4;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
}
</style>
