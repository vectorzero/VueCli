import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import 'font-awesome/css/font-awesome.css'

Vue.config.productionTip = false
Vue.config.devtools = true
Vue.prototype.$http = axios
Vue.use(ElementUI)
Vue.use(Vuex)

const store = new Vuex.Store({
  // 存储状态值
  state: {
    count:1
  },
  // 状态值的改变方法,操作状态值
  // 提交mutations是更改Vuex状态的唯一方法
  //只能同步
  mutations: {
    increment(state){
      state.count++;
    },
    //payload
    add(state,n){
      state.count+=n;
    }
  },
  // 在store中定义getters（可以认为是store的计算属性）。Getters接收state作为其第一个函数
  getters: {
    
  },
  //可以处理异步
  actions: { 
    increment(context){
      context.commit('increment')
    },
    incrementAsync(context){
      setTimeout(()=>{
        context.commit('increment')
      },1000)
    },
    incrementAsyncWithVal(context,value){
      setTimeout(()=>{
        context.commit('add',value)
      },1000)
    }
  }
})

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
