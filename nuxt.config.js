const env = require('dotenv').config()
export default {

  // ENVIRONTMENT
  env: env.parsed,
  ssr: false,
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Portal de Acreditaciones Estadio AKRON',
    htmlAttrs: {
      lang: 'es',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '🔴⚪ ¡Tramita y solicita aquí tu acreditación al estadio AKRON!'
      },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          // '@/assets/imgs/seo.png',
          'https://braingoat-container.s3.amazonaws.com/assets/acreditaciones/slides/imagen_box_lunch.jpg',
      },
      {
        hid: 'description',
        name: 'description',
        content: '🔴⚪ ¡Tramita y solicita aquí tu acreditación al estadio AKRON!',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Portal de acreditaciones estadio AKRON',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'chivas,acreditacion,acreditaciones,permiso,staff,estadio,akron,solicitar,solicitud,boxlunch,box,lunch,club,deportivo,guadalajara,portal',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://braingoat-container.s3.amazonaws.com/assets/globales/logo-marca-chivas/clasicos/logo_chivas.svg' },
      { rel: 'canonical', href: 'https://facturacion.chivasdecorazon.com.mx' }
    ],
    script: [
      { src: 'https://www.googletagmanager.com/gtag/js?id=G-M4L6RKSS02' },
      { src: '/js/gtm.sj' },
      { src: '/js/gtag.sj' }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/style.css',
    '@/assets/css/animate.min.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/lotties.js',
    '~/plugins/toast.js',
    '~/plugins/signature.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
      // '~/components/layouts',
      '~/components/form',
      '~/components/cards'
    ]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://github.com/nuxt-community/dotenv-module#readme
    // Simple usage
    '@nuxtjs/dotenv',
    // https://www.npmjs.com/package/@nuxtjs/recaptcha
    '@nuxtjs/recaptcha',
    // '@nuxtjs/auth-next'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    credentials: true,
    baseURL:
      process.env.NODE_ENV === 'production'
        ? `https://${process.env.URL_API}/api/chivas` // 'https://apiqa.techtopia.mx/api/'
        // : `https://${process.env.URL_API}/api/chivas`,
        : 'http://localhost:8000/api/chivas',
    proxyHeaders: false,
    // eslint-disable-next-line no-dupe-keys
    // credentials: false,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['lodash-es'],
  },

  router: {
    // middleware: ['auth'],
  },

  // auth: {
  //   strategies: {
  //     local: {
  //       token: {
  //         property: 'token',
  //         global: true,
  //         // required: true,
  //         // type: 'Bearer'
  //       },
  //       user: {
  //         property: 'alumno',
  //         // autoFetch: true
  //       },
  //       endpoints: {
  //         login: { url: '/escuelas-chivas/portal/auth/login', method: 'post', headers: {'X-API-HASH': process.env.API_HASH } },
  //         logout: { url: '/escuelas-chivas/portal/auth/logout', method: 'post', headers: {'X-API-HASH': process.env.API_HASH }},
  //         user: { url: '/escuelas-chivas/portal/auth/referencia', method: 'get', headers: {'X-API-HASH': process.env.API_HASH }}
  //       }
  //     }
  //   }
  // },

  recaptcha: {
    version: 3,
    siteKey: process.env.RECAPTCHA_SITE_KEY, // for example
    hideBadge: true,
  },

  publicRuntimeConfig: {
    recaptcha: {
      version: 3,
      siteKey: process.env.RECAPTCHA_SITE_KEY, // for example
    },
  },
}
