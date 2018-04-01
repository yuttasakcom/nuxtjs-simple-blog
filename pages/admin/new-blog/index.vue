<template>
  <div class="container">
    <section>
      <AdminPostForm @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  methods: {
    onSubmitted(blogData) {
      this.$store.dispatch('addBlog', blogData)
        .then(() => {
          this.$router.push('/admin')
        })
    }
  }
}
</script>