<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class='nav'>
        <el-button @click='prePage'>后退</el-button>
        <router-link to="/login">登录</router-link>
        <router-link to="/">首页</router-link>
        <router-link to="/hello">Hello</router-link>
        <router-link to="/hi">Hi</router-link>
        <router-link to="/vux">Vux</router-link>
        <el-button @click='nextPage'>前进</el-button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    prePage(){
      this.$router.go(-1);
    },
    nextPage(){
      this.$router.go(1);
    }
  }
}
</script>

<style lang='less'>
@import '~vux/src/styles/reset.less';
    #app {
      position: fixed;
      width: 500px;
      height: 500px;
      left: 50%;
      top: 50%;
      margin-left: -250px;
      margin-top: -350px;
      text-align: center;
    }
    .nav {
      a {
        text-decoration: none;
        margin: auto 20px;
      }
    }
</style>
