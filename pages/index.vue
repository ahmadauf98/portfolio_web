<template>
  <div>
    <!-- First Section -->
    <div class="bg-color-section-1 contain">
      <v-card
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

            <h1 class="text-h2 font-weight-bold text-secondary-color mb-3">
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
    </div>
  </div>
</template>

<script>
export default {
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
