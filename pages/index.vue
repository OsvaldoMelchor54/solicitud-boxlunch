<template>
  <main class="-mt-1 grid grid-cols-1 md:grid-cols-4 min-h-screen">
    <div
      class="
          md:col-span-3
          bg-hero bg-cover
          bg-no-repeat bg-center
          h-80 md:min-h-screen
          flex items-end justify-center
          z-10
          shadow-md md:shadow-sm
        "
      >
        <!-- :class="step === 1 ? 'mt-28 md:mt-0 top-16 md:top-0' : 'top-0'" -->
      <!-- <div class="w-full mb-8 lg:mb-18 flex gap-12 items-center justify-center">
        <a href="https://www.facebook.com/profile.php?id=61559794180117" target="_blank" rel="noopener noreferrer">
          <img src="https://braingoat-container.s3.amazonaws.com/assets/globales/social-media/facebook/icon_facebook_blanco.svg" class="h-8" alt="icon_facebook">
        </a>
        <a href="https://www.instagram.com/giganterachivas?igsh=MWZsZndxcTkxNXYzdQ==" target="_blank" rel="noopener noreferrer">
          <img src="https://braingoat-container.s3.amazonaws.com/assets/globales/social-media/instagram/icon_instagram_blanco.svg" class="h-8" alt="icon_instagram">
        </a>
      </div> -->
    </div>
    <div class="min-h-screen mx-8">
      <Loading v-if="loading" class="m-auto" />
      <div v-else class="flex flex-col">
        <div class="grid place-items-center my-8">
          <img
            class="h-24"
            src="https://braingoat-container.s3.amazonaws.com/assets/estadioakron.mx/logos-marca/estadio-akron-color.svg"
            alt="logo_estadio_akron"
          />
        </div>
        <div class="my-6">
          <h1 class="text-center text-chivas-blue-blacked text-4xl bebas font-bold tracking-widest">BIENVENIDO</h1>
          <p class="text-center py-4">Registra tu solicitud de Box-lunch para tu evento en el Estadio AKRON</p>
        </div>
        <div class="flex flex-col divide-y shadow-sm titillium-bold border rounded-md">
          <div class="text-center p-4">
            <span class="text-chivas-red">TIPO DE SOLICITANTE</span>
          </div>
          <nuxt-link
            v-for="t in types"
            :key="`type_${t.value}`"
            :to="`/boxlunch/solicitud/?type=${t.value}`"
            class="text-center p-4 hover:bg-gray-100"
          >
            <span class="text-chivas-blue uppercase">{{t.name}}</span>
          </nuxt-link>
        </div>
      </div>
      <!-- <Footer /> -->
    </div>
  </main>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
export default {
  name: 'Index',
  components: {},
  // auth: false,
  data() {
    return {
      loading: false,
      request: {},
    }
  },
  computed: {
    types() {
      return this.$store.getters.getInfo('types')
    },
    // schools() {
    //   return this.$store.getters.getInfo('schools').schools
    // },
    // ciclos() {
    //   return this.schools.find((esc) => {
    //     return `${esc.id}` === this.escuela
    //   }).ciclos_activos
    // }
  },
  beforeCreate() {
    // if (this.$auth.loggedIn) {
    //   this.$router.push('/home')
    // }
  },
  // created() {
  //   this.getSchools()
  // },
  // async mounted() {
  //   // try {
  //   //   await this.$recaptcha.init()
  //   // } catch (e) {
  //   //   console.error(e);
  //   // }
  // },
  methods: {
    ...mapActions({
      getApi: 'getDataApiKey',
    }),
    ...mapMutations({
      toStore: 'toState',
    }),
    // changeStep (data) {
    //     this.request = data
    // //   this.step = id
    //   this.$forceUpdate()
    // },   
    async getSchools() {
      this.loading = true
      await this.getApi({
        url: '/escuelas-chivas/public/escuelas',
        key: 'schools',
      })
      // this.escuela = this.schools[0].id
      this.loading = false
      // await this.toStore({ key: 'step', payload: 1 })
    },
  },
}
</script>
<!-- <style scoped>
#embed {
  overflow: hidden;
  background-color: transparent;
}
@media (min-width: 768px) {
  #embed {
    height: 600px;
  }
}
@media (min-width: 1024px) {
  #embed {
    height: 600px;
  }
}
</style> -->
