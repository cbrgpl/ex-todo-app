import { 
  getActionResult,
  throwError 
} from '../_utils'

import { authService } from '@services/authService'

import { STORAGE_VARS } from 'consts'

import { NetworkError } from '@/utils/errors/NetworkError.js'

export default {
  namespaced: true,
  state: {
    token: sessionStorage.getItem( STORAGE_VARS.TOKEN ) || localStorage.getItem( STORAGE_VARS.TOKEN ),
    username: null,
  },
  getters: {
    token: ( state ) => state.token,
    username: ( state ) => state.username, 
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
        
      // ТЗ Это скорее просто демонстрация того, как бы я делал
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

      // ТЗ Это скорее просто демонстрация того, как бы я делал
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