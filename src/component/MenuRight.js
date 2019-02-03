import * as React from 'react';
import
{
  StyleSheet,
  Text,
  View,
  Image ,
  TouchableOpacity,
  I18nManager,
  Divider
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import styles from '../styles/Style.js';
import Icon from 'react-native-vector-icons/FontAwesome';
I18nManager.forceRTL(true);

import { Card, ListItem, Button } from 'react-native-elements';

export default class Settings extends React.Component {
  render() {
    return (
      <View>
        <View style={{height:70, borderBottomColor: '#bbb', borderBottomWidth: 1}}>
          <Text> </Text>
        </View>
        <View style={{borderBottomColor: '#bbb', borderBottomWidth: 1}}>
        <TouchableOpacity  onPress={() => Actions.date({})}>
            <View style={{flexDirection:"row"}}>
              <Icon style={styles.menu_icon} name="calendar"/>
              <Text style={styles.menu_caption}>اعرف برجك</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => Actions.settings({})}>
            <View style={{flexDirection:"row"}}>
              <Icon style={styles.menu_icon} name="gear"/>
              <Text style={styles.menu_caption}>الإعدادات</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => Actions.reminder({})}>
            <View style={{flexDirection:"row"}}>
              <Icon style={styles.menu_icon} name="clock-o"/>
              <Text style={styles.menu_caption}>تذكير</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => Actions.settings({})}>
            <View style={{flexDirection:"row"}}>
              <Icon style={styles.menu_icon} name="envelope"/>
              <Text style={styles.menu_caption}>اتصل بنا</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => Actions.settings({})}>
            <View style={{flexDirection:"row"}}>
              <Icon style={styles.menu_icon} name="info"/>
              <Text style={styles.menu_caption}>معلومات عنا</Text>
            </View>
          </TouchableOpacity>
          {/* <TouchableOpacity  onPress={() => Actions.sign({})}>
            <View style={{flexDirection:"row"}}>
              <Icon style={styles.menu_icon}  name="sign-in"/>
              <Text style={styles.menu_caption}>تسجيل الدخول</Text>
            </View>
          </TouchableOpacity> */}
        </View>
      </View>
    )
  }
};

// export default Settings;
