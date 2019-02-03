import * as React from 'react';
import {Text,View,StatusBar, TouchableOpacity} from 'react-native';

export default class Settings extends React.Component {
  state = 
  {
    textHolder: "1"
  };
  _toggleModal = () =>
  {
  alert(1);
  this.setState({
    textHolder: "2"
  });
  }
  render() {
    return (
      <View>
        <StatusBar hidden={true} />
        <Text>This is the Settings screen</Text>
        <TouchableOpacity onPress={this._toggleModal}>
          <Text>Show Modal</Text>
        </TouchableOpacity>
        <Text>{this.state.textHolder}</Text>
      </View>
    )
  }
};

// export default Settings;
