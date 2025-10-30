// import { regimenesFiscales, usosCFDI } from '~/helpers/chivas'
export const state = () => ({
  // error: {},
  // step: 1,
  // schools: {
  //   error: false,
  //   schools: [{
  //     ciclos_activos: [{
  //       categorias_activas: [],
  //     }],
  //   }],
  // },
  // inscripcion: {},
  // tutores: {
  //   error: false,
  // },
  // pagination: {},
  // alumno: {
  //   error: false
  // },
  // inscripcionalumno: {
  //   error: false,
  // },
  // firma: {},
  // comprobar: {
  //   error: false,
  //   message: '',
  // },
  // categoriaskits: {
  //   'error': false,
  //   'data': [{
  //     id: 1,
  //     nombre: 'Adulto',
  //     posiciones_uni: [
  //       {
  //         id: 1,
  //         nombre: 'Portero Local',
  //         posiciones_variantes: [
  //           {
  //             id: 1,
  //             // nombre: 'Talla CH',
  //             variante: {
  //               nombre: 'Chica'
  //             }
  //           }
  //         ],
  //       },
  //     ],
  //   }]},
  types: [
    { name: 'Staff Permanente', value: 'staff' },
    // { name: 'Proveedores', value: 'proveedor' },
  ],
  eventos: [],
  solicitud: {
    error: false,
    data: {},
    detalles: {},
    solicitante: {
      proveedor: {},
    },
  },
  resumen:
  {
    local: true,
    error: false,
    evento: {},
    solicitantes: [],
    detalles: {},
  },
})

export const mutations = {
  mutateData (state, payload) {
    state.data = payload
  },
  toState (state, { key, payload }) {
    state[key] = payload
  }
}

export const getters = {
  getInfo: state => (key) => {
    return state[key]
  }
}

export const actions = {
  async getDataApiKey ({ commit }, { url, key, headers = {} }) {
    try {
      // headers['X-API-HASH'] = process.env.API_HASH

      const { data } = await this.$axios.get(url, {
        headers
      })
      commit('toState', { key, payload: data })
      // eslint-disable-next-line no-empty
    } catch (error) {
      // console.error(error)
      commit('toState', { key: 'error', payload: error })
    }
  },
//   async getDataApiThird ({ commit }, { url, k, headers = {} }) {
//     try {
//       const { data } = await this.$axios.get(url, {
//         headers
//       })
//       commit('toState', { key: k, payload: data })
//       // eslint-disable-next-line no-empty
//     } catch (error) {
//       // console.error(error)
//       commit('toState', { key: 'error', payload: error })
//     }
//   },
  async postFunction ({ commit }, { url, payload, key = null }) {
    try {
      const { data } = await this.$axios.post(url, payload, {
        // headers: { 'X-API-HASH': process.env.API_HASH }
      })
      if (key) { commit('toState', { key, payload: data }) }
      // eslint-disable-next-line no-empty
    } catch (error) {
      // console.error(error)
      commit('toState', { key: 'error', payload: error })
    }
  }
}
