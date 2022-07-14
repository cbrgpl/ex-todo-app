import { arrayUtils } from 'js_utils'

export default {
  namespaced: true,
  state: {
    users: []
  },
  getters: {
    users: ( state ) => state.users,
  },
  mutations: {
    setUsers( state, users ) {
      state.users = users
    },
    clear( state ) {
      state.users = []
    }
  },
  actions: {
    composeUsers( { commit, rootGetters } ) {
      const todos = rootGetters[ 'todo/todos' ]

      const users = arrayUtils.group( todos, ( todo ) => todo.userId )

      commit( 'setUsers', users )
    }
  }
}