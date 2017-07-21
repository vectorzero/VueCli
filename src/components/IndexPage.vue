<template>
  <div>
    <div class="articleDiv">
      <h3>Article</h3>
      <h4>{{ title }} --- {{ author }}</h4>
      <div @click="dialogVisible = true">{{ digest }}...</div>
      <el-button type="primary" @click="changeArticle">换一篇</el-button>
    </div>
    <div class="article">
      <el-dialog
        :title="title"
        :visible.sync="dialogVisible">
        <h4>作者：{{ author }}</h4>
        <p v-html="article"></p>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>

    <div class="countWrap">
      <div @click="showMovie()" :class="{activeDiv:isActiveI}">
        <h3>Movie</h3>
      </div>
      <div @click="showMusic()" :class="{activeDiv:isActiveII}">
        <h3>Music</h3>
      </div>
      <div @click="showPicture()" :class="{activeDiv:isActiveIII}">
        <h3>Picture</h3>
      </div>
    </div>
    <!--<div class="uploadDiv">
      <ToDo></ToDo>
    </div>-->
    <div class="showWrap">
      <v_movie v-show="Movie"></v_movie>
      <v_music v-show="Music"></v_music>
      <v_picture v-show="Picture"></v_picture>
    </div>
  </div>
</template>

<script>
import v_movie from '../views/v_movie.vue'
import v_music from '../views/v_music.vue'
import v_picture from '../views/v_picture.vue'
import ToDo from './ToDo'
export default {
  name:'IndexPage',
  data(){
    return{
      author: '',
      digest: '',
      title: '',
      article: '',
      Movie: true,
      Music: false,
      Picture: false,
      isActiveI: true,
      isActiveII: false,
      isActiveIII: false,
      dialogVisible: false
    }
  },
  components:{
    'ToDo':ToDo,
    'v_movie':v_movie,
    'v_music':v_music,
    'v_picture': v_picture
  },
  methods: {
    showMovie() {
      this.Movie = true;
      this.Music = false;
      this.Picture = false;
      this.isActiveI = true;
      this.isActiveII = false;
      this.isActiveIII = false;
    },
    showMusic() {
      this.Music = true;
      this.Movie = false;
      this.Picture = false;
      this.isActiveII = true;
      this.isActiveI = false;
      this.isActiveIII = false;
    },
    showPicture() {
      this.Music = false;
      this.Movie = false;
      this.Picture = true;
      this.isActiveII = false;
      this.isActiveI = false;
      this.isActiveIII = true;
    },
    getArticle() {
      let _this = this;
      this.$http.get('/article/random?dev=1')
        .then(function(res){
          _this.article = res.data.data.content;
          _this.title = res.data.data.title;
          _this.author = res.data.data.author;
          _this.digest = res.data.data.digest;
        })
    },
    changeArticle() {
      this.getArticle();
    }
  },
  mounted() {
    this.getArticle();
  }
}
</script>

<style lang="less">
  .articleDiv {
    position: relative;
    border: 1px solid #fff;
    background: #fff;
    box-shadow: 4px 4px 4px #ccc;
    width: 1520px;
    height: 120px;
    margin-left: 50px;
    padding: 10px 20px;
    overflow: auto;
    text-align: center;
    div {
      cursor: pointer;
    }
    button {
      position: absolute;
      bottom: 10px;
      right: 50px;
      z-index: 555;
    }
  }
  .article {
    text-align: center;
    h4 {
      margin-bottom: 5px;
    }
    p{
      text-align: left;
      text-indent: 2em;
      line-height: 2.5;
    }
  }
  .countWrap {
    width: 1620px;
    display: flex;
    div {
      cursor: pointer;
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
      height: 100px;
      margin: 50px;
      border: 1px solid #fff;
      border-radius: 5px;
      background: #fff;
      box-shadow: 4px 4px 4px #ccc;
    }
  }
  .activeDiv {
    box-shadow: 8px 8px 8px green!important;
  }
  .showWrap {
    width: 1520px;
    margin-bottom: 50px;
    margin-left: 50px;
    border: 1px solid #fff;
    border-radius: 5px;
    background: #fff;
    box-shadow: 4px 4px 4px #ccc;
    overflow: auto;
  }
  .uploadDiv {
    display: flex;
    margin-top: 100px;
    justify-content: center;
  }
  .showWrap {
    table {
      border-collapse: collapse;
      border-spacing: 0;
      margin: 0 auto;
      tr {
        border: 1px solid #ddd;
      }
      th,td {
        padding: 10px;
        text-align: center;
      }
      th {
        text-transform: uppercase;
        font-size: 14px;
        letter-spacing: 1px;
      }
      td {
        border: 1px solid #ddd;
      }
    }
  }
</style>
