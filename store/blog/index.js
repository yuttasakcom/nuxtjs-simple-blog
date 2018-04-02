const state = {
  loadedBlogs: []
}

const mutations = {
  SET_BLOG (state, blogs) {
    state.loadedBlogs = blogs
  },
  ADD_BLOG (state, blog) {
    state.loadedBlogs.push(blog)
  },
  EDIT_BLOG (state, editBlog) {
    const blogIndex = state.loadedBlogs.findIndex(
      blog => blog.id === editBlog.id
    )
    state.loadedBlogs[blogIndex] = editBlog
  }
}

const actions = {
  nuxtServerInit (vuexContext, context) {
    return context.app.$axios.$get('/api/blogs')
      .then(blogs => {
        vuexContext.commit('SET_BLOG', blogs)
      })
  },
  ADD_BLOG (vuexContext, payload) {
    return this.$axios
      .$post('/api/blogs', payload)
      .then(blog => {
        vuexContext.commit('ADD_BLOG', blog)
      })
  },
  EDIT_BLOG (vuexContext, payload) {
    return this.$axios
      .$put(
        `/api/blogs/${payload.id}`,
        payload
      )
      .then(() => {
        vuexContext.commit('EDIT_BLOG', payload)
      })
      .catch(e => console.log('Error:', e))
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
