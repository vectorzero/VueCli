<template>
  <div>
    {{hi}}
    <p><i class="fa fa-spin fa-2x  fa-arrow-right"></i> fa-arrow-right-匀速旋转,2s一圈</p>
    <div class='hi'>
        1111
        <h2>2222</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hi',
  data () {
    return {
      msg: 'hi vue'
    }
  }
}
</script>

<style scoped lang='less'>
    .hi {
        color: red;
        font-size: 0.45rem;
        h2 {
        color: blue;
        }
    }
</style>
