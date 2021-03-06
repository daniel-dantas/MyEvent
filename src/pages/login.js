import React, {useState} from "react";
import Container from '../components/container'

// React Native elements
import {
    Input
}from 'react-native-elements'

import {Text, StyleSheet, TouchableOpacity, View, Image} from 'react-native'

import User from '../services/users'

export default function login(props) {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    
    const login = async () => {
        if(isEmptyState()){
            alert('Digite o email e a senha!')
        }else{
            const user = await User.authEmailSenha(email, senha)
            if (user){
                setEmail('')
                setSenha('')
                props.navigation.navigate('Logado', {
                    userId: user.user.email,
                    tipoLogin: 'email'
                })
            }else{
                alert('Email ou senha incorretos!')
            }
        }
    }

    const isEmptyState = () => {
        if (email.length === 0 || senha.length === 0){
            return true
        }
        return false
    }

    return (
        <Container>
            <View style={styles.logoContent}>
                <Image source={require('../assets/iconsPack/myevent-logo.png')}/>
            </View>

            <Input
                placeholder="Digite o email"
                value={email}
                onChangeText={email => setEmail(email)}
                inputContainerStyle={styles.input}
                placeholderTextColor="#bdbdbd"
                inputStyle={styles.textInput}
            />

            <Input
                style={styles.input}
                placeholder="Digite a senha"
                onChangeText={senha => setSenha(senha)}
                inputContainerStyle={styles.input}
                secureTextEntry={true}
                placeholderTextColor="#bdbdbd"
                inputStyle={styles.textInput}

            />

            <TouchableOpacity style={styles.linkOutraForma} onPress={() => {props.navigation.navigate('LoginTelefone')}}>
                <Text style={styles.textLink}>Logar com telefone</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => {login()}}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.linkCadastrar} onPress={() => {props.navigation.navigate('Cadastrar')}}>
                <Text style={styles.textLink}>Cadastrar-se</Text>
            </TouchableOpacity>
            
        </Container>
    )
}

const styles = StyleSheet.create({
    logoContent: {
        marginBottom: 40
    },
    input: {
        marginTop: 15,
        height: 45,
        borderStyle: 'solid',
        borderColor: '#fff',
        borderWidth: 1,
        alignSelf: "stretch",
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    button: {
        height: 45,
        backgroundColor: '#FFF',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 10,
        alignSelf: "stretch",
        paddingHorizontal: 18,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#424242',
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
        color: '#fff'
    },
    textInput: {
        color: '#fff'
    }
})