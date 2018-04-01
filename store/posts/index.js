const state = {
  loadedPosts: []
}

const mutations = {
  ADD_POST (state, post) {
    state.loadedPosts.push(post)
  }
}

const actions = {
  addPost (vuexContext, post) {
    return this.$axios
      .$post('/api/posts', post)
      .then(data => {
        vuexContext.commit('ADD_POST', data)
      })
      .catch(e => console.log(e))
  }
}
const getters = {
  loadedPosts ({ loadedPosts }) {
    return loadedPosts
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
