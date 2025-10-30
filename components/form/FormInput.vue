<template>
  <div class="relative flex flex-col w-full">
    <div v-if="label !== ''" class=" bg-white px-2 ml-2 absolute flex gap-1 items-center">
      <label :for="id" class="uppercase text-xs -mt-2">
        {{ label }}
        <span v-if="required" class="text-chivas-red">*</span>
      </label>
    </div>
    <div class="flex gap-1 bg-white rounded-lg shadow-md">
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
      class="border bg-transparent rounded-lg px-4 py-3 w-full focus:outline-none uppercase text-chivas-red"
      :class="`${value !== '' ? 'text-primary' : '' } ${customClass}`"
      :oninput="type === 'number' ? oninput : ''"
      @input="
        $emit(
          'input', ['password', 'email'].includes(type)
          ? $event.target.value : $event.target.value.toUpperCase()
        )
      "
      >
      <!-- <div  class="m-auto">
        <span class="text-lg text-primary p-0 inline-block align-middle">*</span>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'FormInput',
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
      required: false
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
