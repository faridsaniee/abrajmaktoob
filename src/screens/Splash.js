import React from 'react';
import {View,Text,Image,I18nManager,AsyncStorage,Platform,Dimensions,NetInfo,ActivityIndicator, TouchableHighlight,BackHandler,AppState} from 'react-native';

//import {messaging, Firebase} from 'react-native-firebase';
import RNFirebase from 'react-native-firebase';
import DeviceInfo from 'react-native-device-info';
import {Actions} from 'react-native-router-flux';
import styles from '../styles/Style.js';

const firebaseApp = RNFirebase.initializeApp({ debug: false });
I18nManager.forceRTL(true);
RNFirebase.analytics().logEvent('splash');

export default class Splash extends React.Component {
  constructor(){super();}
  handleBackPress = () => {
    if(Actions.currentScene == "home")
    {
      //Actions.rootInside();
      console.log(15252)
    }

  };
  componentDidMount() 
  {

  }
  componentWillUnmount() 
  {
    //BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }
  componentWillMount() {}
  componentDidMount() {
    // firebase.app().options.appId
    const appID = firebaseApp.options.appId;
    const messagingSenderId = firebaseApp.options.messagingSenderId;
    const getDeviceId = DeviceInfo.getDeviceId();
    const getManufacturer = DeviceInfo.getManufacturer();
    const getInstanceID = DeviceInfo.getInstanceID();
    const getModel = DeviceInfo.getModel();
    const getUniqueID = DeviceInfo.getUniqueID();
    const getCarrier = DeviceInfo.getCarrier();
    const getSystemName = DeviceInfo.getSystemName();
    const getSystemVersion = DeviceInfo.getSystemVersion();
    const getBrand = DeviceInfo.getBrand();
    const getAPILevel = DeviceInfo.getAPILevel();
    const getTotalMemory = DeviceInfo.getTotalMemory();
    const getApplicationName = DeviceInfo.getApplicationName();
    const getDeviceLocale = DeviceInfo.getDeviceLocale();
    const getTimezone = DeviceInfo.getTimezone();
    const getUserAgent = DeviceInfo.getUserAgent();
    const getReadableVersion = DeviceInfo.getReadableVersion();
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    const scale = Dimensions.get('window').scale;
    NetInfo.isConnected.addEventListener(
      'connectionChange',
      isConnected => {
          if(isConnected)
          {
            firebaseApp.messaging().getToken()
            .then(fcmToken => {
              const dataSend = {"cid":getUniqueID,"gid":fcmToken,"width":width,"height":height,"scale":scale,"locale":getDeviceLocale,"user_agent":getUserAgent,"lat":0,"lng":0,"device_id":getDeviceId,"manufacture":getManufacturer,"model":getModel,"instance_id":getInstanceID,"unique_id":getUniqueID,"carrier":getCarrier,"system_name":getSystemName,"system_ver":getSystemVersion,"api_level":getAPILevel,"memory_total":getTotalMemory,"application_name":getApplicationName,"application_ver":getReadableVersion,"timezone":getTimezone};
              this.makeRequest(JSON.stringify(dataSend),getUniqueID);
            });
            Actions.rootInside();
          }
          else
          {
            Actions.rootInside();
          }
        }
    )
    this.timeoutHandle = setTimeout(()=>{
      // Add your logic for the transition
      this.props.navigation.navigate('rootInside');
    }, 2000);
    
    //Actions.rootInside();
}
  render()
  {
    return(
      <View style={styles.container}>
        <Image
        source={require('../assets/image/bg.png')}
        style={styles.background_image}/>
        <TouchableHighlight onPress={() => Actions.rootInside()}>
          <Text style={styles.splash_caption}>أبراج مكتوب</Text>
        </TouchableHighlight>
        <ActivityIndicator style={{margin:10}} size="large" color="white"/>
      </View>
    )
  }

  makeRequest(dataSend,getUniqueID)
  {  
      AsyncStorage.getItem("register").then((value)=>{
      let data = JSON.parse(value)
      if (data === null || data === '')
      {
        fetch('http://api.abrajmaktoob.com/api-log?action=client&cid='+getUniqueID, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Cache-Control' : 'none'
          },
          body: dataSend
        }).then((response) => response.json())
          .then((responseJson) => {
            AsyncStorage.setItem('register',"1", () => {});
            //common.setData(responseJson);
            Actions.rootInside()
        }).catch((error) => {});    
        Actions.rootInside();
      } 
      else{Actions.rootInside();}
    })
  }
}