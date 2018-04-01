<template>
  <div>
    <article>
      <div class="card">
        <div class="card-image">
          <img :src="thumbnail">
          <span class="card-title">{{ title }}</span>
        </div>
        <div class="card-content">
          <p>{{ previewText }}</p>
        </div>
        <div class="card-action">
          <div class="card-icon">
            <div>
              <i class="material-icons left teal-text">thumb_up</i>{{ likes }}
            </div>

            <div>
              <i class="material-icons left teal-text">comment</i>0
            </div>

            <div>
              <i class="material-icons left teal-text">visibility</i>{{ views }}
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'PostPreview',
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
    }
  },
  computed: {
    postLink() {
      return this.isAdmin ? '/admin/' + this.id : '/posts/' + this.id
    }
  }
}
</script>

<style scoped>
.card-icon {
  display: flex;
  justify-content:space-around;
}
</style>
