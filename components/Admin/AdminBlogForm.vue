<template>
  <form @submit.prevent="onSave">
    
    <AppControlInput
      v-model="editedBlog.title"
    >Title</AppControlInput>
    
    <AppControlInput
      control-type="textarea"
      v-model="editedBlog.content"
    >Content</AppControlInput>
    
    <AppControlInput
      v-model="editedBlog.thumbnail"
    >Thumbnail Link</AppControlInput>
    
    <AppControlInput
      control-type="textarea"
      v-model="editedBlog.previewText"
    >Preview Text</AppControlInput>
    
    <AppControlInput
      v-model="editedBlog.author"
    >Author Name</AppControlInput>

    <div class="d-flex justify-content-between">
      <AppButton class="red" type="button" icon="arrow_back" @click="onCancel">Cancel</AppButton>
      <AppButton type="submit" icon="send">Save</AppButton>
    </div>
  </form>
</template>

<script>
import AppControlInput from '@/components/UI/AppControlInput'
import AppButton from '@/components/UI/AppButton'
export default {
  components: {
    AppControlInput,
    AppButton
  },
  props: {
    blog: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      editedBlog: this.blog
        ? { ...this.blog }
        : {
            author: '',
            title: '',
            thumbnail: '',
            content: '',
            previewText: ''
          }
    }
  },
  methods: {
    onSave() {
      this.$emit('submit', this.editedBlog)
    },
    onCancel() {
      this.$router.push('/admin')
    }
  }
}
</script>