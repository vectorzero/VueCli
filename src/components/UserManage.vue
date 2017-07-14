<template>
  <div>
    <div class="searchDiv">
      <el-input
        placeholder="请输入搜索内容"
        icon="search"
        :on-icon-click="handleIconClick">
      </el-input>
      <div><el-button>新建用户</el-button></div>
      <div><el-button>新建管理员</el-button></div>
    </div>
    <div>
      <el-table :data="tableData">
        <el-table-column label="序号" prop="num"></el-table-column>
        <el-table-column label="昵称" prop="name"></el-table-column>
        <el-table-column label="邮箱" prop="email"></el-table-column>
        <el-table-column label="权限" prop="power"></el-table-column>
        <el-table-column label="状态" prop="status"></el-table-column>
        <el-table-column label="创建日期" prop="date"></el-table-column>
        <el-table-column label="操作" width="200">
          <template scope="scope">
            <el-button size="small">编辑</el-button>
            <el-button size="small" type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="paginationDiv">
      <el-pagination
        :page-size="100"
        layout="prev, pager, next, jumper"
        :total="1000">
      </el-pagination>
    </div>
  </div>
</template>
<script>
  export default {
    name: '',
    data () {
      return {
        tableData:[]
      }
    },
    methods: {
      handleIconClick() {
          alert('hello');
      },
      getTableData() {
        this.$http('http://localhost:8080/static/tableData.json')
          .then((response)=>{
            this.tableData = response.data.tableData
          })
          .catch((response)=>{
            console.log(response)
          })
      }
    },
    mounted(){
        this.getTableData();
    }
  }
</script>
<style scoped lang="less">
  .searchDiv {
    display: flex;
    margin-bottom: 50px;
    .el-input {
      width: 800px;
    }
    div {
      margin-right: 20px;
    }
  }
  .paginationDiv {
    margin-top: 40px;
    display: flex;
    justify-content: center;
  }
</style>
