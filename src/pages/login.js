import React, {useState} from "react";
import Container from '../components/container'
// React Native elements
import {
    Input
}from 'react-native-elements'

import {Text, StyleSheet, TouchableOpacity} from 'react-native'

import User from '../services/users'

export default (props) => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    
    const login = async () => {
        if(email.length === 0 || senha === 0){
            alert('Digite o email e a senha!')
        }else{
            const user = await User.authEmailSenha(email, senha)
            if (user){
                props.navigation.navigate('Logado', {
                    userId: user.user.email,
                    tipoLogin: 'email'
                })
            }else{
                alert('Email ou senha incorretos!')
            }
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
                <Text style={styles.textLink}>Cadastrar-se</Text>
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