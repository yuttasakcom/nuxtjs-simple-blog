<template>
  <div class="container">
    <section>
      <h1>{{ loadedBlog.title }}</h1>
      <div>
        <div>Last updated on {{ loadedBlog.updatedAt | date }}</div>
        <div>Written by {{ loadedBlog.author }}</div>
      </div>
      <p>{{ loadedBlog.content }}</p>
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
      .$get(`/api/blogs/${ctx.params.id}`)
      .then(data => {
        return {
          loadedBlog: data
        }
      })
      .catch(e => ctx.error(e))
  },
  head() {
    return { title: this.loadedBlog.title }
  }
}
</script>