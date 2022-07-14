import { arrayUtils } from 'js_utils'

import { formatUsers } from './../_utils/user.formatUser.js'

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
    composeUsers( { commit, rootGetters }  ) {
      const todos = rootGetters[ 'todo/todos' ]

      const users = arrayUtils.group( todos, ( todo ) => todo.userId )      
      const formattedUsers = formatUsers( users ) 

      formattedUsers.sort( ( a, b ) => b.completed - a.completed || a.id - b.id )

      commit( 'setUsers', formattedUsers )
    }
  }
}