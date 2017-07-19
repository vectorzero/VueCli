<template>
  <button v-on:click="increment">{{counter}}</button>
</template>

<script>
  export default{
    data(){
      return{
        counter: 0
      }
    },
    methods: {
      increment() {
        this.counter += 1;
        this.$emit('hello')
      }
    }
  }
</script>
