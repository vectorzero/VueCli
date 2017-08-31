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
        <th>主演</th>
        <td v-for="movie in movieList">
          <p v-for="casts in movie.casts">{{ casts.name}}</p>
        </td>
      </tr>
      <tr>
        <th>类型</th>
        <td v-for="movie in movieList">
          <p v-for="type in movie.genres">{{ type }}</p>
        </td>
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
        movieList:[],
        movieTitle: [],
        currentPage: 1,
      }
    },
    methods: {
      getMovieComing() {
        let _this = this;
        this.$http.get('/api/movie/coming_soon?count=10&start='+_this.currentPage*10)
          .then(function (res) {
//            res.data.subjects.forEach(movie=>{
//              _this.movieList.push(movie);
//            })
            _this.movieList = res.data.subjects;
          })
          .catch(function(error){
            console.log(error)
          })
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        this.getMovieComing(this.currentPage*10);
      }
    },
    mounted() {
      this.getMovieComing();
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
