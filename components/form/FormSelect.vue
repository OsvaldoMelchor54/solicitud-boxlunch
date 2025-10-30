<template>
  <div class="flex flex-col w-full">
    <!-- <div v-if="label !== ''" class="uppercase">{{ label }}:</div> -->
    <div v-if="label !== ''" class=" bg-white px-2 ml-2 absolute flex gap-1 items-center z-10">
      <label :for="id" class="uppercase text-xs -mt-2">
        {{ label }}
        <span v-if="required" class="text-chivas-red">*</span>
      </label>
    </div>
    <div class="flex gap-1 bg-white rounded-lg shadow-md z-0">
      <select
        :id="`select_${id}`"
        :ref="`select_${id}`"
        :value="value"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readOnly"
        :required="required"
        :style="`background-image: url(${iconImage}); background-repeat: no-repeat;`"
        class="border appearance-none w-full bg-custom--select bg-transparent rounded-lg p-4 leading-tight focus:outline-none transition ease-in-out"
        :class="`text-chivas-red ${customClass}`"
        @input="$emit('input', $event.target.value)"
        @change="$emit('change', $event)"
      >
        <option value="" class="py-2" disabled selected>
          {{ placeholder }}
        </option>
        <option
          v-for="(option, key) in options"
          :key="`option_${id}_${option.value}_${key}`"
          :value="option.value"
          class="py-2 text-chivas-red"
        >
          {{ option.label || option.text }}
        </option>
      </select>
      <!-- <div v-if="required" class="m-auto">
        <span class="text-lg text-primary p-0 inline-block align-middle">*</span>
      </div> -->
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
      required: false
    },
    options: {
      type: Array,
      default: () => [],
      required: true
    },
    placeholder: {
      type: String,
      default: '...'
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
  background: transparent no-repeat right 0.75rem center/25px 25px;
  appearance: none;
}
</style>
