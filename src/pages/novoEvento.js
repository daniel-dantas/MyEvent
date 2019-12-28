import React, {useState} from 'react'
import Container from '../components/container'

import {
    Text,
    StyleSheet,
} from 'react-native'

import {
    Input,
    Button,
} from 'react-native-elements'


export default () => {

    const [nomeEvento, setNomeEvento] = useState('')
    const [descricaoEvento, setDescricaoEvento] = useState('')
    const [tipoEvento, setTipoEvento] = useState('')

    return (
        <Container>
            <Text style={styles.logo}>Novo Evento</Text>

            <Input
                placeholder="Digite o nome do evento"
                value={nomeEvento}
                onChangeText={nomeEvento => setNomeEvento(nomeEvento)}
                inputContainerStyle={styles.input}
            />

            <Input
                style={styles.input}
                placeholder="Digite a descricao"
                value={descricaoEvento}
                onChangeText={descricaoEvento => setDescricaoEvento(descricaoEvento)}
                inputStyle={styles.input}
            />
            
            <Input
                style={styles.input}
                placeholder="Tipo de evento (Musica, Cinema, Balada.etc)"
                value={tipoEvento}
                onChangeText={tipoEvento => tipoEvento(tipoEvento)}
                inputStyle={styles.input}
            />

            <Button 
                title="Cadastrar Evento"
                containerStyle={styles.button}
            />
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
        alignSelf: "stretch",
        marginTop: 20
    }
})