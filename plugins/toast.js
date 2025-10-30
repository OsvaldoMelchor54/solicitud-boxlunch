import Vue from 'vue'
import VueToast from 'vue-toast-notification'
// import vueSignature from 'vue-signature'
// import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-sugar.css'

const options = {
  duration: 5000,
}
Vue.use(VueToast, options)
// Vue.use(vueSignature, {
//   penColor: "rgb(0, 0, 0)",
//   backgroundColor: "rgb(241,241,241)",
// })
