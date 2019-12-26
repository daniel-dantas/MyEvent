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
            icon={<Icon name='code' color='#ffffff' />}
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VIEW NOW'/>
        </Card>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 23
    }
})