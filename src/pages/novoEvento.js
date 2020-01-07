import React, {useState, useEffect} from 'react'
import Geolocation from '@react-native-community/geolocation'

import Evento from '../services/event'

import {
    Text,
    StyleSheet,
    View,
    ScrollView
} from 'react-native'

import {
    Input,
    Button,
} from 'react-native-elements'

import Map from '../components/map'

// Novo Evento
export default (props) => {

    
    const [nomeEvento, setNomeEvento] = useState('')
    const [descricaoEvento, setDescricaoEvento] = useState('')
    const [tipoEvento, setTipoEvento] = useState('')
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)
    const [location, setLocation] = useState({
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    })

    const [userId, setUserId] = useState(JSON.stringify(props.navigation.getParam('userId', '')))

    useEffect(() => {
        corrigirUserId()
        getLocation()
    },[])

    // Corrigindo má formação que o email ficou na passagem de telas
    const corrigirUserId = () => {
        let email = userId.split('\\')
        email = email.slice(1,2)[0].split('"')[1]
        setUserId(email)
    }

    const inserirEvento = async () => {
        

        if(nomeEvento.length === 0 || descricaoEvento.length === 0 || tipoEvento.length === 0){
            alert('Preencha todos os campos')    
        }else{
            
            const evento = await Evento.createEvent({
                nome: nomeEvento,
                descricao: descricaoEvento,
                tipo: tipoEvento,
                location: {
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                },
                userId: userId
            })

            if(evento){
                alert('Evento cadastrado com sucesso!')
                props.navigation.navigate('Logado')
            }else{
                alert('Erro ao cadastrar evento!')
            }
        }
    }

    const getLocation = async() => {
        await Geolocation.getCurrentPosition((position) => {
            let newOrigin = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            };
            
            console.log(newOrigin)

            setLatitude(newOrigin.latitude)
            setLongitude(newOrigin.longitude)
            setLocation(newOrigin);
        }, (err) => {
            console.log('error');
            console.log(err)

        })
    }

    const insertPoint = (response) => {
        setLatitude(response.coordinate.latitude)
        setLongitude(response.coordinate.longitude)
    }

    return (
        <View style={styles.formContent}>
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

            <Input
                style={styles.input}
                placeholder="Latitude"
                disabled
                value={latitude+''}
                onChangeText={latitude => setLatitude(latitude)}
                inputStyle={styles.input}
            />

            <Input
                disabled
                style={styles.input}
                placeholder="Longitude"
                value={longitude+''}
                onChangeText={longitude => setLongitude(longitude)}
                inputStyle={styles.input}
            />

            <Button 
                title="Cadastrar Evento"
                containerStyle={styles.button}
                onPress={() => inserirEvento()}
            />
            
            <ScrollView style={styles.mapScroll}>
                <Map 
                    type="addEvent"
                    height={200}
                    initialLocation={location}
                    insertPoint={insertPoint}
                />
            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    logo:{
        marginTop: 10,
        marginBottom: 20,
        fontSize: 25,
        textAlign: "center"
    },
    input: {
        paddingTop: 20,
    },
    button: {
        alignSelf: "stretch",
        marginTop: 20
    },
    mapScroll: {
        marginTop: 10,
        backgroundColor: '#fff'
    },
    formContent: {
        backgroundColor: '#fff'
    }
    
})