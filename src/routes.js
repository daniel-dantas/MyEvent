import {createStackNavigator, createBottomTabNavigator} from 'react-navigation'

// Pages do APP
import Login from './pages/login'
import Cadastrar from './pages/cadastrar-se'
import LoginTelefone from './pages/loginTelefone'
import Home from './pages/home'
import MeusEventos from './pages/meusEventos'
import Perfil from './pages/perfil'


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
        screen: createBottomTabNavigator({
            Home,
            MeusEventos,
            Perfil
        }),
        navigationOptions:{
            header: null
        }
    }
})