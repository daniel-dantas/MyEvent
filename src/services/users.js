import  './inicializeApp'
import firebase from "react-native-firebase";

export default {
    authEmailSenha: (email, senha) => {
        try{
            return firebase.auth().signInWithEmailAndPassword(email, senha)
        }catch(error){
            return false
        }
        
    }
}