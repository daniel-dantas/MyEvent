import React, {useState, useEffect} from 'react'
import Card from '../components/card'

import { 
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    View,
} from 'react-native'

import {
    Button,
    Icon
} from 'react-native-elements'

import event from '../services/event'
import Container from '../components/container'

export default (props) => {
    
    const [eventos, setEventos] = useState([])
    
    const [userId] = useState(JSON.stringify(props.navigation.getParam('userId', '')))

    useEffect(() => {
        carregarEventos()
    }, [])
    
   

    const carregarEventos = () => {
        event.loadEvents().on('value', (snap) => {
            let eventos = []

            snap.forEach(item => {
                eventos.push({
                    key: item.key,
                    title: item.val().nome,
                    description: item.val().descricao,
                    typeEvent: item.val().tipo,
                    userId: item.val().userId
                })
            })
            setEventos(eventos.filter(evento => {
                return userId != `"${evento.userId}"`
            }))
        })
    }


    return (
        <SafeAreaView style={styles.view}>
            <View style={styles.title}>
                <Button 
                    icon={
                        <Icon name="arrow-left" color='#ffffff' type='evilicon'/>
                    }
                    onPress={() => {
                        props.navigation.navigate('Login')
                    }}
                    containerStyle={styles.buttonAdicionar}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.titleText}>Meus Eventos</Text>
                </View>
                
            </View>
                {(eventos.length === 0)  ? (
                    <Container>
                        <Text style={styles.textEventoProximo}>
                            Nenhum evento proximo!
                        </Text>
                    </Container>
                ) : (
                    <ScrollView>
                        {eventos.map(evento => (
                            <Card 
                                key={evento.key}
                                title={evento.title}
                                description={evento.description}
                                contact={evento.userId}
                                nameButton="Ver Evento"
                                typeEvent={evento.typeEvent}
                                isAdmin={false}
                            />
                        ))}
                    </ScrollView>
                )}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    titleText: {
        margin: 30,
        marginBottom: 10,
        fontSize: 20
    },
    textEventoProximo: {
        fontSize: 20
    },
    title: {
        alignItems: "stretch"
    },
    titleText: {
        marginTop: -40,
        marginRight: 20,
        fontSize: 20,
    },
    textContainer: {
        alignItems: "flex-start",
        marginLeft: 70
    },
    buttonAdicionar: {
        alignItems: "flex-start",
        marginTop: 30,
        marginLeft: 20,
        marginBottom: 10,
    },
    nenhumEvento: {
        fontSize: 20
    }
})