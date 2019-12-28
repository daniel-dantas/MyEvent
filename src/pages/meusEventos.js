import React, {useState} from 'react'
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

export default () => {

    const [eventos] = useState([
        {title: 'Daniel Lindo', description: 'Lindo mesmo esse menino'},
        {title: 'Daniel Lindo', description: 'Lindo mesmo esse menino'},
        {title: 'Daniel Lindo', description: 'Lindo mesmo esse menino'},
        {title: 'Daniel Lindo', description: 'Lindo mesmo esse menino'},
        {title: 'Daniel Lindo', description: 'Lindo mesmo esse menino'},
    ])



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
                    onPress={() => {}}
                    containerStyle={styles.buttonAdicionar}
                />
            </View>
            <ScrollView style={styles.eventArea}>
                {eventos.map(evento => (
                    <Card 
                        title={evento.title}
                        description={evento.description}
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