import {createStackNavigator, createBottomTabNavigator} from 'react-navigation'

// Pages do APP
import Login from './pages/login'
import Cadastrar from './pages/cadastrar-se'
import LoginTelefone from './pages/loginTelefone'
import Home from './pages/home'
import MeusEventos from './pages/meusEventos'
import NovoEvento from './pages/novoEvento'

const telasLogado = {
    Home,
    MeusEventos
}

export default createStackNavigator({
    
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
    }
})