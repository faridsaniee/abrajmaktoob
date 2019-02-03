import React, { Component } from 'react';
import { StyleSheet,View, Text, TouchableOpacity ,  Image} from 'react-native';
import {Actions} from 'react-native-router-flux';
const styles = StyleSheet.create({});

function getMoviesFromApiAsync() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson.movies;
      })
      .catch((error) => {
        console.error(error);
      });
  }
  

export default class Chance extends Component {
    constructor() {
        super()
        this.state = {
           myText: 'My Original Text'
        }
     }
    //  updateText = () => {
    //      console.log("press");
    //     this.setState({myText: 'My Changed Text'})
    // }
    updateText(){
        console.log("press");
   }
    getUrl(){
        //var id = this.props.id;
        return 'http://api.abrajmaktoob.com/api-horoscope?action=china'
    }
    componentWillMount() {
        fetch(this.getUrl() , {
            headers: {
                'Cache-Control': 'no-cache'
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({
                    data: responseJson,
                    myText: 'My Changed Text'
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }
  render() {
    getMoviesFromApiAsync();
    return (
        <View style={[styles.container, {}]}>
        <Image
        source={require('../assets/image/bg.png')}
        style={{flex: 1, position: 'absolute', width: '100%', height: '100%', justifyContent: 'center'}}/>
        <View style={{backgroundColor: '#000', flex: 1}}>
        <TouchableOpacity
                onPress={this.updateText}>
                <Text>
                {this.state.myText}
                </Text>
            </TouchableOpacity>
        </View>
    </View>
    )
  }
};
// export default Chance;