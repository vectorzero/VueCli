<template>
  <div>
    <h1>首页</h1>
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
