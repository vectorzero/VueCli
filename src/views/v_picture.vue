<template>
  <div>
    <div class="picWrap">
      <div v-for="pic in picList" class="pic"><img :src="pic.url"></div>
    </div>
    <div class="paginationDiv">
      <el-pagination
        :page-size="10"
        @current-change="handleCurrentChange"
        layout="prev, pager, next, jumper"
        :total="500">
      </el-pagination>
    </div>
  </div>
</template>
<script>
  export default {
    name: '',
    data() {
      return {
        picList: []
      }
    },
    methods: {
      getPicList(page) {
        let _this = this;
        this.$http.get('/pic/10/'+page)
          .then(function(res){
//            res.data.results.forEach(pic=>{
//              _this.picList.push(pic)
//            })
              _this.picList = res.data.results;
          })
          .catch(function(error){
            console.log(error)
          })
      },
      handleCurrentChange(val) {
        this.getPicList(val);
      }
    },
    mounted() {
      this.getPicList(1);
    }
  }
</script>
<style scoped>
  .picWrap {
    width: 100%;
    height: 300px;
    display: flex;
  }
  .pic {
    flex: 1;
    margin: 10px;
  }
  .pic img {
    width: 300px;
    height: 300px;
  }
  .paginationDiv {
    position: absolute;
    margin-top: 40px;
    left: 38%;
  }
</style>
