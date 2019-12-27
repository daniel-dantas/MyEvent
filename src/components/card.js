import React from 'react'
import {Text, StyleSheet} from 'react-native'
import {Card, Button, Icon } from 'react-native-elements'

export default (props) => {
    return (
        <Card
            image={require('../assets/images.jpeg')}
            >
            <Text style={styles.title}>{props.title}</Text>
            <Text style={{marginBottom: 10}}>
                {props.description}
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