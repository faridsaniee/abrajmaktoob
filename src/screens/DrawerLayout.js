import React from 'react';

import 
{
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  AppRegistry, 
  Image ,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

import loginStyles from './../styles/StyleLoginBox';

import {Actions} from 'react-native-router-flux';

import {Share} from 'react-native';

export default class DrawerLayout extends React.Component {

    constructor() {
        super();
        this.state = {
            isLoggedIn: true,
            name: 'امین اهرابیان'
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <LoginBox isLoggedIn={this.state.isLoggedIn} name={this.state.name}/>

                <TouchableOpacity activeOpacity={.8} onPress={()=>Actions.about()}>
                    <Text style={styles.optionsText}>درباره ما</Text>
                </TouchableOpacity>

                <View
                    style={styles.horizontalLine}/>

                <TouchableOpacity activeOpacity={.8} onPress={()=>Actions.contact()}>
                    <Text style={styles.optionsText}>تماس با ما</Text>
                </TouchableOpacity>

                <View
                    style={styles.horizontalLine}/>

                <TouchableOpacity activeOpacity={.8} onPress={()=>this.share()}>
                    <Text style={styles.optionsText}>توصیه به دوستان</Text>
                </TouchableOpacity>

            </View>
        )
    }

    share = () => {
        Share.share({
            message: 'ایران پلنر | یه اپلیکیشن باحال برای سفربازها',
            url: 'http://iranplanner.com/app',
            title: '‏«ایران پلنر» را دانلود کنید:'
        }, {
            excludedActivityTypes: [
                'com.apple.UIKit.activity.PostToTwitter'
            ]
        })
    }

}

class LoginBox extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        //temporary header file
        return <View style={{height: 130, backgroundColor: 'black', alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: 'white'}}>Insert Logo Here</Text>
        </View>;

        if (this.props.isLoggedIn) {
            return <View style={loginStyles.container}>
                <Icon name="ios-contact-outline" style={loginStyles.profileIcon}/>
                <Text style={loginStyles.profileText}>{this.props.name}</Text>
                <TouchableOpacity style={loginStyles.logout} activeOpacity={.8}>
                    <Text style={loginStyles.logoutText}>خروج</Text>
                </TouchableOpacity>
            </View>
        } else return <View style={loginStyles.container}>

            <Text style={{marginVertical: 20}}>Here comes iranplanner logo type</Text>

            <TouchableOpacity activeOpacity={.8}>
                <Text style={loginStyles.registerText}>ساخت / ورود به حساب کاربری</Text>
            </TouchableOpacity>
        </View>
    }
}

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    text: {
        color: 'white',
        marginTop: 10
    },
    optionsText: {
        fontFamily: '$default',
        color: 'grey',
        fontSize: 18,
        marginVertical: 10,
        alignSelf: 'center'
    },
    horizontalLine: {
        borderBottomColor: '$primaryColor',
        borderBottomWidth: 0.5,
        marginHorizontal: 10
    }
});