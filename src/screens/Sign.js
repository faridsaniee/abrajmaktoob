import * as React from 'react';
import
{
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  AppRegistry,
  Image ,
  Dimensions,
  Animated,
  TouchableOpacity
} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import styles from '../styles/Style.js';

export default class Sign extends React.Component {
  render() {
    return (
    <View style={[styles.container, {}]}>
        {/* <Image source={require('../assets/image/bg_user.png')} style={styles.background_image}/> */}
        <StatusBar hidden={true} />
        <View style={{justifyContent: "center",flex:0,flexDirection:"row",alignItems: "center", height:90}}>
            <Text>This is the Settings screen</Text>
            <Button onPress={() => this.props.navigation.navigate('HomeScreen')} title="Home"/>
        </View>
      </View>
    )
  }
};

// export default Sign;
