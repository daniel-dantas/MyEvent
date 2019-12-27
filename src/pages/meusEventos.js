import React, {useState} from 'react'
import {Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native'
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
            <ScrollView>
                <Text style={styles.title}>Meus Eventos</Text>
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
    title: {
        margin: 30,
        marginBottom: 10,
        fontSize: 20
    }
})