import firebase from 'react-native-firebase'

export default {
    createEvent = (event) => {
        return firebase.firestore().collection('event').add(event).then(event => {
            return event
        }).catch(erro => {
            return false
        })
    }
}
