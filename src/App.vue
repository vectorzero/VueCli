<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class='nav'>
        <router-link to="/login">登录</router-link>
        <router-link to="/">首页</router-link>
        <router-link to="/hello">Hello</router-link>
        <router-link to="/hi">Hi</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang='less'>
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
