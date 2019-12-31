import React, { useState, useEffect } from 'react'
import {Text, StyleSheet} from 'react-native'
import {Card, Button, Icon } from 'react-native-elements'

export default (props) => {

    const [image, setImage] = useState(require('../assets/Outros.jpeg'))

    useEffect(() => {
        loadImage()
    }, [])

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
        </Card>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 23
    }
})