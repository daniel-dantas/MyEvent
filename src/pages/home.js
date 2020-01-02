import React, {useState, useEffect} from 'react'
import Card from '../components/card'



import { 
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    View,
} from 'react-native'

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
            <Text style={styles.titleText}>Eventos Proximos</Text>
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
    }
})