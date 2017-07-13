<template>
  <div>
    <div class="CountWrap">
      <div>用户量</div>
      <div>访问流量</div>
      <div>文章数</div>
      <div>评论数</div>
    </div>
    <ToDo></ToDo>
  </div>
</template>


<script>
import ToDo from './ToDo'
export default {
  name:'IndexPage',
  components:{
    'ToDo':ToDo
  }
}
</script>

<style lang="less" scoped>
  .CountWrap {
    width: 800px;
    display: flex;
    div {
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
      height: 100px;
      margin: auto 50px;
      border: 1px solid #fff;
      background: #fff;
      box-shadow: 2px 2px #ccc;
    }
  }
</style>
