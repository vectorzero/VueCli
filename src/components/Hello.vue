<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p v-bind:title="time">时间</p>
    <p>{{good}}</p>
    <el-button type="primary" v-on:click='change'>主要按钮</el-button>
    <p>{{inputVal}}</p>
    <input type='text' v-model="inputVal">
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'hello vue',
      time: '页面加载于'+new Date(),
      good: 'OK',
      inputVal:'input Value'
    }
  },
  methods:{
    change(){
      this.good = 'hello world'
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
