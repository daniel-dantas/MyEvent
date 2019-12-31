import React, {useState} from 'react'
import { Text, StyleSheet, TouchableOpacity, View} from 'react-native'
import {Input} from 'react-native-elements'
import User from '../services/users'
import Container from '../components/container'

export default (props) => {

    // Se o numero estiver valido carregara a parte de verificação
    const [foneConfirm, setFoneConfirm] = useState(false)

    // O telefone que vai ser verificado
    const [telefone, setTelefone] = useState('')

    // O codigo Digitado
    const [verificationCode, setVerificationCode] = useState('')
    
    // O objeto que verufificação do numero retorna
    const [confirmCode, setConfirmCode] = useState({})
    

    const authenticNumber = async () => {
        const confirmCode = await User.authUserTelefone(telefone)
        
        if(confirmCode){
            setFoneConfirm(true)
            setConfirmCode(confirmCode)
        }else{
            alert(confirmCode)
        }
    }

    const verifyCode = async () => {
        await confirmCode.confirm(verificationCode).then(user => {
            console.log(user)
        }).catch(erro => {
            console.log(erro)
        })
    } 

    return (

        <View style={styles.master}>
            {(!foneConfirm) ? (
                <Container>
                    <Text style={styles.logo}>Login com telefone</Text>

                    <Input 
                        placeholder="Digite seu telefone"
                        inputStyle={styles.input}
                        value={telefone}
                        onChangeText={telefone => {setTelefone(telefone)}}
                    />

                    <View style={styles.espaco}></View>
                    <TouchableOpacity style={styles.button} onPress={() => authenticNumber()}>
                        <Text style={styles.buttonText}>Logar</Text>
                    </TouchableOpacity>
                </Container>
                
            ):(
                <Container>
                    <Text style={styles.logo}>Login com telefone</Text>

                    <Input 
                        placeholder="Digite o codigo recebido"
                        inputStyle={styles.input}
                        value={verificationCode}
                        onChangeText={verificationCode => {setVerificationCode(verificationCode)}}
                    />

                    <View style={styles.espaco}></View>
                    <TouchableOpacity style={styles.button} onPress={() => verifyCode()}>
                        <Text style={styles.buttonText}>Confirmar</Text>
                    </TouchableOpacity>
                </Container>
            )}
            
        </View>
        


        
    )
}

const styles = StyleSheet.create({
    master: {
        flex: 1
    },
    input: {
        paddingTop: 20,
    },
    logo:{
        marginBottom: 30,
        fontSize: 25
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