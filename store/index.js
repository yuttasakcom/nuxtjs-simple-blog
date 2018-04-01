import Vue from 'vue'
import Vuex from 'vuex'

import shared from './shared'
import posts from './posts'
import auth from './auth'

Vue.use(Vuex)

const createStore = () => new Vuex.Store({
  modules: {
    shared,
    posts,
    auth
  }
})

export default createStore
