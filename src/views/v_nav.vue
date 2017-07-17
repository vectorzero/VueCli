<template>
  <div class="NavDiv">
    <el-menu default-active="2" class="el-menu-vertical-demo" theme="dark" :router="true">
      <el-menu-item index="/"><i class="fa fa-tachometer fa-lg"></i>仪表盘</el-menu-item>
      <el-menu-item index="/usermanage"><i class="fa fa-user fa-lg"></i>用户管理</el-menu-item>
      <el-submenu index="3">
        <template slot="title"><i class="fa fa-asterisk fa-lg"></i>内容管理</template>
        <el-menu-item-group>
          <template slot="title">文章</template>
          <el-menu-item index="/">文章管理</el-menu-item>
          <el-menu-item index="/datatable">添加文章</el-menu-item>
          <el-menu-item index="3-2">评论管理</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="投票">
          <el-menu-item index="/">投票管理</el-menu-item>
          <el-menu-item index="3-3">添加投票</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/vux"><i class="fa fa-tachometer fa-lg"></i>移动端</el-menu-item>
      <el-menu-item index="4"><i class="fa fa-tachometer fa-lg"></i>关于</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
  export default {
    name: '',
    data () {
      return {}
    }
  }
</script>
<style scoped lang="less">
  .NavDiv {
    width: 200px;
    height: e("calc(100% - 100px)");
    background: #324157;
  }
  i {
    margin-right: 10px;
  }
</style>
