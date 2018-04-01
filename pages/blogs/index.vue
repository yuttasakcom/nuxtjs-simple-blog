<template>
  <div class="container">
    <BlogList :blogs="loadedBlogs" />
  </div>
</template>

<script>
export default {
  computed: {
    loadedBlogs() {
      return this.$store.getters.loadedBlogs
    }
  }
}
</script>