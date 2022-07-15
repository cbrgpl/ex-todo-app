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
    username: sessionStorage.getItem( STORAGE_VARS.USERNAME ) || localStorage.getItem( STORAGE_VARS.USERNAME ),
  },
  getters: {
    token: ( state ) => state.token,
    username: ( state ) => state.username, 
  },
  mutations: {
    setToken( state, token ) {
      state.token = token
    },
    setUsername( state, username ) {
      state.username = username
    },
    clear( state ) {
      localStorage.removeItem( STORAGE_VARS.TOKEN )
      state.token = null

      localStorage.removeItem( STORAGE_VARS.USERNAME )
      state.username = null
    }
  },
  actions: {
    async logIn( { commit }, logInData ) {
      const logInResponse = await authService.logIn( logInData )
      const responseBody = await logInResponse.json()
        
      // ТЗ Это скорее просто демонстрация того, как бы я делал
      if( logInResponse.status === 200 ) {
        commit( 'setToken', responseBody.token )
        commit( 'setUsername', responseBody.username )
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
        commit( 'clear' )
        return getActionResult( false )
      } else {
        throwError( new NetworkError( logOutResponse ) )
        return getActionResult( null )
      }
    }
  }
}