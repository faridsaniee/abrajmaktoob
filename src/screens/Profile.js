import React from 'react';

import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

import {Actions} from 'react-native-router-flux';

import EStyleSheet from 'react-native-extended-stylesheet';

export default class Profile extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style = {styles.container}>

                <View style = {styles.card}>

                </View>

            </View>
        )
    }
}

const styles = EStyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        paddingTop:20
    },
    card:{
        borderRadius:10,
        overflow:'hidden',
        margin:10,
        width:'100%-20',
        flex:1,
        backgroundColor:'black'
    }
});