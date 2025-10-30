<template>
  <div class="flex flex-col gap-2">
    <label
      :for="id"
      class="rounded-full shadow-md px-4 py-3 text-white flex justify-between gap-2 cursor-pointer transition duration-500 ease-in-out"
      :class="file ? 'bg-success' : bgColor"
    >
      <div
        class="focus:outline-none label-file flex gap-2 items-center justify-center"
        :class="file ? 'text-xs' : 'text-base'"
      >
        <span>
          <img
            src="https://braingoat-container.s3.amazonaws.com/assets/globales/iconos/icon_attach_file.svg"
            class="w-6"
            alt="attach_icon"
          >
        </span>
        {{ file ? 'Seleccionado' : label }}
        <input
          :id="id"
          :name="id"
          type="file"
          :class="customClass"
          :disabled="disabled"
          :readonly="readOnly"
          :required="required"
          :accept="accept"
          class="bg-white rounded-full px-4 py-2 w-full focus:outline-none"
          @change="getFile"
        >
      </div>
      <transition
        name="custom-classes"
        enter-active-class="animate__animated animate__pulse"
        leave-active-class="animate__animated animate__pulse"
      >
        <span v-if="file" class="h-8 w-8 bg-white rounded-full flex items.center justify-center p-2">
          <img
            src="https://braingoat-container.s3.amazonaws.com/assets/globales/iconos/icon_check_rojo.svg"
            class="fill-current text-secondary"
            alt="logo_check"
          >
        </span>
      </transition>
    </label>
    <transition
      name="custom-classes"
      enter-active-class="animate__animated animate__pulse"
      leave-active-class="animate__animated animate__pulse"
    >
      <span v-if="file" class="text-primary text-xs">
        {{ file.name }}
      </span>
    </transition>
  </div>
</template>

<script>
import { fetchFile } from '~/helpers/index.js'
export default {
  name: 'FormInputFile',
  props: {
    id: {
      type: [String, Number],
      default: ''
    },
    label: {
      type: String,
      default: 'Seleccionar archivo'
    },
    // value: {
    //   type: [String, Number, Object],
    //   default: '',
    //   required: true
    // },
    customClass: {
      type: String,
      default: ''
    },
    readOnly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    accept: {
      type: String,
      default: 'image/*',
      required: false,
    },
    regex: {
      type: RegExp,
      default: /(\.jpg|\.jpeg|\.png)$/i,
      required: false,
    },
    maxSize: {
      type: Number,
      required: false,
      default: 2
    },
    base64: {
      type: Boolean,
      default: false,
    },
    bgColor: {
      type: String,
      default: 'bg-chivas-red',
      required: false,
    }
  },
  data () {
    return {
      file: null
    }
  },
  methods: {
    getFile (e) {
      const file = fetchFile(e, this.regex)
      // console.log(file)
      if (!file) {
        this.file = null
        this.$toast.error('Formato no válido')
        return 0
      }
      // console.log(this.maxSize)
      // console.log(file.size /1000)
      if ((file.size / 1000) > (this.maxSize * 1024)) {
        this.$toast.error(`Archivo muy grande: Seleccione archivos menores a ${this.maxSize}MB`)
        return 0
      }
      this.file = file
      this.$forceUpdate()
      this.$emit('change', this.file)
      if (this.base64) {
        // console.log(this.getBase64(this.file))
        this.getBase64(this.file)
      }
    },
    getBase64(file) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        // console.log(reader.result)
        // return reader.result
        this.$emit('inBase64', reader.result)
      }
      reader.onerror = (error) => {
        this.$toast.error(error)
        return ''
      }
    }
  }
}
</script>
<style class="scoped">
input[type="file"] {
    display: none;
}
</style>
