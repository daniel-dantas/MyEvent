import './inicializeApp'

import firebase from 'react-native-firebase'


export default {
    createEvent: (event) => {
        return firebase.database().ref().child('event').push(event).then(user => {
            return true
        }).catch(erro => {
            return false
        })
    },
    loadEvents: (id) => {
        
        return firebase.database().ref('event')
    }
}
