import store from './../'

export const throwError = ( error ) => {
  store.dispatch( 'error/registrateError', error )
}