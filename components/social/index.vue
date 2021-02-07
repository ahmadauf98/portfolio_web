<template>
  <div class="pa-2 mb-2 text-center">
    <v-btn v-for="(icon, index) in icons" :key="index" class="btn-icon" icon>
      <v-icon color="primary" :size="size">{{ icon.name }}</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        { link: '', name: 'mdi-facebook' },
        { link: '', name: 'mdi-github' },
        { link: '', name: 'mdi-linkedin' },
        { link: '', name: 'mdi-instagram' },
      ],
    }
  },
  computed: {
    size() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 30
        case 'sm':
          return 30
        case 'md':
          return 35
        case 'lg':
          return 35
        case 'xl':
          return 35
      }
    },
  },
}
</script>
