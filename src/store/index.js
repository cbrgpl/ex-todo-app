import { createStore } from 'vuex'

import auth from './modules/auth'
import error from './modules/error'
import todo from './modules/todo'
import user from './modules/user'

export default createStore( {
  modules: {
    auth,
    error,
    todo,
    user
  }
} )
