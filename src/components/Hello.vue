<template>
  <div class="hello">
    <h1 class='static' v-bind:class="{active: isActive, 'text-danger': hasError}">{{msg}}</h1>
    <p :class='classObj'>{{time}}</p>
    <p>{{good}}</p>
    <el-button type="primary" v-on:click='change'>主要按钮</el-button>
    <p>{{inputVal}}</p>
    <div class='inputWrap'><el-input v-model="inputVal"></el-input></div>
    <p>{{basic}}</p>
    <p v-if="Math.random()>0.5">Yes</p>
    <p v-else>No</p>
    <p>hello{{ $store.state.count }}</p>
    <el-button @click="increment">increment</el-button>
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
      basic: '',
      isActive: true,
      hasError: false,
      error :false
    }
  },
  methods:{
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
    }
  },
  mounted(){
    this.BasicData()
  },
  computed:{
    classObj(){
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      }
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
