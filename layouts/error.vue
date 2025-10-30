<template>
  <main class="grid grid-cols-1 md:grid-cols-4 min-h-screen -mt-0">
    <Tags />
    <div
      class="
        col-span-1 md:col-span-3
        bg-hero bg-cover
        bg-no-repeat bg-center
        h-96 md:min-h-screen
        md:sticky top-0
        z-20
      "
    >
      <!-- <div class="w-full mb-8 lg:mb-18 flex gap-12 items-center justify-center">
        <a
          v-for="icon in socials"
          :key="icon.name"
          :href="icon.link"
          :class="icon.width ? icon.width : 'w-8'"
          target="_blank"
          :title="`Ir a ${icon.name}`"
        >
          <img :src="icon.icon" :alt="`logo_${icon.name}`">
        </a>
      </div> -->
    </div>
    <div class="flex flex-col px-12 md:px-24 min-h-screen overflow-y-auto">
      <img src="/imgs/odin.png" alt="" class="w-56 mx-auto" />
      <div class="bg-chivas-red w-full mx-auto py-4 text-center">
        <h2 class="text-3xl uppercase text-white titillium-bold">
          Error {{ error.statusCode }}
        </h2>
      </div>
      <div class="py-2 text-center">
        <span v-if="error.statusCode == 404" class="text-lg text-chivas-blue titillium-bold" style="letter-spacing: 3px"
          >PÁGINA NO ENCONTRADA</span
        >
        <div v-else>
          <span class="text-lg text-chivas-red titillium-bold">LO SENTIMOS, HA OCURRIDO UN ERROR.</span>
          <span>{{ error.message }}</span>
        </div>
      </div>

      <section class="my-10">
        <!-- <ServiciosList /> -->
        <div class="grid place-items-center">
          <!-- <button-round
            type="button"
            class="bg-primary-red text-white mx-auto"
            @click="sendPayload"
          >
            <template #content>
              SIGUIENTE
            </template>
          </button-round> -->
          <nuxt-link to="/" class="text-chivas-red text-2xl">Ir al inicio</nuxt-link>
        </div>
      </section>

      <!-- <Footer /> -->
    </div>
  </main>
</template>
<script>
// import { eventBus } from '~/helpers/chivas'
import mix from '~/mixins/index.js'
export default {
  mixins: [mix],
  // eslint-disable-next-line vue/require-prop-types
  props: ['error'],
  data() {
    return {
      service_selected: {},
      url: '',
    }
  },
  computed: {
    service () {
      return this.$store.getters.getInfo('service')
    }
  },
  mounted() {
    this.url = process.env.NODE_ENV === 'production' ? 'https://' : 'http://'
    this.url += window.location.host
  },
  methods: {
    // sendPayload() {
    //   if (this.service.clave !== '') {
    //     eventBus.$emit('changeStep', 1)
    //     if (this.error.statusCode === 404) {
    //       this.$router.push('/')
    //     } else {
    //       window.location.href = this.url // process.env.URL_APP
    //     }
    //   }
    //   else {
    //     // alert('Seleccione un servicio a facturar')
    //     this.$toast.error('Selecicone un servicio a facturar')
    //   }
    // }
  }
}
</script>
