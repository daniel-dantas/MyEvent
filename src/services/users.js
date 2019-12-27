import  './inicializeApp'
import firebase from "react-native-firebase";

export default {
    authEmailSenha:  (email, senha) => {
        return firebase.auth().signInWithEmailAndPassword(email, senha).then(user => {
            return user
        }).catch(erro => {
            return false
        })
    },
    
    createUser: (email, senha) => {
         return firebase.auth().createUserWithEmailAndPassword(email,senha).then(user => {
             return user
         }).catch(erro => {
             return false
         })
    }
}