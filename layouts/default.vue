<template>
  <v-app>
    <!-- Navigation Bar -->
    <Navbar />

    <!-- Body Content -->
    <v-main class="bg-color">
      <nuxt />
    </v-main>

    <!-- Footer -->
  </v-app>
</template>

<script>
import navbar from '../components/navbar'

export default {
  components: {
    Navbar: navbar,
  },

  data() {
    return {}
  },
}
</script>
