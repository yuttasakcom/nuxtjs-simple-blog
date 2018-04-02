<template>
  <div class="container">
    <section>
      <AdminBlogForm @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  methods: {
    onSubmitted(blogData) {
      this.$store.dispatch('ADD_BLOG', blogData)
        .then(() => {
          this.$router.push('/admin')
        })
    }
  }
}
</script>