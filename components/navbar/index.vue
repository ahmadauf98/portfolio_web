<template>
  <div>
    <v-app-bar
      class="contain bg-color-navbar"
      height="70"
      elevate-on-scroll
      app
    >
      <!-- Brand Logo -->
      <v-toolbar-title>
        <nuxt-link to="#home">
          <img class="logo-img" src="~/static/img/logo.svg" alt="..." />
        </nuxt-link>
      </v-toolbar-title>

      <!-- Navigation Button -->
      <v-spacer></v-spacer>

      <v-btn
        v-for="(nav, index) in navigations"
        :key="index"
        v-ripple="false"
        class="v-btn-nav text-subtitle-1 text-capitalize font-weight-regular pa-0 mx-3 d-none d-sm-flex"
        tile
        text
        :to="`#${nav.link}`"
      >
        <span class="text-secondary-color white--text">{{ nav.name }}</span>
      </v-btn>

      <v-app-bar-nav-icon
        class="d-sm-none"
        color="#f8a74a"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" color="#2A3443" app temporary>
      <v-list-item class="d-flex justify-center" height="70">
        <v-toolbar-title class="py-5">
          <nuxt-link to="#home">
            <img class="logo-img" src="~/static/img/logo.svg" alt="..." />
          </nuxt-link>
        </v-toolbar-title>
      </v-list-item>

      <v-divider color="#fafafb"></v-divider>

      <v-list class="pa-0">
        <v-list-item
          class="d-block pa-0"
          v-for="(nav, index) in navigations"
          :key="index"
          :to="`#${nav.link}`"
          link
        >
          <v-list-item-content class="px-5">
            <v-list-item-title
              class="py-2 text-subtitle-2 text-secondary-color font-weight-regular"
              >{{ nav.name }}</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <Social />
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script>
import social from '../social'
export default {
  components: {
    Social: social,
  },

  data() {
    return {
      drawer: false,
      navigations: [
        { link: 'education', name: 'Education' },
        { link: 'skills', name: 'Skills' },
        { link: '', name: 'Project' },
        { link: '', name: 'Contact' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
