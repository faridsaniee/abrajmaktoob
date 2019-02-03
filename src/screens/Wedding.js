import * as React from 'react';
import {TouchableHighlight, Text, View, StatusBar, Image, I18nManager,TouchableOpacity, AsyncStorage} from 'react-native';
import {Actions} from 'react-native-router-flux';
import styles from '../styles/Style.js';
import RNFirebase from 'react-native-firebase';

import Month_horscope from '../data/month_horscope.json';
import Month_china from '../data/month_china.json';
I18nManager.forceRTL(true);

const firebaseApp = RNFirebase.initializeApp({ debug: false });
firebaseApp.admob().initialize('ca-app-pub-5941652146529991~9893279074');
firebaseApp.analytics().logEvent('Wedding');
const advert = firebaseApp.admob().interstitial('ca-app-pub-5941652146529991/3563380265');
const Banner = RNFirebase.admob.Banner;
const AdRequest = RNFirebase.admob.AdRequest;
const request = new AdRequest();
request.addKeyword('foo').addKeyword('bar');
let icon_male = "";
let icon_female = "";
let icon_male_text = "";
let icon_female_text = "";
class Wedding extends React.Component {
  render() 
  {
    icon_male = this.props.male_icon;
    icon_female = this.props.female_icon;
    icon_male_text = this.props.male_icon_text;
    icon_female_text = this.props.female_icon_text;
    advert.loadAd(request.build());
    advert.on('onAdLoaded', () => {advert.show();});
    return (
    <View style={styles.container}>
        <Image
        source={require('../assets/image/bg_user.png')}
        style={styles.background_image} />
        <StatusBar hidden={true} />
        <View style={[styles.container, {}]}>
            <View style={{justifyContent: "center",flex:0,flexDirection:"row",alignItems: "center", height:90}}>
                <View style={{width:"20%",alignContent:"center", alignItems:"center"}}>
                    <Image
                    style={{width: 40, height: 40}}
                    source={require('../assets/icon/icon-male.png')}
                    />
                    <Text style={{color:"#FFF"}}>{"الذكر"}</Text>
                </View>
                <View style={{width:"20%", alignContent:"center", alignItems:"center"}}>
                    <Image
                    style={{width: 40, height: 40}}
                    source={{uri: 'asset:/icon/'+icon_male+'.png'}}
                    />
                    <Text style={{color:"#FFF"}}>{icon_male_text}</Text>
                </View>
                <View style={{width:"20%", alignContent:"center", alignItems:"center"}}>
                        <Image
                        style={{width: 20, height: 20}}
                        source={require('../assets/icon/icon-mafema.png')}
                        />
                </View>
                <View style={{width:"20%", alignContent:"center", alignItems:"center"}}>
                    <Image
                    style={{width: 40, height: 40}}
                    source={{uri: 'asset:/icon/'+icon_female+'.png'}}
                        />
                    <Text style={{color:"#FFF"}}>{icon_female_text}</Text>
                </View>
                <View style={{width:"20%",alignContent:"center", alignItems:"center"}}>
                    <Image
                    style={{width: 40, height: 40}}
                    source={require('../assets/icon/icon-female.png')}
                    />
                    <Text style={{color:"#FFF"}}>{"إناثا"}</Text>
                </View>
            </View>
            <View style={{flex: 1, flexDirection: 'column', padding: 0}}>
                <View style={{width: "100%"}}></View>
            </View>
        </View>
        <Banner
        unitId="ca-app-pub-5941652146529991/3563380265"
        request={request.build()}
        onAdLoaded={() => {console.log('Advert loaded');}}
        onAdOpened={() => {console.log('Advert Opened');}}
        onAdFailedToLoad={error => console.log(error)}
        testDevices={"EMULATOR"}
        />
    </View>
    )
  }
};

export default Wedding;
