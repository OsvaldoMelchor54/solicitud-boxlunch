<template id="">
  <!-- Main modal -->
  <transition name="page">
    <div
      v-if="open"
      :id="id"
      aria-hidden="true"
      class="
        overflow-y-auto overflow-x-hidden
        fixed
        top-0
        right-0
        left-0
        z-50
        w-full
        md:inset-0
        h-full
        md:h-full
        bg-opacity-75
      "
      :class="bgColor"
      tabindex="-1"
      @focus="opening(false)"
    >
      <div
        class="relative p-4 w-full max-w-6xl h-full md:h-auto m-auto"
        tabindex="0"
        @focus="opening(true)"
      >
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow">
          <!-- Modal header -->
          <div class="flex justify-between items-start p-4 rounded-t border-b">
            <slot name="title"/>
            <button
              type="button"
              class="
                text-gray-400
                bg-transparent
                hover:bg-gray-200 hover:text-gray-900
                rounded-lg
                text-sm
                p-1.5
                ml-auto
                inline-flex
                items-center
                focus:outline-none
              "
              :data-modal-toggle="id"
              @click="opening(false)"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Cerrar</span>
            </button>
          </div>
          <!-- Modal body -->
          <div class="p-6 space-y-6 overflow-auto max-h-screen">
            <slot name="body" />
          </div>
          <!-- Modal footer -->
          <div
            v-if="$slots.footer"
            class="
              flex
              items-center
              p-6
              space-x-2
              rounded-b
              border-t border-gray-200
            "
          >
            <slot name="footer" />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ModalDefault',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    bgColor: {
      type: String,
      default: "bg-gray-500",
    },
    id: {
      type: String,
      default: 'defaultModal'
    },
  },
  data() {
    return {
      open: false,
    }
  },
  watch: {
    show() {
      this.open = this.show
      if (this.open) {
        window.scrollTo(0, 1)
        // location.href = '#defaultModal'
      }
    },
  },
  mounted() {
    this.open = this.show
    // this.opening(true)
  },
  methods: {
    opening(value = true) {
      // if (!value) {
      // location.href = '#'
      this.open = value
      this.$forceUpdate()
      this.$emit('show', value)
      // }
    },
  },
}
</script>
