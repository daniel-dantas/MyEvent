import React from 'react'
import Container from '../components/container'
import { Text, StyleSheet, TouchableOpacity, View} from 'react-native'
import {Input} from 'react-native-elements'


export default () => {
    return (
        <Container>
            <Text style={styles.logo}>Login com telefone</Text>

            <Input 
                placeholder="Digite seu telefone"
                inputStyle={styles.input}
            />
            <View style={styles.espaco}></View>
            <TouchableOpacity style={styles.button} onPress={() => alert('Logado')}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
            
        </Container>
    )
}

const styles = StyleSheet.create({
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