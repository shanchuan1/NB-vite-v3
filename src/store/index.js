import { createStore } from 'vuex'
import { getLocal } from '@/request/api';
import { getCart } from '../request/api';  



export default createStore({
  state: {
    cartCount: 1,
    isLogin: false
  },
  mutations: {
    loginStatus(state) {
      const token = getLocal('token')
      if (token){
        state.isLogin = true
      }
    },
    addCart(state, payload) {
      state.cartCount = payload.count
    }
  },
  actions: {
    // 获取购物车列表数据
    async updateCart(ctx) {
      const { data } = await getCart()
      console.log(data);
      ctx.commit('addCart', {
        // count: data.length || 0
        count: data.length || 0
      })
    }
  },
  modules: {
  }
})

