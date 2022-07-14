const getFormattedUserTemplate = () => ( {
  todos: Array,
  completed: 0,
  incompleted: 0
} )

export const formatUsers = ( users ) => Object.keys( users ).map( ( userId ) => {
  const userTodos = users[ userId ]
  const formattedUser = getFormattedUserTemplate()

  formattedUser.id = userTodos[ 0 ].userId
  formattedUser.todos = userTodos
  
  for( const todo of userTodos ) {
    formattedUser.completed += todo.completed
  }
  formattedUser.incompleted = formattedUser.todos.length - formattedUser.completed

  return formattedUser
} )