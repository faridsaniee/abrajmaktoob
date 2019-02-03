import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

export default class Card extends React.Component {
    render() {
        return <TouchableOpacity style={styles.card} activeOpacity={.8}>

            <View style={styles.bannerContainer}>
                <Image source={{uri: this.props.img_url}} style={styles.banner}/>
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    {this.props.title}
                </Text>
            </View>

        </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    card: {
        width: 165,
        height: 180,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: .5,
        shadowOffset: {width: 0, height: 1},
        margin: 5
    },
    bannerContainer: {
        overflow: 'hidden',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    banner: {
        width: 165,
        height: 140,
        resizeMode: 'cover',
    },
    textContainer: {
        width: 165,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        width: 165,
        textAlign: 'center',
        color: '#000',
        fontFamily: 'IRANSansMobile',
        fontWeight: 'bold'
    }
});