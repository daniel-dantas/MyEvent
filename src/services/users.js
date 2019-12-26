import  './inicializeApp'
import firebase from "react-native-firebase";

export default {
    authEmailSenha:  (email, senha) => {return firebase.auth().signInWithEmailAndPassword(email, senha)},
    createUser: (email, senha) => {
         return firebase.auth().createUserWithEmailAndPassword(email,senha)
    }
}