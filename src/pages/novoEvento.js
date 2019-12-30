import React, {useState, useEffect} from 'react'
import Container from '../components/container'

import Evento from '../services/event'

import {
    Text,
    StyleSheet,
} from 'react-native'

import {
    Input,
    Button,
} from 'react-native-elements'

// Novo Evento
export default (props) => {

    const [nomeEvento, setNomeEvento] = useState('')
    const [descricaoEvento, setDescricaoEvento] = useState('')
    const [tipoEvento, setTipoEvento] = useState('')

    const [userEmail, setUserEmail] = useState(JSON.stringify(props.navigation.getParam('userEmail', '')))

    useEffect(() => {
        corrigirEmail()
    },[])

    // Corrigindo má formação que o email ficou na passagem de telas
    const corrigirEmail = () => {
        let email = userEmail.split('\\')
        email = email.slice(1,2)[0].split('"')[1]
        setUserEmail(email)
    }

    const inserirEvento = async () => {
        

        if(nomeEvento.length === 0 || descricaoEvento.length === 0 || tipoEvento.length === 0){
            alert('Preencha todos os campos')    
        }else{
            
            const evento = await Evento.createEvent({
                nome: nomeEvento,
                descricao: descricaoEvento,
                tipo: tipoEvento,
                userEmail: userEmail
            })

            if(evento){
                alert('Evento cadastrado com sucesso!')
            }else{
                alert('Erro ao cadastrar evento!')
            }
        }

        


    }

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
                onChangeText={tipoEvento => setTipoEvento(tipoEvento)}
                inputStyle={styles.input}
            />

            <Button 
                title="Cadastrar Evento"
                containerStyle={styles.button}
                onPress={() => inserirEvento()}
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