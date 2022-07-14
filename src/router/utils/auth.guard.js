import store from '@/store'

export const authGuard = ( to, from, next ) => {
  const token = store.getters[ 'auth/token' ]
  const routeAuth = to.meta.auth


  if( !token && routeAuth === true ) {
    next( { name: 'auth' } )
  } else if( token && routeAuth === false ) {
    next( { name: 'todo' } )
  } else {
    next()
  }
}