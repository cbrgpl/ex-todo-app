import { 
  getActionResult,
  throwError 
} from '../_utils'

import { NetworkError } from '@/utils/errors/NetworkError.js'

export default {
  namespaced: true,
  state: {
    todos: [],
  },
  getters: {
    todos: ( state ) => state.todos,
  },
  mutations: {
    setTodos( state, todos ) {
      state.todos = todos
    },
    clear( state ) {
      state.todos = []
    }
  },
  actions: {
    async requestTodos( { commit } ) {
      const todoResponse = await fetch( process.env.VUE_APP_TODO_URL )
      const responseBody = await todoResponse.json()

      // ТЗ Это скорее просто демонстрация того, как бы я делал
      if( todoResponse.status === 200 ) {
        commit( 'setTodos', responseBody )
        return getActionResult( false )
      } else {
        throwError( new NetworkError( todoResponse, responseBody ) )
        return getActionResult( null )
      }
    }
  }
}