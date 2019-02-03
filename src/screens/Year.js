import React, { Component } from 'react';
import { StyleSheet,View, Text, TouchableOpacity ,  Image,Share, NetInfo} from 'react-native';
import {Actions} from 'react-native-router-flux';
import DeviceInfo from 'react-native-device-info';
import RNFirebase from 'react-native-firebase';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/Style.js';

const firebaseApp = RNFirebase.initializeApp({ debug: false });
firebaseApp.analytics().logEvent('China');
firebaseApp.admob().initialize('ca-app-pub-5941652146529991~9893279074');
const Banner = RNFirebase.admob.Banner;
const AdRequest = RNFirebase.admob.AdRequest;
const request = new AdRequest();
request.addKeyword('foobar');


var connectionStatus = false;
NetInfo.isConnected.fetch().then(isConnected => {
  connectionStatus = isConnected
});
NetInfo.isConnected.addEventListener(
  'connectionChange',
  isConnected => {
    connectionStatus = isConnected
});

class Year extends Component {
  constructor() {
    super()
    this.state = {
       myText: "انتظر من فضلك"
    }
  }
  updateText(){
    
}
getUrl(){
    var id = this.props.id;
    const getUniqueID = DeviceInfo.getUniqueID();
    return 'http://api.abrajmaktoob.com/api-horoscope?action=year&id='+ id +'&cid='+getUniqueID;
}
componentWillMount() {
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
            myText: responseJson.result_china.year.post_content,
        })
    })
    .catch((error) => {
        console.error(error);
    });
  }
  else
  {
    myText: "انتظر من فضلك";
  }
}
  render() {
    title = this.props.text;
    img = this.props.img;
    id  = this.props.id;
    handleClick = () => {
      Share.share({
        message: title + '\r\n \r\n' + this.state.myText + '\r\n \r\n' + "http://abrajmaktoob.com/app",
        url: 'http://abrajmaktoob.com/app',
        title: 'ابراج مکتوب'
      }, {
        // Android only:
        dialogTitle: 'Share BAM goodness',
        // iOS only:
        excludedActivityTypes: [
          'com.apple.UIKit.activity.PostToTwitter'
        ]
      })
    }
    return (
      <View style={styles.container}>
        <Image
        source={require('../assets/image/bg_user.png')}
        style={styles.background_image}/>
        <View style={{justifyContent: "center",flex:0,flexDirection:"row",alignItems: "center", height:90}}>
          <View style={{width:90, paddingLeft: 10, paddingRight: 10}}>
            <Image
            style={{width: 70, height: 70}}
            source={{uri: 'asset:/icon/'+img+'.png'}}
            />
          </View>
          <View style={{width:"50%"}}>
            <Text style={styles.month_title}>{title}</Text>
          </View>
          <View style={{width:"20%"}}>
            <TouchableOpacity onPress={() => handleClick(this)}>
              <Text><Icon name="share-alt" style={{color: 'white', fontSize: 20}} /></Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={[styles.container, {backgroundColor:'rgba(11, 15, 58, 0.7)'}]}
        > 
          <Text  style={styles.month_body}>{this.state.myText}</Text>
        </View>
        <Banner
        unitId="ca-app-pub-5941652146529991/5895637395"
        size={'SMART_BANNER'}
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

export default Year;