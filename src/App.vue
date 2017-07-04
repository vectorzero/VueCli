<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p><i class="fa fa-fw fa-weibo"></i></p>
    <router-link to="/">Go to Hello</router-link>
    <router-link to="/hi">Go to Hi</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
