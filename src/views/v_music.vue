<template>
  <table>
    <tr>
      <th>飙升榜</th>
      <td v-for="music in MusicI">
        {{music.name}}
        <!--<img :src="music.album.picUrl">-->
      </td>
    </tr>
    <tr>
      <th>新歌榜</th>
      <td v-for="music in MusicII">
        {{music.name}}
        <!--<img :src="music.album.picUrl">-->
      </td>
    </tr>
    <tr>
      <th>原创榜</th>
      <td v-for="music in MusicIII">
        {{music.name}}
        <!--<img :src="music.album.picUrl">-->
      </td>
    </tr>
    <tr>
      <th>KTV麦榜</th>
      <td v-for="music in MusicIV">
        {{music.name}}
        <!--<img :src="music.album.picUrl">-->
      </td>
    </tr>
    <tr>
      <th>华语金曲榜</th>
      <td v-for="music in MusicV">
        {{music.name}}
        <!--<img :src="music.album.picUrl">-->
      </td>
    </tr>
  </table>
</template>
<script>
  export default {
    name: '',
    data() {
      return {
        MusicI: [],
        MusicII: [],
        MusicIII: [],
        MusicIV: [],
        MusicV: []
      }
    },
    methods: {
      getMusicI() {
        let _this = this;
        this.$http.get('/list/detail?id=19723756')
          .then(function (res) {
            res.data.result.tracks.slice(0,10).forEach(music=>{
              _this.MusicI.push(music);
            })
          })
          .catch(function(error){
            console.log(error)
          })
      },
      getMusicII() {
        let _this = this;
        this.$http.get('/list/detail?id=3779629')
          .then(function (res) {
            res.data.result.tracks.slice(0,10).forEach(music=>{
              _this.MusicII.push(music);
            })
          })
          .catch(function(error){
            console.log(error)
          })
      },
      getMusicIII() {
        let _this = this;
        this.$http.get('/list/detail?id=2884035')
          .then(function (res) {
            res.data.result.tracks.slice(0,10).forEach(music=>{
              _this.MusicIII.push(music);
            })
          })
          .catch(function(error){
            console.log(error)
          })
      },
      getMusicIV() {
        let _this = this;
        this.$http.get('/list/detail?id=21845217')
          .then(function (res) {
            res.data.result.tracks.slice(0,10).forEach(music=>{
              _this.MusicIV.push(music);
            })
          })
          .catch(function(error){
            console.log(error)
          })
      },
      getMusicV() {
        let _this = this;
        this.$http.get('/list/detail?id=4395559')
          .then(function (res) {
            res.data.result.tracks.slice(0,10).forEach(music=>{
              _this.MusicV.push(music);
            })
          })
          .catch(function(error){
            console.log(error)
          })
      }
    },
    mounted() {
      this.getMusicI();
      this.getMusicII();
      this.getMusicIII();
      this.getMusicIV();
      this.getMusicV();
    }
  }
</script>
<style scoped>
  img {
    width: 20px;
    height: 20px;
  }
</style>
