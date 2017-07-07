import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/IndexPage'
import Hello from '@/components/Hello'
import Hi from '@/components/Hi'
import Login from '@/components/Login'
import Vux from '@/components/Vux'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/hi',
      name: 'Hi',
      component: Hi
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/vux',
      name: 'Vux',
      component: Vux
    }
  ]
})
