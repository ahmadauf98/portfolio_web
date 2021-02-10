import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'Portfolio - aufnasa',
    title: 'Portfolio - Ahmad Auf Nasruddin',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Hello there 👋, checkout my portfolio now!',
      },

      // Open Graph
      { property: 'og:site_name', content: 'Portfolio - aufnasa' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://aufnasa.vercel.app',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Portfolio - Ahmad Auf Nasruddin',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Hello there 👋, checkout my portfolio now!',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://firebasestorage.googleapis.com/v0/b/spotz-19a2a.appspot.com/o/Personal%2Fmeta-img.jpg?alt=media&token=ca293d27-e495-476b-8b13-9eae33a5807c',
      },
      { property: 'og:image:width', content: '740' },
      { property: 'og:image:height', content: '300' },

      // Twitter
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@aufnasa_' },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://aufnasa.vercel.app',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Portfolio - Ahmad Auf Nasruddin',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Hello there 👋, checkout my portfolio now!',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content:
          'https://firebasestorage.googleapis.com/v0/b/spotz-19a2a.appspot.com/o/Personal%2Fmeta-img.jpg?alt=media&token=ca293d27-e495-476b-8b13-9eae33a5807c',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      themes: {
        light: {
          primary: '#f8a74a',
          accent: '#fafafb',
          secondary: '#2a3443',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
