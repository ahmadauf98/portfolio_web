<template>
  <v-app>
    <!-- Navigation Bar -->
    <Navbar />

    <!-- Body Content -->
    <v-main class="bg-color">
      <nuxt />
    </v-main>

    <!-- Footer -->
    <Footer />
  </v-app>
</template>

<script>
import navbar from '../components/navbar'
import footer from '../components/footer'

export default {
  components: {
    Navbar: navbar,
    Footer: footer,
  },

  data() {
    return {}
  },
}
</script>
