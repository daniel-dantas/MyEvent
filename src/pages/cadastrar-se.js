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

        if(email.length === 0 || senha.length === 0){
            alert('Digite o email e a senha!')
        }else{
            if(user){
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
                inputStyle={styles.input}
            />

            <Input 
                placeholder="Digite sua senha"
                value={senha}
                onChangeText={senha => setSenha(senha)}
                inputStyle={styles.input}
                secureTextEntry={true}
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
    espaco: {
        paddingTop: 30
    }
})