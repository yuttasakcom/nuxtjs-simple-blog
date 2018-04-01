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
    onSubmitted(postData) {
      this.$store.dispatch('addPost', postData).then(() => {
        this.$router.push('/admin')
      })
    }
  }
}
</script>