import { pushToErrorPage } from '@functions/pushToErrorPage.js'

let logNumber = 0

export default {
  namespaced: true,
  state: {
    errors: [],
  },
  getters: {
    errorBufferEmpty: ( state ) => state.errors.length === 0, 
    errorInstances: ( state ) => state.errors.map( ( error ) => error.collectLogInformation() )
  },
  mutations: {
    pushError( state, error ) {
      state.errors.push( error )
    },
    clearErrorBuffer( state ) {
      state.errors = []
    }
  },
  actions: {
    registrateError( { commit }, error ) {
      commit( 'pushError', error )
      pushToErrorPage()
    },
    logErrors( { getters } ) {
      console.group( `Error Log ${ ++logNumber }` )
      console.log( getters.errorInstances )
      console.groupEnd()
    }
  },
}