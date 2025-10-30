<template>
  <div class="flex justify-center items-center">
    <LottieAnimation
      ref="loading"
      :loop="true"
      :animation-data="require('@/assets/lotties/chivas_check.json')"
      :class="customClass"
    />
  </div>
</template>
<script>
import LottieAnimation from 'lottie-web-vue'
export default {
  name: 'Loading',
  components: {
    LottieAnimation,
  },
  props: {
    customClass: {
      type: String,
      default: 'w-32',
    }
  },
}
</script>
