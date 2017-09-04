import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/IndexPage'
import Hello from '@/components/Hello'
import Hi from '@/components/Hi'
import Login from '@/components/Login'
import Vux from '@/components/Vux'
import DataTable from '@/components/DataTable'
import UserManage from '@/components/UserManage'
import Form from '@/components/Form'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/',
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
    },
    {
      path: '/datatable',
      name: 'DataTable',
      component: DataTable
    },
    {
      path: '/usermanage',
      name: 'UserManage',
      component: UserManage
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    }
  ]
})
