<template>
  <div class="container">
    <section>
      <BlogList isAdmin :blogs="loadedBlogs" />
    </section>

    <div class="fixed-action-btn">
      <button
        class="btn-floating btn-large waves-effect waves-light red"
        @click="$router.push('/admin/new-blog')"
      >
        <i class="material-icons">add</i>
      </button>
    </div>
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