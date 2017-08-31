import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import 'font-awesome/css/font-awesome.css'
import AMap from 'vue-amap';

Vue.config.productionTip = false
Vue.config.devtools = true
Vue.prototype.$http = axios
Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(AMap)
//state里面就是存放项目中需要多组件共享的状态
//mutations就是存放更改state里状态的方法
//getters就是从state中派生出状态，比如将state中的某个状态进行过滤然后获取新的状态。
//actions就是mutation的加强版，它可以通过commit mutations中的方法来改变状态，最重要的是它可以进行异步操作。
//modules顾名思义，就是当用这个容器来装这些状态还是显得混乱的时候，我们就可以把容器分成几块，把状态和管理规则分类来装。这和我们创建js模块是一个目的，让代码结构更清晰。
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

AMap.initAMapApiLoader({
  // 申请的高德key
  key: '8c9b70864f39127293a84f8c57494cfc',
  // 插件集合
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
});

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
