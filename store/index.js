import Vue from 'vue'
import Vuex from 'vuex'

import shared from './shared'
import blog from './blog'
import auth from './auth'

Vue.use(Vuex)

const createStore = () => new Vuex.Store({
  modules: {
    shared,
    blog,
    auth
  }
})

export default createStore
