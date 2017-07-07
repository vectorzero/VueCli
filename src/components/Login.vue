<template>
  <form class='loginBox' novalidate autocomplete="off">
    <el-input v-model='username' placeholder='请输入账号'></el-input>
    <el-input type='password' v-model='password' placeholder='请输入密码'></el-input>
    <el-button type='primary' @click='login'>登录</el-button>
  </form>
</template>

<script>
export default {
  name: 'login',
  data() {
    return{
      username:'',
      password:''
    }
  },
  methods:{
    login(){
      let username = this.username,
          password = this.password;
      if(!this.check({
          username:username,
          password:password
      })) return;
      alert('登录成功');
      this.doneLogin();
    },
    doneLogin() {
      this.$router.push({name:'IndexPage'})
    },
    check(obj){
      if(obj.username===''){
          alert('用户名不能为空');
          return false;
      }
      if(obj.password===''){
          alert('密码不能为空');
          return false;
      }
      return true;
    }
  },
  mounted(){

  }
}
</script>

<style scope lang='less'>
  .loginBox {
     display: inline-block;
     width: 300px;
     input {
       margin: 10px auto;
     }
   }
</style>
