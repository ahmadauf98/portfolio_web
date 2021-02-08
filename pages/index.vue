<template>
  <div>
    <!-- First Section -->
    <div class="bg-color-section-1 contain">
      <v-card
        id="home"
        :height="height"
        class="d-flex align-center"
        color="transparent"
        flat
      >
        <v-row class="px-4 d-flex align-center">
          <!-- Content -->
          <v-col
            cols="12"
            md="6"
            order="2"
            order-md="1"
            class="text-center text-md-left"
          >
            <h1 class="text-h5 font-weight-medium text-primary-color mb-1">
              A web developer
            </h1>

            <h1
              class="text-h4 text-sm-h2 font-weight-bold text-secondary-color mb-3"
            >
              Ahmad Auf Nasruddin
            </h1>

            <v-col cols="12" lg="8" class="pa-0">
              <h1 class="text-h6 font-weight-regular text-secondary-color mb-5">
                I am looking forward to explore new opportunities to work with
                you as a web developer in the field of information technology.
              </h1>
            </v-col>

            <v-btn
              class="text-body-1 text-capitalize"
              color="#f8a74a"
              outlined
              x-large
              >Hire Me</v-btn
            >
          </v-col>

          <!-- Illustrations -->
          <v-col
            cols="12"
            md="6"
            order="1"
            order-md="2"
            class="d-flex justify-center mb-8 mb-md-0"
          >
            <img
              class="illustration"
              src="~/static/img/illustration.svg"
              alt="..."
            />
          </v-col>
        </v-row>
      </v-card>

      <div class="custom-shape-divider-bottom">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>

    <!-- Second Section -->
    <div class="bg-color-section-2 contain">
      <v-card
        :height="height"
        id="education"
        class="d-flex align-center"
        color="transparent"
        flat
      >
        <v-row class="px-4 d-flex align-center justify-center">
          <h1
            class="text-h5 text-sm-h4 font-weight-medium text-secondary-color mb-5 mb-sm-10 d-md-none"
          >
            <v-icon color="primary" size="30">mdi-bug</v-icon>
            Education Background
          </h1>

          <!-- Avatar Img -->
          <v-col cols="12" sm="6" class="text-center">
            <v-avatar color="primary" size="205">
              <v-avatar color="secondary" size="195">
                <v-avatar color="primary" size="180">
                  <img
                    class="logo-img"
                    src="~/static/img/avatar.jpg"
                    alt="..."
                  />
                </v-avatar>
              </v-avatar>
            </v-avatar>

            <h1
              class="text-h5 font-weight-medium text-secondary-color mt-5 mb-3"
            >
              Ahmad Auf Nasruddin
            </h1>

            <div>
              <Social />
            </div>
          </v-col>

          <!-- Profile Data -->
          <v-col cols="12" sm="6">
            <h1
              class="text-h4 font-weight-medium text-secondary-color mb-8 d-none d-md-flex"
            >
              <v-icon class="mr-2" color="primary" size="35">mdi-bug</v-icon>
              Education Background
            </h1>

            <h1
              v-for="(education, index) in educations"
              :key="index"
              class="text-body-1 text-sm-h6 font-weight-thin text-secondary-color mb-4"
            >
              <v-icon color="accent" class="mr-1">mdi-calendar-range</v-icon>
              <span class="font-weight-medium">{{ education.years }}</span>
              <br />
              {{ education.place }}
            </h1>
          </v-col>
        </v-row>
      </v-card>

      <div class="custom-shape-divider-top">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>

    <!-- Third Section -->
    <div class="bg-color-section-3 contain">
      <v-card
        :min-height="height"
        id="skills"
        class="d-flex align-center"
        color="transparent"
        flat
      >
        <v-row class="px-4 d-block align-center justify-center text-center">
          <h1
            class="text-h5 text-sm-h4 font-weight-medium text-secondary-color mb-10 mb-sm-5 mb-md-15"
          >
            <v-icon color="primary" size="35">mdi-bug</v-icon>
            Technology Skills
          </h1>

          <!-- Coding Languages/Database -->
          <div class="mb-10 mb-sm-5 mb-md-15">
            <h1
              class="text-body-1 text-sm-h6 font-weight-regular text-secondary-color mb-4"
            >
              <v-icon color="primary">mdi-xml</v-icon>
              Coding Languages/Database
            </h1>
            <v-col cols="12">
              <v-row class="d-flex justify-center">
                <v-col
                  cols="3"
                  sm="2"
                  md="1"
                  v-for="(lang, index) in languages"
                  :key="index"
                  class="mx-2 mx-md-5 mx-lg-10 align-self-end"
                >
                  <div class="text-center">
                    <a :href="lang.link" target="_blank">
                      <img
                        class="mb-2"
                        :src="lang.logo"
                        :width="width"
                        alt="..."
                      />
                      <v-progress-linear
                        :color="lang.color"
                        rounded
                        height="10"
                        :value="lang.value"
                      ></v-progress-linear>
                    </a>
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </div>

          <!-- Framework/System/Tools -->
          <div>
            <h1
              class="text-body-1 text-sm-h6 font-weight-regular text-secondary-color mb-4"
            >
              <v-icon color="primary">mdi-xml</v-icon>
              Frameworks/Systems/Tools
            </h1>
            <v-col cols="12" class="d-flex justify-center">
              <v-row class="d-flex justify-center">
                <v-col
                  cols="3"
                  sm="2"
                  md="1"
                  v-for="(frame, index) in frameworks"
                  :key="index"
                  class="mx-2 mx-md-5 mx-lg-10 align-self-end"
                >
                  <div class="text-center">
                    <a :href="frame.link" target="_blank">
                      <img
                        class="mb-2"
                        :src="frame.logo"
                        :width="width"
                        alt="..."
                      />
                      <v-progress-linear
                        :color="frame.color"
                        rounded
                        height="10"
                        :value="frame.value"
                      ></v-progress-linear>
                    </a>
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </div>
        </v-row>
      </v-card>
    </div>
  </div>
</template>

<script>
import social from '../components/social'

export default {
  components: {
    Social: social,
  },

  data() {
    return {
      educations: [
        {
          years: '2011-2013',
          place: 'Sekolah Menengah Kebangsaan Kuala Kubu Bharu',
        },

        {
          years: '2014-2015',
          place: 'Sekolah Menengah Sains Tuanku Munawir',
        },

        {
          years: '2016-2017',
          place: 'Foundation of Physical Science, University of Malaya',
        },

        {
          years: '2017-2021',
          place:
            'Bachelor of Computer Science & Information Technology (Software Engineering), University of Malaya',
        },
      ],

      languages: [
        {
          logo: 'https://cdn.worldvectorlogo.com/logos/html5.svg',
          link: 'https://www.w3schools.com/html/html_intro.asp',
          color: '#e44d26',
          value: '100',
        },
        {
          logo: 'https://cdn.worldvectorlogo.com/logos/css-5.svg',
          link: 'https://www.w3schools.com/css/css_intro.asp',
          color: '#1572b6',
          value: '88',
        },
        {
          logo: 'https://cdn.worldvectorlogo.com/logos/logo-javascript.svg',
          link: 'https://www.javascript.com/',
          color: '#f0db4f',
          value: '92',
        },
        {
          logo: 'https://cdn.worldvectorlogo.com/logos/sass-1.svg',
          link: 'https://sass-lang.com/',
          color: '#cf649a',
          value: '75',
        },
        {
          logo: 'https://cdn.worldvectorlogo.com/logos/firebase-1.svg',
          link: 'https://firebase.google.com/',
          color: '#fcca3f',
          value: '95',
        },
        {
          logo: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg',
          link: 'https://www.mongodb.com/',
          color: '#6cac48',
          value: '45',
        },
      ],

      frameworks: [
        {
          logo: 'https://cdn.worldvectorlogo.com/logos/vue-9.svg',
          link: 'https://vuejs.org/',
          color: '#41b883',
          value: '85',
        },
        {
          logo: 'https://nuxtjs.org/logos/nuxt.svg',
          link: 'https://nuxtjs.org/',
          color: '#00c58e',
          value: '90',
        },
        {
          logo: 'https://cdn.worldvectorlogo.com/logos/vuetify.svg',
          link: 'https://vuetifyjs.com/en/',
          color: '#1697f6',
          value: '90',
        },
        {
          logo: 'https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg',
          link: 'https://bootstrap-vue.org/',
          color: '#563d7c',
          value: '80',
        },
        {
          logo: 'https://cdn.worldvectorlogo.com/logos/git-icon.svg',
          link: 'https://git-scm.com/',
          color: '#de4c36',
          value: '75',
        },
        {
          logo:
            'https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg',
          link: 'https://code.visualstudio.com/',
          color: '#2489ca',
          value: '87',
        },
      ],
    }
  },

  computed: {
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 900
        case 'sm':
          return 850
        case 'md':
          return 710
        case 'lg':
          return 840
        case 'xl':
          return 877
      }
    },

    width() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 50
        case 'sm':
          return 50
        case 'md':
          return 50
        case 'lg':
          return 80
        case 'xl':
          return 90
      }
    },
  },
}
</script>
