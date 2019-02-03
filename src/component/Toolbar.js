import React from 'react';

import {
    View,
    Text,
    Icon
} from 'native-base';

import {
    Platform
} from 'react-native';

import {TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Toolbar extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                
            </View>
        )
    }
}

const styles = EStyleSheet.create({
    container: {
        width: '100%',
        height: Platform.OS === 'ios' ? 70 : 60,
        paddingTop: Platform.OS === 'ios' ? 10 : 0,
        backgroundColor: '$primaryColor',
        shadowColor: 'black',
        shadowOpacity: .5,
        shadowOffset: {width: .2, height: .7},
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 10,
        flexDirection: 'row'
    },
    title: {
        fontFamily: '$default',
        color: 'white'
    },
    backContainer: {
        position: 'absolute',
        left: 0,
        top: Platform.OS === 'ios' ? 25 : 15
    },
    backIcon: {
        color: 'white',
        marginLeft: 10,
        fontSize: 25,
    }
});