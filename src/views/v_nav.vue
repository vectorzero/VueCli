<template>
  <div class="NavDiv">
    <el-menu default-active="2" class="el-menu-vertical-demo" theme="dark" :router="true">
      <el-menu-item index="/"><i class="el-icon-menu"></i>仪表盘</el-menu-item>
      <el-menu-item index="/usermanage"><i class="el-icon-setting"></i>用户管理</el-menu-item>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-message"></i>内容管理</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="/datatable">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="3-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="3-4">
          <template slot="title">选项4</template>
          <el-menu-item index="3-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="4"><i class="el-icon-setting"></i>关于</el-menu-item>
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
</style>
