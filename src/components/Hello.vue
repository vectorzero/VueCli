<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <p>{{time}}</p>
    <p>{{good}}</p>
    <el-button type="primary" v-on:click='change'>主要按钮</el-button>
    <p>{{inputVal}}</p>
    <div class='inputWrap'><el-input v-model="inputVal"></el-input></div>
    <p>{{basic}}</p>
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
      inputVal:'input Value',
      basic: ''
    }
  },
  methods:{
    BasicData(){
      this.$http('http://localhost:8080/static/data.json')
        .then((response)=>{
            this.basic = response.data.goods[0].name
        })
        .catch((response)=>{
            console.log(response)
        })
    },
    change(){
      this.good = 'hello world'
    }
  },
  mounted(){
    this.BasicData()
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
