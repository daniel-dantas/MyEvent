import React, { useState, useEffect } from 'react'
import {Text, StyleSheet, View} from 'react-native'
import {Card, Button, Icon } from 'react-native-elements'
import event from '../services/event'

export default (props) => {

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
        <Card
            image={image}
            >
            <Text style={styles.title}>{props.title}</Text>
            <Text style={{marginBottom: 10}}>
                {props.description}
            </Text>
            <Text style={{marginBottom: 10}}>
                Contato: {props.contact}
            </Text>
            <Button
            icon={<Icon name='sc-telegram' color='#ffffff' type='evilicon'/>}
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title={props.nameButton}/>
            <View style={styles.espaco}></View>
            {(props.isAdmin) ? (
                <Button
                icon={<Icon name='delete' color='#ffffff' type='material'/>}
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title="Excluir"
                onPress={() => excluirEvento()}
                />
            ) : (<View></View>)}
            
        </Card>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 23
    },
    espaco: {
        paddingTop: 10
    }
})