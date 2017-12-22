import shop from '../../api/shop'
import { Product } from '../../value_objects/product'
import * as types from '../mutation-types'

// initial state
const state = {
  all: []
}

// getters
const getters = {
  allProducts: (state) => {
    return state.all
  }
}

// actions
const actions = {
  getAllProducts ({ commit }) {
    shop.getProducts(products => {

    //   commit(types.RECEIVE_PRODUCTS, { productObjects })
      commit(types.RECEIVE_PRODUCTS, { products })
    })
  }
}

// mutations
const mutations = {
  [types.RECEIVE_PRODUCTS] (state, { products }) {
      const productObjects = products.map(product => {
        return new Product(product)
      })
    state.all = [...state.all, ...productObjects]
  },

  [types.ADD_TO_CART] (state, { id }) {
    state.all.find(p => p.id === id).inventory--
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
