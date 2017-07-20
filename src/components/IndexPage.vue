<template>
  <div>
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
      Movie: true,
      Music: false,
      Picture: false,
      isActiveI: true,
      isActiveII: false,
      isActiveIII: false,
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
    }
  }
}
</script>

<style lang="less">
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
      margin: auto 50px;
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
    margin: 100px auto;
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
