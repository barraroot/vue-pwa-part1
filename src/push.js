import firebase from 'firebase'

export default function(){
    
    if('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./static/firebase-messaging-sw.js')
            .then(registration => {
                const messaging = firebase.messaging()

                let getToken = () => {
                    messaging.getToken()
                    .then(currentToken => {
                        if(currentToken) {
                            console.log(currentToken)
                            return currentToken
                        } else {
                            console.warn('Nenhum Token, solicite a permissão.')
                        }
                    })    
                }                

                messaging.useServiceWorker(registration)

                messaging.requestPermission()
                    .then(() => {
                        return getToken()
                    })
            })
            .catch(err => console.log('Erro: ',err))
    }
    
}