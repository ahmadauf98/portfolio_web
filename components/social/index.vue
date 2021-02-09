<template>
  <div class="pa-2 mb-2 text-center">
    <v-btn
      v-for="(icon, index) in icons"
      :key="index"
      :href="icon.link"
      target="_blank"
      class="btn-icon"
      icon
    >
      <v-icon color="primary" :size="size">{{ icon.name }}</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        {
          link:
            'https://mail.google.com/mail/?view=cm&fs=1&to=aufnasa.works@gmail.com&su=PARTNERSHIP+AND+COLLABORATION&body=WRITE+ALL+DETAILS+ABOUT+YOUR+PROJECTS',
          name: 'mdi-gmail',
        },
        { link: 'https://github.com/ahmadauf98', name: 'mdi-github' },
        {
          link: 'https://www.linkedin.com/in/ahmad-auf-b9aa09185',
          name: 'mdi-linkedin',
        },
        { link: 'https://www.instagram.com/aufnasa_/', name: 'mdi-instagram' },
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
