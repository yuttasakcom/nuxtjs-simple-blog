<template>
  <nav class="teal">
    <div class="nav-wrapper container teal">
      <nuxt-link to="/" class="brand-logo">{{ title }}</nuxt-link>

      <a href="#" data-activates="slide-out" class="button-collapse">
        <i class="material-icons">menu</i>
      </a>

      <ul class="right hide-on-med-and-down" v-if="menuItems">
        <nuxt-link tag="li" v-for="item in menuItems" :key="item.title" :to="item.to">
          <a>
            <i class="material-icons left" v-if="item.icon">{{ item.icon }}</i>{{ item.title }}
          </a>
        </nuxt-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    menuItems: {
      type: Array
    }
  }
}
</script>
