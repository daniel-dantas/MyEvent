import React, {useState} from "react";
import Container from '../components/container'
// React Native elements
import Icon from 'react-native-vector-icons/FontAwesome'
import {
    Input
}from 'react-native-elements'

import {Text, TextInput, StyleSheet, TouchableOpacity, View} from 'react-native'
import firebase from "react-native-firebase";

export default (props) => {

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
        <Container>
            <Text style={styles.logo}>Login</Text>
            
            <Input
                placeholder="Digite o email"
                value={email}
                onChangeText={email => setEmail(email)}
                inputContainerStyle={styles.input}
                
            />

            <Input
                style={styles.input}
                placeholder="Digite a senha"
                onChangeText={senha => setSenha(senha)}
                inputStyle={styles.input}
                secureTextEntry={true}
            />

            <TouchableOpacity style={styles.linkOutraForma} onPress={() => {props.navigation.navigate('LoginTelefone')}}>
                <Text style={styles.textLink}>Logar com telefone</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => {login()}}>
                <Text style={styles.buttonText}>Logar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.linkCadastrar} onPress={() => {props.navigation.navigate('Cadastrar')}}>
                <Text style={styles.textLink}>Cadastra-se</Text>
            </TouchableOpacity>
            
        </Container>
    )
}

const styles = StyleSheet.create({
    logo:{
        marginBottom: 30,
        fontSize: 25
    },
    input: {
        paddingTop: 20,
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
    },
    linkOutraForma: {
        height: 30,
        alignSelf: "flex-start",
        paddingHorizontal: 20,
        paddingTop: 30,
        paddingBottom: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    linkCadastrar: {
        height: 30,
        alignSelf: "center",
        paddingHorizontal: 20,
        paddingTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textLink: {
        color: '#069'
    }
})