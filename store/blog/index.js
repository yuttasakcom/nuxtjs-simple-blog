const state = {
  loadedBlogs: []
}

const mutations = {
  SET_BLOG (state, blogs) {
    state.loadedBlogs = blogs
  },
  ADD_BLOG (state, blog) {
    state.loadedBlogs.push(blog)
  }
}

const actions = {
  nuxtServerInit (vuexContext, context) {
    return context.app.$axios.$get('/api/blogs')
      .then(blogs => {
        vuexContext.commit('SET_BLOG', blogs)
      })
  },
  addBlog (vuexContext, payload) {
    return this.$axios
      .$post('/api/blogs', payload)
      .then(blog => {
        vuexContext.commit('ADD_BLOG', blog)
      })
  }
}
const getters = {
  loadedBlogs ({ loadedBlogs }) {
    return loadedBlogs
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
