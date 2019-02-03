import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import {Actions} from 'react-native-router-flux';

export class Contact extends Component {
  render() {
    return (
      <View>
        <Text>This is the Contact screen</Text>
        <Button onPress={() => Actions.home({})} title="Settings"/>
      </View>
    )
  }
};

export default Contact;
