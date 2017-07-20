<template>
  <div>
    
  </div>
</template>
<script>
  export default {
    name: '',
    data () {
      return {

      }
    },
    methods: {
      getWeather() {
        this.$http.get('/weather/all?city=CHSH000000')
          .then(function(res){
            console.log(res.data.weather[0].now.text)
          })
      }
    },
    mounted() {
      this.getWeather();
    }
  }
</script>
<style scoped>
</style>
