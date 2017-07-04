<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <p>{{time}}</p>
    <p>{{good}}</p>
    <el-button type="primary" v-on:click='change'>主要按钮</el-button>
    <p>{{inputVal}}</p>
    <div class='inputWrap'><el-input v-model="inputVal"></el-input></div>
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

.inputWrap {
  display: inline-block;
  width: 200px;
}
</style>
