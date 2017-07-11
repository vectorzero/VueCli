<template>
  <div>
    <p v-bind:id="'hello'+id"><i class="fa fa-spin fa-2x  fa-arrow-right"></i> fa-arrow-right-匀速旋转,2s一圈</p>
    <p>{{msg}}</p>
    <p>{{resMsg}}</p>
    <p>{{fullName}}</p>
    <el-button @click="change">change</el-button>
    <One></One>
    <el-button @click="count +=1">add</el-button>
    <p>这个按钮被点击{{count}}次</p>
  </div>
</template>

<script>
import One from './One'
export default {
  name: 'hi',
  data () {
    return {
      msg: 'hi vue',
      id: 5,
      firstName: 'Hello',
      lastName: 'World',
      count: 0
    }
  },
  components: {
    'One': One
  },
  methods: {
    change(){
      this.msg ='good bye hi';
      this.fullName = 'Vector Zero'
    }
  },
  //计算属性
  computed: {
    fullName:{
      get(){
        return this.firstName + ' ' + this.lastName;
      },
      set(newValue){
        let names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    },
    resMsg(){
      return this.msg.split('').reverse().join('');
    }
  }
}
</script>

<style scoped lang='less'>

</style>
