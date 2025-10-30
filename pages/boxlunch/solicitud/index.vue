<template>
  <main>
    <modal-default
      :show="info"
      bg-color="bg-gray-500"
      @show="(value) => (info = value)"
    >
      <template #title>
        <h3 class="titillium-bold text-lg">TIPS DE CARGA GRUPAL</h3>
      </template>
      <template #body>
        <section>
          <p class="font-semibold mb-2 text-lg text-chivas-red">
            Antes de cargar tu grupo toma en cuenta las siguientes recomendaciones:
          </p>
          <ol class="list-decimal ml-6">
            <li>Asegurate de usar la plantilla de carga actualizada.
              La puedes descargar presionando el botón "Descargar Plantilla" o haciendo click
              <a
                href="https://braingoat-container.s3.amazonaws.com/assets/acreditaciones/plantillas/Plantilla-Grupal-Boxlunch.xlsx"
                class="text-chivas-red"
                target="_blank"
              >AQUÍ</a>.
            </li>
            <li>Si el empleado solicitante también asistirá al evento este <strong>SI DEBE ESTAR INCLUIDO EN EL REPORTE</strong></li>
            <li>El peso máximo del archivo no debe exceder de 2MB.</li>
            <li>El archivo debe contener un máximo de 50 personas, si excede el límite el resto de registros no serán tomados en cuenta.</li>
            <li>En caso de que tu grupo sea mayor a 50 personas, puedes replicar el proceso las veces que sean necesarias con cada uno de tus grupos de 50 pesonas c/u.</li>
            <li>El formato de horas debe ser 24hrs. Por ejemplo: 08:00  (para indicar 8 AM), 13:00 (para indicar 1 PM). Formato de texto plano en Excel.</li>
            <li>Considerese obligatorios los siguientes campos:
              <ul class="list-disc ml-4">
                <li>Nombres</li>
                <li>Apellido Paterno</li>
                <li>Apellido Materno</li>
                <li>Hora Entrada</li>
                <li>Hora Salida</li>
                <li>Número de Nómina (Para Staff permanente)</li>
                <li>INE (Para Proveedores externos)</li>
                <li>Email (En caso de que el integrante del grupo no cuente con email corporativo, colocar el del solicitante)</li>
              </ul>
            </li>
            <li>Ingrese emails válidos y activos para poder recibir sus Voucher de comida y bebida.</li>
            <li>Rellenar con <strong>"NA"</strong> todas las celdas vacías.</li>
          </ol>
        </section>
      </template>
      <template #footer>
        <div class="w-full grid place-items-center">
          <button
            type="button"
            class="rounded-full py-2 px-6 text-white bg-chivas-red"
            @click="info = false"
          >
            ACEPTAR
          </button>
        </div>
      </template>
    </modal-default>
    <div class="container mx-auto">
      <h1 class="text-center text-chivas-blue-blacked bebas font-bold text-4xl tracking-widest">BIENVENIDO</h1>
      <p class="text-center py-4">Registra tu solicitud de Box-lunch para tu evento en el Estadio AKRON</p>
    </div>
    <loading v-if="loading" />
    <form
      v-else
      class="flex flex-col justify-center items-center gap-6"
      @submit.prevent="submit()"
    >
      <div class="mx-8 grid md:grid-cols-3">
        <div></div>
        <div class="flex flex-col gap-6">
          <h2 class="text-chivas-blue titillium-bold text-xl text-center my-4">
            DATOS DEL EMPLEADO SOLICITANTE
          </h2>
          <div class="text-right">
            <p class="text-sm text-chivas-red"><span class="pr-1 text-lg">*</span>Obligatorio</p>
          </div>
          <form-select
            id="evento"
            v-model="solicitud.id_evento"
            label="Evento"
            :options="eventos"
            :required="true"
          />
          <form-input
            id="email"
            v-model="solicitud.email"
            label="Email"
            type="email"
            :required="true"
          />
          <form-input
            id="nombres"
            v-model="solicitud.nombres"
            label="Nombre(s)"
            :required="true"
          />
          <form-input
            id="apellido_paterno"
            v-model="solicitud.apellido_paterno"
            label="Apellido Paterno"
            :required="true"
          />
          <form-input
            id="apellido_materno"
            v-model="solicitud.apellido_materno"
            label="Apellido Materno"
            :required="true"
          />
          <form-input
            id="telefono"
            v-model="solicitud.telefono"
            type="tel"
            label="Teléfono"
            :required="true"
          />
          <transition name="bounce">
            <form-input
              v-if="type !== 'staff'"
              id="empresa"
              v-model="solicitud.empresa"
              label="Empresa"
              :required="true"
            />
          </transition>
          <transition name="bounce">
            <form-input
              v-if="type === 'staff'"
              id="direccion"
              v-model="solicitud.direccion"
              label="Dirección a la que pertenece"
              :required="true"
            />
          </transition>
          <form-input
            id="departamento"
            v-model="solicitud.departamento"
            label="Departamento"
            :required="true"
          />
          <form-input
            id="nomina"
            v-model="solicitud.numero_empleado"
            :label="type === 'staff' ? 'Número de Empleado' : 'INE'"
            :required="true"
          />
          <form-input
            id="numero_acreditacion"
            v-model="solicitud.numero_acreditacion"
            label="Núm. Acreditación"
          />
          <form-input
            id="direccion_apoyo"
            v-model="solicitud.direccion_apoyo"
            label="Dirección a Apoyar"
            :required="true"
          />
          <form-input
            id="area_operacion"
            v-model="solicitud.area_operacion"
            label="Area en que Opera"
            :required="true"
          />
          <!-- :required="solicitud.staff === 'proveedor' ? false : true" -->
          <div class="flex justify-around gap-4 z-0">
            <!-- <span class="text-xs">INDIVIDUAL</span> -->
            <label for="individual" class="flex gap-2">
              <input id="individual" v-model="solicitud.tipo" type="radio" value="individual" />
              <span>INDIVIDUAL</span>
            </label>
            <label for="grupal" class="flex gap-2">
              <input id="grupal" v-model="solicitud.tipo" type="radio" value="grupal" />
              <span>GRUPAL</span>
            </label>
          </div>
          <transition name="bounce">
            <div v-if="solicitud.tipo === 'grupal'" class="flex flex-col gap-4">
              
              <div class="grid grid-cols-6 items-center justify-between gap-2 md:gap-4 place-items-stretch">
                <a
                  href="https://braingoat-container.s3.amazonaws.com/assets/acreditaciones/plantillas/Plantilla-Grupal-Boxlunch.xlsx"
                  class="bg-chivas-blue rounded-full p-4 text-white flex gap-2 shadow-md col-span-4"
                  target="_blank"
                >
                  <img
                    src="https://braingoat-container.s3.amazonaws.com/assets/globales/iconos/icon_download_blanco.svg"
                    class="w-6"
                    alt="attach_icon"
                  />
                  <span>Descargar Plantilla</span>
                </a>
                <button
                  type="button"
                  class="col-span-2 w-full mx-auto animate-pulse h-12 rounded-full p-2 text-white bg-chivas-red shadow-md flex items-center justify-center gap-2"
                  @click="info = !info"
                >
                  <img src="/icons/icon-info.svg" class="w-6" />
                  <span>Ayuda</span>
                </button>
              </div>
              <form-input-file
                id="grupo"
                label="Cargar Reporte"
                accept=".xls,.xls,.xlsx,.csv"
                :regex="/(\.xls|\.xlsx|\.csv)$/i"
                bg-color="bg-chivas-blue"
                @change="(value) => (solicitud.reporte_grupo = value)"
              />
              <!-- <div class="flex items-center gap-4">
                <input
                  id="incluir_solicitante"
                  v-model="solicitud.incluir_solicitante"
                  name="incluir_solicitante"
                  type="checkbox"
                />
                <label for="incluir_solicitante" class="text-lg">
                  Inlcuirme en la lista de solicitud de boxlunch
                </label>
              </div> -->
            </div>
          </transition>
          <transition name="bounce">
            <div
              v-if="solicitud.tipo === 'individual' || solicitud.incluir_solicitante"
              class="flex flex-col gap-6"
            >
              <form-input
                id="hora_entrada"
                v-model="solicitud.hora_entrada"
                type="time"
                label="Hora Entrada"
                :required="true"
              />
              <form-input
                id="hora_salida"
                v-model="solicitud.hora_salida"
                type="time"
                label="Hora Salida"
                :required="true"
              />
            </div>
          </transition>
        </div>
      </div>
      <button
        class="w-full bg-chivas-red text-white sticky bottom-0 p-6 titillium-bold text-lg"
      >
        {{ solicitud.tipo === 'individual' ? 'SOLICITAR' : 'CONTINUAR' }}
      </button>
    </form>
  </main>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'SolicitarBoxlunch',
  data() {
    return {
      loading: true,
      type: '',
      solicitud: {
        tipo: 'individual',
        incluir_solicitante: false,
      },
      info: false,
    }
  },
  computed: {
    types() {
      return this.$store.getters.getInfo('types')
    },
    eventos() {
      const eventos = this.$store.getters.getInfo('eventos')
      return eventos.map((even) => {
        return {
          label: even.nombre,
          value: even.id,
        }
      })
    },
    response() {
      return this.$store.getters.getInfo('solicitud')
    },
    resumen() {
      return this.$store.getters.getInfo('resumen')
    },
  },
  created() {
    this.loading = true
    this.type = this.$route.query.type
    if (!this.type) {
      this.$toast.error('Elija un tipo de solicitud')
      this.$router.push('/')
      return false
    }
    if (!this.types.find((t) => {
      return t.value === this.type
    })) {
      this.$toast.error('Tipo de solicitud no valida')
      this.$router.push('/')
      return false
    }
    this.solicitud.staff = this.type
    this.solicitud.empresa = this.type === 'staff' ? 'Club Deportivo Guadalajara' : ''
    this.loading = false
    this.getEvents()
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
      fetchApi: 'getDataApiKey',
      postApi: 'postFunction',
    }),
    async getEvents() {
      this.loading = true
      await this.fetchApi({
        url: '/master/eventos-plataforma?plataforma=acreditaciones',
        key: 'eventos'
      })
      this.loading = false
    },
    async submit() {
      this.loading = true
      if (this.solicitud.tipo === 'individual') {
        this.solicitud.recaptcha_token = await this.$recaptcha.execute('individual')
        await this.postApi({
          url: '/acreditaciones/public/boxlunch/solicitar-individual',
          payload: this.solicitud,
          key: 'solicitud',
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
      } else {
        if (!this.solicitud.reporte_grupo) {
          this.loading = false
          this.$toast.error('Adjunte el reporte de su grupo')
          return
        }
        this.solicitud.recaptcha_token = await this.$recaptcha.execute('resumengrupal')
        const form = new FormData()
        for(const key in this.solicitud) {
          form.append(key, this.solicitud[key])
        }
        await this.postApi({
          url: '/acreditaciones/public/boxlunch/resumen-grupal',
          payload: form,
          key: 'resumen',
        })
        if (this.resumen.messages) {
          this.resumen.messages.forEach((message) => {
            this.$toast.error(`${message.campo} - ${message.message}`)
          })
          this.loading = false
          return false
        }
        if (this.resumen.error) {
          this.loading = false
          this.$toast.error(this.resumen.message)
          return false
        }
        this.$router.push('/boxlunch/solicitud/resumen')
      }
    },
  },
}
</script>
