import React,{useState} from 'react'
import Container from '../components/container'
import {
    Input
} from 'react-native-elements'

import {
    Text,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native'

import User from '../services/users'

export default (props) => {
    // States dos dados de cadastro
   
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const cadastro = async () => {
        const user = await User.createUser(email,senha)

        if( email.length === 0 || senha.length === 0){
            alert('Digite o email e a senha!')
        }else{
            if(!user){
                props.navigation.navigate('Logado', {
                    userEmail: user.user.email,
                    userSenha: user.user.senha
                })
            }else{
                alert('Usuario já cadastrado!')
            }
        }
    }

    return (
        <Container>
            <Text style={styles.logo}>
                Cadastrar-se
            </Text>
            
            <Input 
                placeholder="Digite seu email"
                value={email}
                onChangeText={email => setEmail(email)}
                inputContainerStyle={styles.input}
                inputStyle={styles.textInput}
                placeholderTextColor="#bdbdbd"
            />

            <Input 
                placeholder="Digite sua senha"
                value={senha}
                onChangeText={senha => setSenha(senha)}
                inputContainerStyle={styles.input}
                secureTextEntry={true}
                inputStyle={styles.textInput}
                placeholderTextColor="#bdbdbd"
            />

            <View style={styles.espaco}></View>
            <TouchableOpacity style={styles.button} onPress={() => cadastro()}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
        </Container>
    )

}

const styles = StyleSheet.create({
    logo:{
        marginBottom: 30,
        fontSize: 25,
        color: '#fff'
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
    espaco: {
        paddingTop: 30
    },
    textInput: {
        color: '#fff'
    }
})