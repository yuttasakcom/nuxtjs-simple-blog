<template>
  <button
    class="btn waves-effect waves-light"
    :type="type"
    name="action"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <div v-if="type === 'submit'">
      <slot />
      <i class="material-icons right">{{ icon }}</i>
    </div>
    <div v-else>
      <slot />
      <i class="material-icons left">{{ icon }}</i>
    </div>
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    type: {
      type: String
    },
    icon: {
      type: String
    }
  }
}
</script>
