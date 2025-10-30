<template>
  <div class="flex flex-col bg-gray-light rounded-xl p-2">
    <div v-if="label !== ''" class="uppercase">{{ label }}:</div>
    <div class="flex gap-1">
      <input
        :id="id"
        :name="id"
        :value="value"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readOnly"
        :required="required"
        :minlength="min"
        :maxlength="max"
        class="w-full bg-transparent focus:outline-none p-2 text-sm transition duration-300 ease-in-out border-b-gray-dark focus:border-b-primary uppercase"
        :class="`${value !== '' ? 'text-primary' : '' } ${customClass}`"
        :oninput="type === 'number' ? oninput : ''"
        @input="$emit('input', $event.target.value)"
      >
      <div v-if="required" class="m-auto">
        <span class="text-lg text-primary p-0 inline-block align-middle">*</span>
      </div>
    </div>  
  </div>
</template>
<script>
export default {
  name: 'FormInputLess',
  props: {
    id: {
      type: [String, Number],
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number, Object],
      default: '',
      required: true
    },
    placeholder: {
      type: String,
      default: '',
      required: false
    },
    type: {
      type: String,
      default: 'text',
      validator: (value) => {
        return [
          'text',
          'password',
          'email',
          'color',
          'date',
          'hidden',
          'number',
          'range',
          'tel',
          'time'
        ].includes(value)
      }
    },
    customClass: {
      type: String,
      default: ''
    },
    classLabel: {
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
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 254
    },
    oninput: {
      type: String,
      default: ''
    }
  }
}
</script>
