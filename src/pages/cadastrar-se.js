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

export default () => {
    // States dos dados de cadastro
    const [nome, setNome] = useState('')
    const [cidade, setCidade] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [telefone, setTelefone] = useState('')



    return (
        <Container>
            <Text style={styles.logo}>
                Cadastrar-se
            </Text>
            
            <Input 
                placeholder="Digite seu nome"
                value={nome}
                onChangeText={nome => setNome(nome)}
                inputStyle={styles.input}
            />

            <Input 
                placeholder="Digite sua Cidade"
                value={cidade}
                onChangeText={cidade => setCidade(cidade)}
                inputStyle={styles.input}
            />

            <Input 
                placeholder="Digite seu email"
                value={email}
                onChangeText={email => setEmail(email)}
                inputStyle={styles.input}
            />

            <Input 
                placeholder="Digite sua telefone"
                value={telefone}
                onChangeText={telefone => setTelefone(telefone)}
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
            <TouchableOpacity style={styles.button} onPress={() => alert('cadastrado')}>
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