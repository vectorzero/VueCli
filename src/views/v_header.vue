<template>
  <div class="headerDiv">
    <div class="headerLeft">
      <div class="logo"></div>
    </div>
    <div class="headerRight">
      <el-menu theme="dark" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1">{{userName}}</el-menu-item>
        <el-submenu index="2">
          <template slot="title">个人中心</template>
          <el-menu-item index="2-1">修改密码</el-menu-item>
          <el-menu-item index="2-2">登出</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <div class="weatherDiv">
      <p>
        <span>{{cityName}}--{{weather}}</span>
        <span v-if="weather==='雷阵雨/多云'">
           <svg class="icon"><use xlink:href="#icon-baofengyu"></use></svg>
           <svg class="icon"><use xlink:href="#icon-duoyun"></use></svg>
        </span>
        <span v-if="weather==='雷阵雨/雷阵雨'">
           <svg class="icon"><use xlink:href="#icon-baofengyu"></use></svg>
        </span>
        <span v-if="weather==='多云/多云'">
           <svg class="icon"><use xlink:href="#icon-duoyun"></use></svg>
        </span>
        <span v-if="weather==='小雨/小雨'">
           <svg class="icon"><use xlink:href="#icon-yu"></use></svg>
        </span>
      </p>
    </div>
  </div>
</template>
<script>
  export default {
    name: '',
    data () {
      return {
        userName:'helloworld@123.com',
        weather: '',
        cityName: ''
      }
    },
    methods: {
      getWeather() {
        let _this  = this;
        this.$http.get('/weather/all?city=CHGD070000')
          .then(function(res){
            _this.weather = res.data.weather[0].future[0].text;
            _this.cityName = res.data.weather[0].city_name;
          })
      }
    },
    mounted() {
      this.getWeather();
    }
  }
</script>
<style scoped lang="less">
  .headerDiv {
    display: flex;
  }
  .headerLeft {
    height: 100px;
    width: 200px;
    background-color: #324157;
  }
  .headerRight {
    position: relative;
    display: flex;
    align-items: center;
    color: #B2CBD9;
    height: 80px;
    width: e("calc(100% - 200px)");
    background-color: #324157;
    .el-menu {
      position: absolute;
      right: 220px;
    }
  }
  .logo {
    height: 60px;
    width: 60px;
    background: url("../assets/logo.png") no-repeat;
    background-size: 100% 100%;
    margin-left: 70px;
    margin-top: 20px;
  }
  .user {
    position: absolute;
    right: 200px;
  }
  .center {
    position: absolute;
    right: 100px;
  }
  .weatherDiv {
    cursor: pointer;
    position: absolute;
    top: 30px;
    right: 50px;
    font-size: 14px;
    color: #bfcbd9;
  }

</style>
