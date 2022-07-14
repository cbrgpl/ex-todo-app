export default {
  namespaced: true,
  state: {
    todos: [],
    todosLoaded: false,
  },
  getters: {
    todos: ( state ) => state.todos,
    todosLoaded: ( state ) => state.todosLoaded
  },
  mutations: {
    setTodos( state, todos ) {
      state.todos = todos
    },
    setTodosLoaded( state, todosLoaded ) {
      state.todoLoaded = todosLoaded
    },
    clear( state ) {
      state.todosLoaded = false
      state.todos = []
    }
  },
  actions: {
    async requestTodos( { commit } ) {
      const todoResponse = await fetch( process.env.VUE_APP_TODO_URL )
      const responseBody = await todoResponse.json()

      commit( 'setTodos', responseBody )
      commit( 'setTodosLoaded', true )
    }
  }
}