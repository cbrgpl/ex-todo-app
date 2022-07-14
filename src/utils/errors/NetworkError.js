import { ILogableError } from './_ILogableError'

export const NetworkError = class NetworkError extends ILogableError {
  constructor( response, body = null, ...args ) {
    super( ...args )
        
    this.response = response
    this.body = body
  }

  collectLogInformation() {
    return {
      status: this.response.status,
      body: this.body,
    }
  }
}