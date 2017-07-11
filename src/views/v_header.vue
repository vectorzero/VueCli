<template>
  <div class="HeaderDiv">
    <div class="HeaderLeft">
      <div class="logo"></div>
    </div>
    <div class="HeaderRight">
      <el-menu theme="dark" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
      </el-menu>
    </div>
  </div>
</template>
<script>
  export default {
    name: '',
    data () {
      return {
        userName:'hello world'
      }
    }
  }
</script>
<style scoped lang="less">
  .HeaderDiv {
    display: flex;
  }
  .HeaderLeft {
    height: 100px;
    width: 200px;
    background-color: #324157;
  }
  .HeaderRight {
    position: relative;
    display: flex;
    align-items: center;
    color: #B2CBD9;
    height: 80px;
    width: e("calc(100% - 200px)");
    background-color: #324157;
  }
  .logo {
    height: 100px;
    width: 100px;
    background: url("../assets/logo.png") no-repeat;
    background-size: 100% 100%;
    margin-left: 50px;
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
