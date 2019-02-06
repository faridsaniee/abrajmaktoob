import * as React from 'react';
import {NetInfo, Text, View, StatusBar, Image, I18nManager,ScrollView, AsyncStorage} from 'react-native';
import DeviceInfo from 'react-native-device-info';
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
var connectionStatus = false;
NetInfo.isConnected.fetch().then(isConnected => {
  connectionStatus = isConnected
});
NetInfo.isConnected.addEventListener(
  'connectionChange',
  isConnected => {
    connectionStatus = isConnected
});
class Wedding extends React.Component {
    constructor() {
        super()
        this.state = {
            body: "انتظر..."
        }
    }
    getUrl(){
        icon_male = this.props.male_icon;
        icon_female = this.props.female_icon;
        // var id = this.props.id;
        const getUniqueID = DeviceInfo.getUniqueID();
        return 'http://api.abrajmaktoob.com/api-horoscope?action=wedding&male_id='+ icon_male + '&female_id=' + icon_female +'&cid='+getUniqueID;
    }
    componentWillMount() 
    {
      if(connectionStatus)
      {
        fetch(this.getUrl() , {
            headers: {
                'Cache-Control': 'no-cache'
            }
        })
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                data: responseJson,
                body: responseJson.result_wedding.data,
            })
        })
        .catch((error) => {
            console.error(error);
        });
      }
      else
      {
        body: "انتظر...";
      }
    }
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
            <View style={[styles.wedding_container, {}]}>
                <View style={[styles.wedding_symbol, {}]}>
                    <Image
                    style={{width: 40, height: 40}}
                    source={require('../assets/icon/icon-male.png')}
                    />
                    <Text style={[styles.wedding_symbol_caption, {}]}>{"الذكر"}</Text>
                </View>
                <View style={[styles.wedding_sign, {}]}>
                    <Image
                    style={{width: 40, height: 40}}
                    source={{uri: 'asset:/icon/'+icon_male+'.png'}}
                    />
                    <Text style={[styles.wedding_sign_caption, {}]}>{icon_male_text}</Text>
                </View>
                <View style={{width:"20%", alignContent:"center", alignItems:"center"}}>
                        <Image
                        style={{width: 20, height: 20}}
                        source={require('../assets/icon/icon-mafema.png')}
                        />
                </View>
                <View style={[styles.wedding_sign, {}]}>
                    <Image
                    style={{width: 40, height: 40}}
                    source={{uri: 'asset:/icon/'+icon_female+'.png'}}
                        />
                    <Text style={[styles.wedding_sign_caption, {}]}>{icon_female_text}</Text>
                </View>
                <View style={[styles.wedding_symbol, {}]}>
                    <Image
                    style={{width: 40, height: 40}}
                    source={require('../assets/icon/icon-female.png')}
                    />
                    <Text style={[styles.wedding_symbol_caption, {}]}>{"إناثا"}</Text>
                </View>
            </View>
            <View style={{flex: 1, flexDirection: 'column', padding: 0}}>
                <ScrollView showsHorizontalScrollIndicator={true} showsVerticalScrollIndicator={true} style={[styles.container, {}]} scrollEnabled>
                    <Text style={styles.month_body}>{this.state.body}</Text>
                </ScrollView>
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
