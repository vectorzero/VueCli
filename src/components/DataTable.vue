<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      border
      tooltip-effect="dark"
      style="width: 100%"
      height="250">
      <el-table-column
        fixed
        label="日期"
        width="120">
        <template scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <el-button
            size="small"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="small"
            type="danger"
            @click.native.prevent="deleteRow(scope.$index, tableData)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="paginationDiv">
      <el-pagination
        :page-size="100"
        layout="prev, pager, next, jumper"
        :total="1000">
      </el-pagination>
    </div>
    <el-dialog
      title="提示"
      @open="open()"
      :visible.sync="dialogVisible"
      size="tiny"
      :modal=false
      :before-close="handleClose">
      <div class="editDiv">
        <p>序号：{{tableIndex}}</p>
        <p><span>日期：</span><el-input v-model="detailData.date"></el-input></p>
        <p><span>姓名：</span><el-input v-model="detailData.name"></el-input></p>
        <p><span>地址：</span><el-input v-model="detailData.address"></el-input></p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    name: '',
    data () {
      return {
        dialogVisible: false,
        tableIndex: 0,
        detailData: {},
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []
      }
    },
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      handleEdit(index, rows) {
        this.dialogVisible = true;
        this.tableIndex = index;
        this.detailData = rows;
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      open() {
         //console.log('hello')
      }
    },
  }
</script>
<style lang="less" scoped>
  .paginationDiv {
    margin-top: 20px;
  }
  .editDiv {
    display: inline-block;
    width: 300px;
    .el-input {
      margin: 10px auto;
      width: 200px;
    }
  }
</style>
