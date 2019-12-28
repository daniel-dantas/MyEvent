import React, {useState} from 'react'
import Card from '../components/card'

import { 
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
} from 'react-native'


export default (props) => {
    
    const [eventos] = useState([
        {title: 'Daniel Lindo', description: 'Lindo mesmo esse menino'},
        {title: 'Daniel Lindo', description: 'Lindo mesmo esse menino'},
        {title: 'Daniel Lindo', description: 'Lindo mesmo esse menino'},
        {title: 'Daniel Lindo', description: 'Lindo mesmo esse menino'},
        {title: 'Daniel Lindo', description: 'Lindo mesmo esse menino'},
    ])
    
    const [userEmail] = useState(JSON.stringify(props.navigation.getParam('userEmail', '')))

    return (
        <SafeAreaView style={styles.view}>
            <Text style={styles.titleText}>Eventos Proximos</Text>
            <ScrollView>
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
    titleText: {
        margin: 30,
        marginBottom: 10,
        fontSize: 20
    }
})