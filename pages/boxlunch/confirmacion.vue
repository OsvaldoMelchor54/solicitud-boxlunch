<template>
  <main>
    <loading v-if="loading" />
    <div v-else class="w-full">
      <h1 class="text-center text-chivas-red bebas font-bold text-4xl tracking-widest">¡FELICIDADES!</h1>
      <h2 class="text-center text-chivas-blue-blacked bebas font-bold text-3xl tracking-widest">
        SOLICITUD DE BOX LUNCH ENVIADA
      </h2>
      <section class="grid md:grid-cols-3">
        <div></div>
        <div>
          <checked custom-class="w-56" />
          <div class="text-center divide-y my-4">
            <div class="pb-4">
              <span class="titillium">EVENTO</span>
              <p class="text-chivas-red titillium-bold text-lg uppercase">
                {{ solicitud.evento.nombre }}
              </p>
              <!-- <span class="titillium"></span> -->
            </div>
            <div class="py-4">
              <span class="titillium uppercase">{{ solicitud.detalles.tipo }}</span>
              <p class="text-chivas-red titillium-bold text-lg">
                {{ solicitante.proveedor.nombre }}
              </p>
            </div>
            <div class="py-4">
              <span class="titillium">TIPO SOLICITUD</span>
              <p class="text-chivas-red titillium-bold text-lg uppercase">
                {{ solicitud.tipo }}
              </p>
            </div>
            <div class="py-4">
              <span class="titillium">DIRECCIÓN / AREA A APOYAR</span>
              <p class="text-chivas-red titillium-bold text-lg uppercase">
                {{ solicitud.detalles.direccion_apoyo }}
                - {{ solicitud.detalles.area_operacion }}
              </p>
            </div>
            <div class="py-4">
              <span class="titillium">CÓDIGO SOLICITUD</span>
              <p class="text-chivas-red titillium-bold text-lg uppercase">
                {{ solicitud.codigo }}
              </p>
            </div>
            <div class="py-4">
              <span class="titillium">RESPONSABLE</span>
              <p class="text-chivas-red titillium-bold text-lg">
                {{ solicitante.nombres }} {{ solicitante.apellido_paterno }} {{ solicitante.apellido_materno }}
              </p>
            </div>
            <div v-if="solicitud.tipo === 'individual'" class="py-4">
              <span class="titillium">HORARIO A LABORAR</span>
              <p class="text-chivas-red titillium-bold text-lg">
                {{ solicitud.detalles.horas }} HRS.
                <!-- <span class="text-chivas-blue-blacked text-sm">HRS.</span> -->
              </p>
            </div>
            <div v-if="solicitud.tipo === 'individual'" class="py-4">
              <span class="titillium">CORRESPONDE A</span>
              <p class="text-chivas-red titillium-bold text-lg">
                {{ solicitud.detalles.tot_producto }} BOX LUNCH
                <!-- <span class="text-chivas-blue-blacked text-sm">HRS.</span> -->
              </p>
            </div>
            <div v-if="solicitud.tipo === 'grupal'" class="py-4">
              <span class="titillium">CORRESPONDE A</span>
              <div class="w-full flex justify-around">

                <p class="text-chivas-red titillium-bold text-lg">
                  {{ solicitud.detalles.personas }} PERSONAS
                  <!-- <span class="text-chivas-blue-blacked text-sm">HRS.</span> -->
                </p>
                <span>|</span>
                <p class="text-chivas-red titillium-bold text-lg">
                  {{ solicitud.detalles.tot_producto }} BOX LUNCH
                  <!-- <span class="text-chivas-blue-blacked text-sm">HRS.</span> -->
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- <p class="text-center py-4">Registra tu solicitud de Box-lunch para tu evento en el Estadio AKRON</p> -->
      <nuxt-link
        to="/"
        class="block w-full bg-chivas-red text-white sticky bottom-0 p-6 titillium-bold text-lg text-center"
      >
        FINALIZAR
      </nuxt-link>
    </div>
  </main>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'ConfirmaBoxlunch',
  data() {
    return {
      loading: false,
    }
  },
  computed: {
    idSolicitud() {
      return this.$route.query.solicitud
    },
    solicitud() {
      return this.$store.getters.getInfo('solicitud')
    },
    solicitante() {
      return this.solicitud.solicitante
    },
  },
  created() {
    if (!this.idSolicitud) {
      this.$toast.error('Solicitud no válida')
      this.$router.push('/')
    }
    this.getSolicitud()
  },
  methods: {
    ...mapActions({
      fetchApi: 'getDataApiKey',
    }),
    async getSolicitud() {
      this.loading = true
      await this.fetchApi({
        url: `/acreditaciones/public/boxlunch/solicitud?solicitud=${this.idSolicitud}&categoria=boxlunch`,
        key: 'solicitud',
      })

      if (this.solicitud.error) {
        this.$toast.error(this.solicitud.message)
        this.$router.push('/')
      }
      this.loading = false
    },
  },
}
</script>
