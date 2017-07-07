<template>
  <div>
    <h1>i am One</h1>
    <ol>
      <li v-for="(item,index) in items">
        {{item.msg}}-{{index}}
      </li>
    </ol>
    <ol>
      <li v-for="(value,key,index) in objects">
        {{value}}-{{key}}-{{index}}
      </li>
    </ol>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        items:[
          {msg:'hello'},
          {msg:'world'}
        ],
        objects:{
            first:'good',
            mid: 'ok',
            last: 'nice'
        }
      }
    }
  }
</script>
