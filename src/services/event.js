import './inicializeApp'

import firebase from 'react-native-firebase'

// firebase.app()

export default {
    createEvent: (event) => {
        return firebase.database().ref().child('event').push(event).then(user => {
            return true
        }).catch(erro => {
            return false
        })
    },
    loadEvents: () => {
        
        return firebase.database().ref('event')
    },
    deleteEvents: (key) => {
        return firebase.database().ref(`event/${key}`).remove()
    }
}
