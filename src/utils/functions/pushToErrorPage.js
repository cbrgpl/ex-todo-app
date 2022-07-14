import router from '@/router'

export const pushToErrorPage = () => {
  router.push( { name: 'errorPage' } )    
}