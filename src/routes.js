import {
    createStackNavigator,
    createBottomTabNavigator
    }
from 'react-navigation'

// Pages do APP
import Login from './pages/login'
import Cadastrar from './pages/cadastrar-se'
import LoginTelefone from './pages/loginTelefone'
import Home from './pages/home'
import MeusEventos from './pages/meusEventos'
import NovoEvento from './pages/novoEvento'
import ViewEvent from './pages/viewEvent'

const telasLogado = {
    Home,
    MeusEventos
}

export default createStackNavigator({
    // novoEvento:{
    //     screen: NovoEvento
    // },
    Login:{
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    Cadastrar: {
        screen: Cadastrar
    },
    LoginTelefone:{
        screen: LoginTelefone
    },
    Logado:{
        screen: createBottomTabNavigator(telasLogado),
        navigationOptions:{
            header: null
        }
    },
    novoEvento:{
        screen: NovoEvento
    },
    ViewEvent: {
        screen: ViewEvent,
        header: null
    }
})