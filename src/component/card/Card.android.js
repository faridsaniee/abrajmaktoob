import React from 'react';

import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

export default class Card extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <TouchableOpacity style={styles.card} activeOpacity={.8}>
            <Image source={{uri: this.props.img_url}} style={styles.banner}/>

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
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 5,
        margin: 5
    },
    banner: {
        width: 165,
        height: 140,
        resizeMode: 'cover'
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
        fontFamily:'IRANSansMobile_Bold'
    }
});