/**
 * @format
 */

import { AppRegistry } from 'react-native'
import { name as appName } from './app.json'

import App from './src/App'
import './src/utils/gesture-handler'

AppRegistry.registerComponent(appName, () => App)
