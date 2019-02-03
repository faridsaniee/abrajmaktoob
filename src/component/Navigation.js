import React, { Component } from 'react';
import {View, Text, Image ,  TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import styles from '../styles/Style.js';
import Icon from 'react-native-vector-icons/FontAwesome';
const icon_navicon = (<Icon name="navicon" style={{color: 'white', fontSize: 20}}/>)
//const icon_ellips = (<Icon name="ellipsis-v" style={{color: 'white', fontSize: 20}} />)
icon_back = '';
export default class Navigation extends React.Component {
    render() {
        if(Actions.currentScene != "home")
        {
            icon_back = 
            (
                <TouchableOpacity activeOpacity={.8} onPress={() => Actions.pop({ text: ""})}>
                    <Text style={{color: 'white',textAlign: 'right', paddingLeft: 10 ,height:60, lineHeight:60}}>
                        <Icon name="arrow-left" style={{color: 'white', fontSize: 20}} />
                    </Text>
                </TouchableOpacity>
            )
        }
        else{icon_back = <Text> </Text>;}

      return (
        <View style={styles.navbar}>
            <Image source={require('../assets/image/bg_user.png')} style={styles.navbar_background_image}/>
            <View style={{width: '30%'}}>
                {/* <TouchableOpacity activeOpacity={.8} onPress={() => Actions.drawerOpen()}>
                    <Text style={{color: 'white',textAlign: 'left',paddingRight: 10 ,height:60, lineHeight:60}}>
                        {icon_navicon}
                    </Text>
                </TouchableOpacity> */}
            </View>
            <View style={{width: '40%'}}>
                <TouchableOpacity activeOpacity={.8} onPress={() => Actions.home({ text: ""})}>
                    <Text style={styles.navigation_caption}>
                     {this.props.title}
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{width: '30%'}}>
                {icon_back}
            </View>
        </View>
      )
    }
  };