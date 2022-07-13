const SECURITY = {
  USERNAME: 'username',
  PASSWORD: 'password',
  TOKEN: 'QFSKFODSPXFPP2P2P2PSDFPFSF--F-'
}

const wrapInFakeResponse = ( status, data  ) => {
  return new Promise( ( resolve ) => {
    setTimeout( () => {
      resolve( {
        status,
        json() {
          return new Promise( ( resolve ) => {
            setTimeout( () => {
              resolve( data )
            }, 0 )
          } )
        }
      } )
    }, 1000 + Math.random() * 1000 )
  } )
}

class AuthService {


  logIn( { username, password } ) {
    if( username === SECURITY.USERNAME && password === SECURITY.PASSWORD ) {
      return wrapInFakeResponse( 200, { token: SECURITY.TOKEN } )
    } else {
      return wrapInFakeResponse( 400, { errors: [ { message: 'The transmitted data is incorrect' } ] } )
    }
  }

  logOut() {
    return wrapInFakeResponse( 200 )
  }
}

export const authService = new AuthService()