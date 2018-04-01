<template>
  <div>
    <section class="row">
      <BlogPreview
        class="col s12 m6 l4 xl3"
        v-for="blog in blogs"
        :key="blog.id"
        :id="blog.id"
        :title="blog.title"
        :previewText="blog.previewText"
        :thumbnail="blog.thumbnail"
        :is-admin="isAdmin"
        :views="blog.views"
        :likes="blog.likes"
        :comments="blog.comments"
        :shares="blog.shares"
      />
    </section>
  </div>
</template>

<script>
import BlogPreview from '@/components/Blogs/BlogPreview'
export default {
  components: {
    BlogPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
    blogs: {
      type: Array,
      required: true
    }
  }
}
</script>