import { AppRegistry } from 'react-native'
import { name as appName } from './app.json'
import App from './src/App'
import database from '@react-native-firebase/database'

database().setPersistenceEnabled(false)

AppRegistry.registerComponent(appName, () => App)
