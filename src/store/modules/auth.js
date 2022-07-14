import { 
  getActionResult,
  throwError 
} from '../_utils'

import { authService } from '@services/authService'

import { NetworkError } from '@/utils/errors/NetworkError.js'

export default {
  namespaced: true,
  state: {
    token: null,
  },
  getters: {
    token: ( state ) => state.token,
  },
  mutations: {
    setToken( state, token ) {
      state.token = token
    },
    clearToken( state ) {
      state.toekn = null
    }
  },
  actions: {
    async logIn( { commit }, logInData ) {
      const logInResponse = await authService.logIn( logInData )
      const responseBody = await logInResponse.json()
        
      if( logInResponse.status === 200 ) {
        commit( 'setToken', responseBody.token )
        return getActionResult( false, responseBody )
      } else if( logInResponse.status === 400 ) {
        return getActionResult( true, responseBody )
      } else {
        throwError( new NetworkError( logInResponse, responseBody ) )
        return getActionResult( null )
      }
    },
    async logOut( { commit } ) {
      const logOutResponse = await authService.logOut()

      if( logOutResponse.status === 200 ) {
        commit( 'clearToken' )
        return getActionResult( false )
      } else {
        throwError( new NetworkError( logOutResponse ) )
        return getActionResult( null )
      }
    }
  }
}