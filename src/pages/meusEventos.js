import React, {useState, useEffect} from 'react'
import {
    Text, 
    StyleSheet, 
    SafeAreaView, 
    ScrollView,
    View
} from 'react-native'

import {
    Button,
    Icon
} from 'react-native-elements'

import Card from '../components/card'

import event from '../services/event'

export default (props) => {

    const [eventos, setEventos] = useState([])

    const [userId, setUserId] = useState(JSON.stringify(props.navigation.getParam('userId', '')))
    const [tipoLogin] = useState(JSON.stringify(props.navigation.getParam('tipoLogin', '')))
    
    useEffect(() => {
        carregarEventos()
    }, [])
    
   

    const carregarEventos = () => {
        event.loadEvents().on('value', (snap) => {
            let eventos = []

            snap.forEach(item => {
                eventos.push({
                    title: item.val().nome,
                    description: item.val().descricao,
                    userId: item.val().userId
                })
            })

            setEventos(eventos.filter(evento => {
                return userId === `"${evento.userId}"`
            }))
        })
    }

    return (
        <SafeAreaView style={styles.view}>
            <View style={styles.title}>
                <View style={styles.textContainer}>
                <Text style={styles.titleText}>Meus Eventos</Text>
                </View>
                <Button 
                    icon={
                        <Icon name='add' color='#ffffff' type='material'/>
                    }
                    onPress={() => {
                        props.navigation.navigate('novoEvento', {
                            userId: userId,
                            tipoLogin: tipoLogin
                        })
                    }}
                    containerStyle={styles.buttonAdicionar}
                />
            </View>
            <ScrollView style={styles.eventArea}>
                {eventos.map(evento => (
                    <Card 
                        title={evento.title}
                        description={evento.description}
                        contact={evento.userId}
                        nameButton="Ver Evento"
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    eventArea: {
        marginTop: 20
    },
    title: {
        alignItems: "stretch"
    },
    titleText: {
        margin: 30,
        marginBottom: 10,
        fontSize: 20,
    },
    textContainer: {
        alignItems: "flex-start"
    },
    buttonAdicionar: {
        alignItems: "flex-end",
        marginRight: 20,
        marginTop: -40,
    }
})