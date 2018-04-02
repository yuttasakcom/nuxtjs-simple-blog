<template>
  <div>
    <article>
      <div class="card">
        <div class="card-image pointer" @click="link">
          <img :src="thumbnail">
        </div>
        <div class="card-content pointer" @click="link">
          <div class="card-title">
            <nuxt-link :to="blogLink">{{ title }}</nuxt-link>
          </div>
          <p>{{ previewText }}</p>
        </div>
        <div class="card-action">
          <div class="card-icon">
            <div>
              <i class="material-icons left blue-text">thumb_up</i>{{ likes }}
            </div>

            <div>
              <i class="material-icons left orange-text">comment</i>{{ comments }}
            </div>

            <div>
              <i class="material-icons left teal-text">share</i>{{ shares }}
            </div>

            <div>
              <i class="material-icons left pink-text">visibility</i>{{ views }}
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    previewText: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    },
    isAdmin: {
      type: Boolean,
      required: true
    },
    views: {
      type: Number
    },
    likes: {
      type: Number
    },
    comments: {
      type: Number
    },
    shares: {
      type: Number
    }
  },
  computed: {
    blogLink() {
      return this.isAdmin ? '/admin/blogs/' + this.id : '/blogs/' + this.id
    }
  },
  methods: {
    link(){
      this.$router.push(this.blogLink)
    }
  }
}
</script>

<style scoped>
.card-icon {
  display: flex;
  justify-content:space-between;
}

.pointer {
  cursor: pointer;
}
</style>
