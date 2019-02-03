/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import bgActions from './src/component/bgActions'; // <-- Import the file you created in (2)

AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent('ReactNativeFirebaseDemo', () => bootstrap);
// New task registration
AppRegistry.registerHeadlessTask('RNFirebaseBackgroundNotificationAction', () => bgActions); // <-- Add this line
AppRegistry.registerHeadlessTask('RNFirebaseBackgroundMessage', () => bgActions); 

