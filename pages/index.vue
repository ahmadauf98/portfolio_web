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

            <h1 class="text-h4 text-sm-h2 font-weight-bold text-secondary-color mb-3">
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
            class="text-h5 text-sm-h4 font-weight-medium text-secondary-color mb-3 mb-sm-10 d-md-none"
          >
            <v-icon color="primary" size="35">mdi-bug</v-icon>
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
              <v-icon color="primary" size="35">mdi-bug</v-icon>
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
  },
}
</script>
