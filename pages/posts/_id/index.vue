<template>
  <div class="container">
    <section>
      <h1>{{ loadedPost.title }}</h1>
      <div>
        <div>Last updated on {{ loadedPost.updatedAt | date }}</div>
        <div>Written by {{ loadedPost.author }}</div>
      </div>
      <p>{{ loadedPost.content }}</p>
    </section>

    <section>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        <a href="#">email</a>
      </p>
    </section>
  </div>
</template>

<script>
export default {
  asyncData(ctx) {
    return ctx.app.$axios
      .$get(`/api/posts/${ctx.params.id}`)
      .then(data => {
        return {
          loadedPost: data
        }
      })
      .catch(e => ctx.error(e))
  },
  head() {
    return { title: this.loadedPost.title }
  }
}
</script>