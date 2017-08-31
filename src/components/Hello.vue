<template>
  <div class="hello">
    <p>{{time}}</p>
    <p>hello{{ $store.state.count }}</p>
    <el-button @click="increment">+1</el-button>
    <el-button @click="add">+10</el-button>
    <el-button @click="incrementAsync">异步+1</el-button>
    <el-button @click="incrementAsyncWithVal">异步+5</el-button>
    <oh-on :toChild='pData' @changeP='pChange'></oh-on>
  </div>
</template>

<script>
import oh_on from './ok'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'hello vue',
      time: '页面加载于'+new Date(),
      good: 'OK',
      inputVal:'input Value',
      basic: '',
      isActive: true,
      hasError: false,
      error :false,
      pData: 'haha'
    }
  },
  methods:{
    pChange(val) {
      this.pData = val
    },
    BasicData(){
      this.$http('http://localhost:8080/static/data.json')
        .then((response)=>{
            this.basic = response.data.goods[0].name + ' ' + response.data.goods[0].type
        })
        .catch((response)=>{
            console.log(response)
        })
    },
    change(){
      this.good = 'hello world'
    },
    increment(){
      this.$store.commit('increment')
    },
    add(){
      this.$store.commit('add',10)
    },
    incrementAsync(){
      this.$store.dispatch('incrementAsync')
    },
    incrementAsyncWithVal(){
      this.$store.dispatch('incrementAsyncWithVal',5)
    }
  },
  mounted(){
    this.BasicData()
  },
  components:{
    'oh-on':oh_on
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
