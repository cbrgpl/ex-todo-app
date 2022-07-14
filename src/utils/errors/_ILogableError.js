export const ILogableError = class ILogableError {
  collectLogInformation() {
    throw Error( 'Method collectLogInformation must have implementation' )
  }
}