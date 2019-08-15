import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Kj from '@/components/Kj'
import Zhou from '@/components/Zhou'
import Sheng from '@/components/Sheng'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Member_User from '@/components/Member_User'
import Product from '@/components/Product'
import Buycart from '@/components/Buycart'
import Member_Address from '@/components/Member_Address'
import Cart_Two from '@/components/Cart_Two'
import Car_Three from '@/components/Car_Three'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Kj',
      name: 'Kj',
      component: Kj
    },
    {
      path: '/Zhou',
      name: 'Zhou',
      component: Zhou
    },
    {
      path: '/Sheng',
      name: 'Sheng',
      component: Sheng
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Member_User',
      name: 'Member_User',
      component: Member_User
    },
    {
      path: '/Product',
      name: 'Product',
      component: Product
    },
    {
      path: '/Buycart',
      name: 'Buycart',
      component: Buycart
    },
    {
      path: '/Member_Address',
      name: 'Member_Address',
      component: Member_Address
    },
    {
      path: '/Cart_Two',
      name: 'Cart_Two',
      component: Cart_Two
    },
    {
      path: '/Car_Three',
      name: 'Car_Three',
      component: Car_Three
    }
    ]
})
