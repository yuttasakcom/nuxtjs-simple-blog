<template>
  <button
    class="btn waves-effect waves-light"
    :type="type"
    name="action"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
    <i class="material-icons right">{{ icon }}</i>
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
