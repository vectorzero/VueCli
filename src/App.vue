<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<div class='nav'>-->
        <!--<el-button @click='prePage'>后退</el-button>-->
        <!--<router-link to="/login">登录</router-link>-->
        <!--<router-link to="/">首页</router-link>-->
        <!--<router-link to="/hello">Hello</router-link>-->
        <!--<router-link to="/hi">Hi</router-link>-->
        <!--<router-link to="/vux">Vux</router-link>-->
        <!--<router-link to="/datatable">Table</router-link>-->
        <!--<el-button @click='nextPage'>前进</el-button>-->
    <!--</div>-->
    <v_header></v_header>
    <v_nav></v_nav>
    <div class="contentDiv">
      <router-view></router-view>
      <!--<v_footer></v_footer>-->
    </div>
  </div>
</template>

<script>
  import v_header from './views/v_header'
  import v_nav from './views/v_nav'
  export default {
    name: 'app',
    components:{
      'v_header':v_header,
      'v_nav':v_nav
    },
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
  * {
    box-sizing:border-box;
  }
  html,body {
    height: 100%;
  }
  #app {
    position: relative;
    height: 100%;
    background: #eee;
  }
  .nav {
    margin: 20px auto;
    a {
      text-decoration: none;
      margin: auto 20px;
    }
  }
  .cell {
    text-align: center;
  }
  .contentDiv {
    position: absolute;
    left: 200px;
    top: 50px;
    padding: 50px;
    overflow: auto;
  }
  .icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
