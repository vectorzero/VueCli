<template>
  <div class="headerDiv">
    <div class="headerLeft">
      <div class="logo"></div>
    </div>
    <div class="headerRight">
      <el-menu theme="dark" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1">{{userName}}</el-menu-item>
        <el-submenu index="2">
          <template slot="title">个人中心</template>
          <el-menu-item index="2-1">修改密码</el-menu-item>
          <el-menu-item index="2-2">登出</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>
<script>
  export default {
    name: '',
    data () {
      return {
        userName:'helloworld@123.com'
      }
    }
  }
</script>
<style scoped lang="less">
  .headerDiv {
    display: flex;
  }
  .headerLeft {
    height: 100px;
    width: 200px;
    background-color: #324157;
  }
  .headerRight {
    position: relative;
    display: flex;
    align-items: center;
    color: #B2CBD9;
    height: 80px;
    width: e("calc(100% - 200px)");
    background-color: #324157;
    .el-menu {
      position: absolute;
      right: 50px;
    }
  }
  .logo {
    height: 60px;
    width: 60px;
    background: url("../assets/logo.png") no-repeat;
    background-size: 100% 100%;
    margin-left: 70px;
    margin-top: 20px;
  }
  .user {
    position: absolute;
    right: 200px;
  }
  .center {
    position: absolute;
    right: 100px;
  }

</style>
