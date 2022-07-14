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

      commit( 'setTodos', responseBody )
    }
  }
}