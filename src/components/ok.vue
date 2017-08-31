<template>
    <div>
        <p>{{ toChild }}</p>
        <el-button @click='changeYou'>test</el-button>
    </div>
</template>

<script>
export default {
    data() {
        return{
            fromP: this.toChild
        }
    },
    props:['toChild'],
    methods:{
        changeYou() {
            this.fromP = '哈哈';
            this.$emit('changeP', this.fromP);
        }
    }
}
</script>

