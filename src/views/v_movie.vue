<template>
  <div>
    <table>
      <tr>
        <th>名称</th>
        <td v-for="movie in movieList">{{ movie.title }}</td>
      </tr>
      <tr>
        <th>评分</th>
        <td v-for="movie in movieList">{{ movie.rating.average }}</td>
      </tr>
      <tr>
        <th>类型</th>
        <td v-for="movie in movieList">{{ movie.genres }}</td>
      </tr>
      <tr>
        <th>封面</th>
        <td v-for="movie in movieList"><img :src="movie.images.medium"></td>
      </tr>
    </table>
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
        movieList:[]
      }
    },
    methods: {
      getMovieTop250(start) {
        let _this = this;
        this.$http.get('/api/movie/top250?count=10&start='+start)
          .then(function (res) {
            res.data.subjects.forEach(movie=>{
              _this.movieList.push(movie);
            })
          })
          .catch(function(error){
            console.log(error)
          })
      },
      handleCurrentChange(val) {
        this.getMovieTop250(val*10);
      }
    },
    mounted() {
      this.getMovieTop250(10);
    }
  }
</script>

<style scoped>
  .paginationDiv {
    position: absolute;
    margin-top: 40px;
    left: 38%;
  }
</style>
