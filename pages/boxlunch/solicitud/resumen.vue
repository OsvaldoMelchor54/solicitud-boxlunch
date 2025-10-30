<template>
  <main>
    <!-- <div class="flex sticky top-24 left-4 justify-end mr-6">
      <button
        type="button"
        class="rounded-full bg-chivas-red text-white py-2 px-6 animate-pulse shadow-md"
        @click="backHome()"
      >
        REINTENTAR
      </button>
    </div> -->
    <div class="container px-6 md:mx-auto text-center flex flex-col gap-4">
      <h1 class="text-center text-chivas-blue-blacked bebas font-bold text-4xl tracking-widest">BIENVENIDO</h1>
      <h2 class="text-center text-chivas-blue bebas font-bold text-2xl tracking-widest">
        Resumen de tu la solicitud de Box-lunch.
      </h2>
      <p class="text-center -4">
        <!-- <br />  -->
        A continuación puedes comprobar que los datos de tu solicitud sean correctos.
        <br />
        Si los datos no son correctos puedes:
        <!-- <br />
        <span class="text-chivas-red titillium-bold text-xl">
          {{ resumen.evento.nombre }}
        </span> -->
      </p>
      <button
        type="button"
        class="rounded-full bg-chivas-red text-white py-2 px-6 animate-pulse shadow-md w-1/4 mx-auto"
        @click="backHome()"
      >
        REINTENTAR
      </button>
      <div class="flex mx-auto justify-center items-center gap-1 bg-gray-100 p-4 rounded-xl w-3/4 md:w-1/2">
        <div class="">
          <div
            class="w-8 h-8 rounded-full p-2 text-white bg-chivas-red shadow-md"
          >
            <img src="/icons/icon-info.svg" class="w-10" />
          </div>
        </div>
        <p class="text-base text-chivas-red text-center">
          Para evitar perder sus avances, no recargue la página.
        </p>
      </div>
      
    </div>
    <!-- <form> -->
    <section class="container mx-auto px-6 flex flex-col gap-2 my-4">
      <div class="grid grid-cols-1 md:grid-cols-6 gap-4">
        <div></div>
        <div class="md:col-span-4 flex flex-col md:flex-row gap-6">
          <aside class="md:w-1/3 bg-gray-100 rounded-xl shadow-md p-4 flex flex-col gap-2">
            <h3 class="text-chivas-red text-lg titillium-bold text-center">Solicitud</h3>
            <div>
              <p class="text-chivas-red titillium-bold">Evento:</p>
              <span class="uppercase">{{ resumen.evento.nombre }}</span>
            </div>
            <div>
              <p class="text-chivas-red titillium-bold">Tipo:</p>
              <span class="uppercase">{{ resumen.tipo }} - {{ resumen.detalles.tipo }}</span>
            </div>
            <div>
              <p class="text-chivas-red titillium-bold">Dirección / Area a Apoyar:</p>
              <span class="uppercase">{{ resumen.detalles.direccion_apoyo }} - {{ resumen.detalles.area_operacion }}</span>
            </div>
            <div>
              <p class="text-chivas-red titillium-bold">Tot. empleados:</p>
              <span>{{ resumen.detalles.personas }} personas</span>
            </div>
            <div>
              <p class="text-chivas-red titillium-bold">Tot. Boxlunch:</p>
              <span>{{ resumen.detalles.tot_producto }} Box lunch</span>
            </div>
          </aside>
          <aside class="md:w-2/3 bg-gray-100 rounded-lg shadow-md p-4 flex flex-col gap-1">
            <h3 class="text-chivas-red text-lg titillium-bold text-center">Solicitante</h3>
            <div>
              <p class="text-chivas-red titillium-bold">Nombre:</p>
              <span>{{ resumen.nombres }} {{ resumen.apellido_paterno }} {{ resumen.apellido_materno }}</span>
            </div>
            <div>
              <p class="text-chivas-red titillium-bold">Empresa:</p>
              <span>{{ resumen.empresa }}</span>
            </div>
            <div>
              <p class="text-chivas-red titillium-bold">Email:</p>
              <span>{{ resumen.email }}</span>
            </div>
            <div>
              <p class="text-chivas-red titillium-bold">Teléfono:</p>
              <span>{{ resumen.telefono }}</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
    <section class="my-4 container mx-auto px-6">
      <h2 class="titillium-bold text-xl my-6">Listado de empleados del grupo</h2>
      <div v-if="resumen.detalles.personas > 0" class="overflow-auto">
        <table class="table-auto">
          <thead>
            <th>#</th>
            <th>NO. ACREDITACIÓN</th>
            <th>NOMBRE</th>
            <th>EMPRESA</th>
            <th>DIRECCIÓN LABORAL</th>
            <th>DEPARTAMENTO/AREA</th>
            <th>{{ resumen.staff === 'staff' ? 'NÓMINA' : 'INE' }}</th>
            <th>EMAIL</th>
            <th>TELÉFONO</th>
            <th>HORA ENTRADA</th>
            <th>HORA SALIDA</th>
            <th>HORAS</th>
            <th>BOXLUNCH</th>
          </thead>
          <tbody>
            <tr v-for="(emp, item) in resumen.solicitantes" :key="`emp_${item}`">
              <td>{{ item + 1 }}</td>
              <td>{{ emp.numero_acreditacion }}</td>
              <td>{{ emp.nombres }} {{ emp.apellido_paterno }} {{ emp.apellido_materno }}</td>
              <td>{{ emp.empresa }}</td>
              <td>{{ emp.direccion_laboral }}</td>
              <td>{{ emp.area }}</td>
              <td>{{ emp.nomina_ine }}</td>
              <td>{{ emp.email }}</td>
              <td>{{ emp.telefono }}</td>
              <td>{{ emp.hora_entrada }}</td>
              <td>{{ emp.hora_salida }}</td>
              <td>{{ emp.horas }} Hrs.</td>
              <td>{{ emp.cant_productos }} pz(s).</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else class="bg-gray-100 rounded-xl p-4 text-center flex flex-col gap-4 items-center justify-center">
        <p>No se han cargado datos en el reporte</p>
        <nuxt-link
          to="/"
          class="rounded-full bg-chivas-red text-white py-2 px-6 animate-pulse shadow-md"
        >
          REINTENTAR
        </nuxt-link>
      </div>
        <!-- {{ resumen }} -->
    </section>
    <loading v-if="loading" />
    <button
      v-else-if="resumen.detalles.personas > 0"
      class="w-full bg-chivas-red text-white sticky bottom-0 p-6 titillium-bold text-lg z-30"
      @click="confirmarSolicitud()"
    >
      CONFIRMAR
    </button>
    <!-- </form> -->
  </main>
</template>
<script>
import { mapActions } from 'vuex'
import { cloneDeep } from 'lodash-es';
export default {
  name: 'ResumenSolicitud',
  data() {
    return  {
      loading: false,
    }
  },
  computed: {
    resumen() {
      return this.$store.getters.getInfo('resumen')
    },
    response() {
      return this.$store.getters.getInfo('response')
    },
  },
  created() {
    if (this.resumen.local) {
      this.$router.push('/')
    }
  },
  async mounted() {
    try {
      await this.$recaptcha.init()
    } catch (e) {
      console.error(e);
    }
  },
  methods: {
    ...mapActions({
      postApi: 'postFunction',
    }),
    backHome() {
      if (confirm('¿Está seguro que desea cancelar la carga?')) {
        this.$router.push('/')
      }
    },
    async confirmarSolicitud() {
      if (confirm('¿Desea continuar con el proceso de solicitud?')) {
        this.loading = true
        const resumen = cloneDeep(this.resumen)
        resumen.recaptcha_token = await this.$recaptcha.execute('grupal')
        await this.postApi({
          url: '/acreditaciones/public/boxlunch/solicitar-grupal',
          payload: resumen,
          key: 'response',
        })
        if (this.response.messages) {
          this.response.messages.forEach((message) => {
            this.$toast.error(`${message.campo} - ${message.message}`)
          })
          this.loading = false
          return false
        }
        if (this.response.error && this.response.error === true) {
          this.loading = false
          this.$toast.error(this.response.message)
        } else {
          this.$toast.success(this.response.message)
          this.$router.push(`/boxlunch/confirmacion/?solicitud=${this.response.data.id}`)
        }
        this.loading = false
      }
    },
  }
}
</script>
