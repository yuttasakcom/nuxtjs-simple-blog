const state = {
  loadedPosts: []
}

const mutations = {
  SET_POST (state, posts) {
    state.loadedPosts = posts
  },
  ADD_POST (state, post) {
    state.loadedPosts.push(post)
  }
}

const actions = {
  nuxtServerInit (vuexContext, context) {
    return context.app.$axios.$get('/api/posts')
      .then(posts => {
        vuexContext.commit('SET_POST', posts)
      })
  },
  addPost (vuexContext, post) {
    return this.$axios
      .$post('/api/posts', post)
      .then(data => {
        vuexContext.commit('ADD_POST', data)
      })
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
