import { createRouter, createWebHistory ,createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/category',
    name: 'category',
    component: () => import(/* webpackChunkName: "category" */ '../views/Category.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import(/* webpackChunkName: "user" */ '../views/User.vue')
  },
  {
    // path: '/product/:id',
    path: '/product',
    name: 'product',
    component: () => import(/* webpackChunkName: "product" */ '../views/ProductDetail.vue')
  },
  {
    path: '/create-order',
    name: 'create-order',
    component: () => import(/* webpackChunkName: "create-order" */ '../views/CreateOrder.vue')
  },
  {
    path: '/address',
    name: 'address',
    component: () => import(/* webpackChunkName: "address" */ '../views/Address.vue')
  },
  {
    path: '/address-edit',
    name: 'address-edit',
    component: () => import(/* webpackChunkName: "address-edit" */ '../views/AddressEdit.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import(/* webpackChunkName: "search" */ '../views/Search.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
