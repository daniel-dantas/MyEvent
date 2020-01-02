import ConfigFire from '../config/google-services.json'
import firebase from "react-native-firebase";

export default firebase.initializeApp(ConfigFire)