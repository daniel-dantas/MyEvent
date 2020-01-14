import React, { useState, useEffect } from 'react'
import {Text, StyleSheet, View} from 'react-native'
import {Card, Button, Icon } from 'react-native-elements'
import event from '../services/event'

export default function card(props) {

    const [image, setImage] = useState(require('../assets/Outros.jpeg'))

    useEffect(() => {
        loadImage()
    }, [])

    const excluirEvento = () => {
        event.deleteEvents(props.itemKey).then(confirm => {
            alert('Evento excluido com sucesso!')
        })
    }

    const loadImage = () => {
        const tipo = props.typeEvent.toLowerCase()

        if(tipo === 'musica'){
            setImage(require('../assets/Musica.jpg'))
        }else if (tipo === 'cinema'){
            setImage(require('../assets/Cinema.jpg'))
        }else if (tipo === 'cerimonia'){
            setImage(require('../assets/Cerimonia.jpg'))
        }else if (tipo === 'balada'){
            setImage(require('../assets/Balada.jpg'))
        }else{
            setImage(require('../assets/Outros.jpeg'))
        }
    }

    return (
        <Card containerStyle={styles.card}
            image={image}
            >
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.text}>
                {props.description}
            </Text>
            <Text style={styles.text}>
                Contato: {props.contact}
            </Text>
            <View style={styles.espaco}></View>
            {(props.isAdmin) ? (
                <Button
                icon={<Icon name='delete' color='#424242' type='material'/>}
                buttonStyle={styles.buttonEvent}
                title="Excluir"
                titleStyle={styles.buttonText}
                onPress={() => excluirEvento()}
                />
            ) : (<View></View>)}
            
        </Card>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 23,
        color: '#fff'
    },
    espaco: {
        paddingTop: 10
    },
    card: {
        backgroundColor: '#424242',
        borderColor: '#6d6d6d',
    },
    text: {
        color: '#fff',
        marginBottom: 10
    },
    buttonEvent: {
        borderRadius: 0,
        marginLeft: 0, 
        marginRight: 0,
        marginBottom: 0,
        backgroundColor: '#fff'
    },
    buttonText: {
        color: '#424242'
    }
})