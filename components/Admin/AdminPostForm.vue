<template>
  <form @submit.prevent="onSave">
    
    <AppControlInput
      v-model="editedPost.title"
    >Title</AppControlInput>
    
    <AppControlInput
      control-type="textarea"
      v-model="editedPost.content"
    >Content</AppControlInput>
    
    <AppControlInput
      v-model="editedPost.thumbnail"
    >Thumbnail Link</AppControlInput>
    
    <AppControlInput
      control-type="textarea"
      v-model="editedPost.previewText"
    >Preview Text</AppControlInput>
    
    <AppControlInput
      v-model="editedPost.author"
    >Author Name</AppControlInput>

    <AppButton type="submit" icon="send">Save</AppButton>
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
    post: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      editedPost: this.post
        ? { ...this.post }
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
      if(this.editedPost.title == '') {
        return 
      }
      this.$emit('submit', this.editedPost)
    }
  }
}
</script>