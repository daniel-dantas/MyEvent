import React from 'react'

import {
    createStackNavigator,
}from 'react-navigation'

import {
    createBottomTabNavigator,
}from 'react-navigation-tabs'

import {
    Icon
}from 'react-native-elements'

// Pages do APP
import Login from './pages/login'
import Cadastrar from './pages/cadastrar-se'
import LoginTelefone from './pages/loginTelefone'
import Home from './pages/home'
import MeusEventos from './pages/meusEventos'
import NovoEvento from './pages/novoEvento'

const telasLogado = {
    Home: {
        screen: Home,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: 'Home',
            tabBarIcon: () => (
                <Icon name="home" type="material" color="#fff"/>
            ),
            tabBarOptions: {
                iconShow: true,
                activeTintColor: '#fff',
                inactiveTintColor: '#fff',
                style: { 
                    backgroundColor: '#424242'
                }
            }
        })
    },
    MeusEventos: {
        screen: MeusEventos,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: 'Meus Eventos',
            tabBarIcon: () => (
                <Icon name="explore" type="material" color="#fff"/>
            ),
            tabBarOptions: {
                iconShow: true,
                activeTintColor: '#fff',
                inactiveTintColor: '#fff',
                style: { 
                    backgroundColor: '#424242'
                }
            }
        })
    },
}

export default createStackNavigator({
    Login:{
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    Cadastrar: {
        screen: Cadastrar,
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#424242',
                headerTintColor: '#fff',
            },
        },
    },
    LoginTelefone:{
        screen: LoginTelefone,
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#424242',
                headerTintColor: '#fff',
            },
        },
    },
    Logado:{
        screen: createBottomTabNavigator(telasLogado),
        navigationOptions:{
            header: null
        }
    },
    novoEvento:{
        screen: NovoEvento,
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#424242',
                headerTintColor: '#fff',
            },
        },
    }
})