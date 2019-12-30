import './inicializeApp'

import firebase from 'react-native-firebase'


export default {
    createEvent: (event) => {
        return firebase.database().ref(`event/${new Date+event.nome}`).set(event).then(user => {
            return true
        }).catch(erro => {
            return false
        })
    },
    loadEventsForUser: (id) => {
        
    }
}
