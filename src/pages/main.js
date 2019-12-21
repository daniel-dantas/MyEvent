import React, {useState} from "react";
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import firebase from "react-native-firebase";
export default () => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [isAuth, setIsAuth] = useState(false)

    const login = async () => {
        try {
            const user = await firebase.auth().signInWithEmailAndPassword(email, senha)
            
            setIsAuth(true)
            alert(user)
        } catch (error) {
            alert(error)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Login</Text>
            
            <TextInput
                style={styles.input}
                placeholder="Digite o email"
                value={email}
                onChangeText={email => setEmail(email)}
            />

            <TextInput
                style={styles.input}
                placeholder="Digite a senha"
                onChangeText={senha => setSenha(senha)}
            />

            <TouchableOpacity style={styles.button} onPress={() => {login()}}>
                <Text style={styles.buttonText}>Logar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    logo:{
        marginBottom: 30,
        fontSize: 25
    },
    input: {
        height: 45,
        backgroundColor: '#FFF',
        alignSelf: "stretch",
        borderColor: '#EEE',
        borderWidth: 1,
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    button: {
        height: 45,
        backgroundColor: '#069',
        alignSelf: "stretch",
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold'
    }
})