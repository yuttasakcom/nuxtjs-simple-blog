<template>
  <section class="container">
    <AdminBlogForm :blog="loadedBlog" @submit="onSubmitted" />
  </section>
</template>

<script>
export default {
  asyncData(ctx) {
    return ctx.app.$axios
      .$get(`/api/blogs/${ctx.params.blogId}`)
      .then(data => {
        return {
          loadedBlog: data
        }
      })
      .catch(e => ctx.error(e))
  },
  head() {
    return { title: this.loadedBlog.title }
  },
  methods: {
    onSubmitted(editedBlog) {
      this.$store.dispatch('EDIT_BLOG', editedBlog)
      .then(() => {
        this.$router.push('/admin')
      })
      .catch(e => console.log(e))
    }
  }
}
</script>