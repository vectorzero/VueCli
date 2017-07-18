<template>
  <div>
    <div class="countWrap">
      <div>用户量：{{users}}</div>
      <div>访问流量：{{flows}}</div>
      <div>文章数：{{articles}}</div>
      <div>评论数：{{comments}}</div>
    </div>
    <ToDo></ToDo>
  </div>
</template>


<script>
import ToDo from './ToDo'
export default {
  name:'IndexPage',
  data(){
      return{
        users: 0,
        flows: 0,
        articles: 0,
        comments: 0,
      }
  },
  components:{
    'ToDo':ToDo
  }
}
</script>

<style lang="less" scoped>
  .countWrap {
    width: 1620px;
    display: flex;
    div {
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
</style>
