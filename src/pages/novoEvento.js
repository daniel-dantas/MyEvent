import React, {useState, useEffect} from 'react'
import Geolocation from '@react-native-community/geolocation'

import Evento from '../services/event'

import {
    Text,
    StyleSheet,
    View,
    ScrollView,
    TouchableOpacity
} from 'react-native'

import {
    Input,
} from 'react-native-elements'

import Map from '../components/map'

// Novo Evento
export default function novoEvento(props) {

    
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
        if(isEmptyState()){
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

    const isEmptyState = () => {
        if (nomeEvento.length === 0 || descricaoEvento.length === 0 || tipoEvento.length === 0){
            return true
        }

        return false
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
                inputStyle={styles.textInput}
                placeholderTextColor="#bdbdbd"
            />

            <Input
                style={styles.input}
                placeholder="Digite a descricao"
                value={descricaoEvento}
                onChangeText={descricaoEvento => setDescricaoEvento(descricaoEvento)}
                inputStyle={styles.textInput}
                inputContainerStyle={styles.input}
                placeholderTextColor="#bdbdbd"
            />
            
            <Input
                style={styles.input}
                placeholder="Tipo de evento (Musica, Cinema, Balada.etc)"
                value={tipoEvento}
                onChangeText={tipoEvento => setTipoEvento(tipoEvento)}
                inputStyle={styles.textInput}
                inputContainerStyle={styles.input}
                placeholderTextColor="#bdbdbd"
            />

            <Input
                style={styles.input}
                placeholder="Latitude"
                disabled
                value={latitude+''}
                onChangeText={latitude => setLatitude(latitude)}
                inputStyle={styles.textInput}
                inputContainerStyle={styles.input}
            />

            <Input
                disabled
                style={styles.input}
                placeholder="Longitude"
                value={longitude+''}
                onChangeText={longitude => setLongitude(longitude)}
                inputStyle={styles.textInput}
                inputContainerStyle={styles.input}
            />

            <View style={styles.viewButton}>
                <TouchableOpacity style={styles.button} onPress={() => {inserirEvento()}}>
                    <Text style={styles.buttonText}>Adicionar Evento</Text>
                </TouchableOpacity>
            </View>
                
            
            
            
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
        textAlign: "center",
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
        paddingHorizontal: 80,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 80,
    },
    buttonText: {
        color: '#424242',
        fontWeight: 'bold'
    },
    viewButton: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10
    },
    textInput: {
        color: '#fff'
    },
    mapScroll: {
        marginTop: 80,
        backgroundColor: '#424242'
    },
    formContent: {
        backgroundColor: '#424242'
    }
    
})