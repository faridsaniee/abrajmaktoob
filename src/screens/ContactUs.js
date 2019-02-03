import React from 'react';

import {View, Text, Image, TouchableOpacity, ScrollView, TextInput} from 'react-native';

import {Icon} from 'native-base';

import {Actions} from 'react-native-router-flux';

import EStyleSheet from 'react-native-extended-stylesheet'

import Toolbar from './../component/Toolbar';

export default class ContactUs extends React.Component {

    render() {
        return (
            <View style={{flex: 1}}>

                <Toolbar title="تماس باما"/>

                <ScrollView style={{flex: 1, paddingHorizontal: 10}}>

                    <Text style={styles.address}>آدرس : ایران، تهران، زعفرانیه، خیابان طاهری، خیابان شاهین، خیابان
                        کیوان، بن بست بهار، پلاک 5</Text>

                    <Text style={styles.email}> <Text style={[styles.email, {color: '#288795'}]}>ایمیل : </Text>
                        info@iranplanner.com</Text>


                    <Text style={styles.email}> <Text style={[styles.email, {color: '#288795'}]}>تلفن : </Text>
                        ۰۲۱۹۶۶۶۹۰۶۲</Text>

                    <TextInput
                        style={styles.nameInput}
                        placeholder="نام و نام خانوادگی"
                        onChangeText={(text) => this.setState({text})}
                    />

                    <TextInput
                        style={[styles.nameInput, {marginVertical: 10, height: 150}]}
                        placeholder="متن پیام"
                        onChangeText={(text) => this.setState({text})}
                    />

                    <TouchableOpacity style={styles.sendBtnContainer} activeOpacity={.8}>
                        <Text style={styles.sendBtn}>ارسال پبام</Text>

                    </TouchableOpacity>
                </ScrollView>

            </View>
        )
    }
}

const styles = EStyleSheet.create({
    address: {
        fontFamily: '$default',
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'right',
        paddingVertical: 10,
        fontSize: 15
    },
    email: {
        fontFamily: '$default',
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'right',
        paddingVertical: 10,
        fontSize: 15
    },
    nameInput: {
        fontFamily: '$default',
        color: 'black',
        textAlign: 'right',
        fontSize: 15,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        height: 50,
        paddingHorizontal: 10
    },
    sendBtnContainer: {
        width: 100,
        borderRadius: 5,
        overflow: 'hidden',
        shadowColor: 'black',
        shadowOpacity: .5,
        shadowOffset: {width: .1, height: .4}
    },
    sendBtn: {
        color: 'white',
        fontFamily: '$default',
        backgroundColor: '$primaryColor',
        padding: 10,
        textAlign: 'center',
    }
})