<template>
  <div>
    <label
      v-if="label"
      :id="`select_${id}`"
      class="block tracking-wide text-chivasblue mb-2"
    >
      {{ label }}
      <span v-if="required" class="text-red-600 font-semibold">*</span>
    </label>
    <div class="relative">
      <select
        :id="`select_${id}`"
        :ref="`select_${id}`"
        :value="value"
        :placeholder="placeholder"
        :class="customClass"
        :disabled="disabled"
        :readonly="readOnly"
        :required="required"
        :style="`background-image:url(${iconImage}); background-repeat: no-repeat;z-index:0;`"
        class="appearance-none w-full bg-custom--select bg-gray-light text-secondary rounded-lg p-2 leading-tight focus:outline-none transition ease-in-out"
        @input="$emit('input', $event.target.value.toUpperCase())"
        @change="$emit('change', $event)"
      >
        <option value="" class="py-2" disabled selected>
          {{ placeholder }}
        </option>
        <option
          v-for="(option, key) in options"
          :key="`option_${id}_${key}`"
          :value="option.value"
          class="py-2 text-secondary"
        >
          {{ option.label || option.text }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: '',
      required: true
    },
    label: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readOnly: {
      type: Boolean,
      default: false
    },
    customClass: {
      type: String,
      default: ''
    },
    iconImage: {
      type: String,
      default: '/icons/arrow-down.svg'
    },
    value: {
      type: [String, Number],
      default: '',
      required: true
    },
    options: {
      type: Array,
      default: () => [],
      required: true
    },
    placeholder: {
      type: String,
      default: 'SELECCIONA...'
    },
    required: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style scoped>
.bg-custom--select {
  background: #EAEAEA no-repeat right 0.75rem center/25px 25px;
  appearance: none;
}
</style>
