<template>
  <header>
    <Navbar :title="title" :menu-items="menuItems" />
    <Sidenav :menu-items="menuItems" />
  </header>
</template>

<script>
import Navbar from '@/components/Header/Navbar'
import Sidenav from '@/components/Header/Sidenav'
export default {
  components: {
    Navbar,
    Sidenav
  },
  data() {
    return {
      title: 'Simple Blog',
      menuItems: [
        { icon: 'subject', title: 'Blog', to: '/posts' },
        { icon: 'face', title: 'About', to: '/about' },
        { icon: 'person', title: 'Admin', to: '/admin' },
        { title: 'Sign up', to: '/users/signup' },
        { title: 'Sign in', to: '/users/signin' }
      ]
    }
  }
}
</script>

