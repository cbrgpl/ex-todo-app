export const testingRouteGuard = ( to, from, next ) => {
  if( process.env.NODE_ENV === 'production' ) {
    next( { name: 'root' } )
  } else {
    next()
  }
}