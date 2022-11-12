<template>
  <RouterView/>
  <Footer/>
</template>

<script>
import Footer from './components/Footer.vue'

import Home from './views/Home.vue'

export default{
  components: {
    Home,
    Footer,
  }
}
</script>
