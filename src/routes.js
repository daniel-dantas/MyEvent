import {createStackNavigator} from 'react-navigation'

import Login from './pages/login'
import Cadastrar from './pages/cadastrar-se'
import LoginTelefone from './pages/loginTelefone'
import Home from './pages/home'

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
    Home:{
        screen: Home,
        navigationOptions: {
            header: null
        }
    }
})