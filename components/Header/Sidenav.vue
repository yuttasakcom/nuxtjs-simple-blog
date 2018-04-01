<template>
  <div>
    <ul id="slide-out" class="side-nav">
      <li>
        <div class="user-view">
          <div class="background">
            <img src="">
          </div>
          <a href="#!user"><img class="circle" src=""></a>
          <a href="#!name">
            <span class="white-text name">John Doe</span>
          </a>
          <a href="#!email">
            <span class="white-text email">jdandturk@gmail.com</span>
          </a>
        </div>
      </li>
      <li>
        <a href="#!">
          <i class="material-icons">cloud</i>First Link With Icon</a>
      </li>
      <li>
        <a href="#!">Second Link</a>
      </li>
      <li>
        <div class="divider"></div>
      </li>
      <li>
        <a class="subheader">Subheader</a>
      </li>
      <li>
        <a class="waves-effect" @click.prevent="closeSideNav">Third Link With Waves</a>
      </li>

      <li v-for="item in menuItems" :key="item.title">
        <a @click.prevent="closeSideNav(item.to)">
          <i class="material-icons left">{{ item.icon }}</i> {{ item.title }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    menuItems: {
      type: Array,
      default: []
    }
  },
  mounted() {
    $('.button-collapse').sideNav()
  },
  methods: {
    closeSideNav(link) {
      $('.button-collapse').sideNav('hide')
      this.$router.push(link)
    }
  }
}
</script>