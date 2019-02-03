import React, { Component } from 'react';
import {View,  StatusBar,  Text, ScrollView , Animated, TouchableOpacity, Image,Share, NetInfo,   I18nManager} from 'react-native';
import {TabViewAnimated, TabView, TabBar,SceneMap } from 'react-native-tab-view';
import {Actions} from 'react-native-router-flux';
import DeviceInfo from 'react-native-device-info';
import RNFirebase from 'react-native-firebase';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/Style.js';
I18nManager.forceRTL(true);


const firebaseApp = RNFirebase.initializeApp({ debug: false });
firebaseApp.analytics().logEvent('zodiac');
firebaseApp.admob().initialize('ca-app-pub-5941652146529991~9893279074');
const Banner = RNFirebase.admob.Banner;
const AdRequest = RNFirebase.admob.AdRequest;
const request = new AdRequest();
request.addKeyword('foobar');

let title = '';
let img = '';
const url ="http://api.abrajmaktoob.com/api-horoscope?action=china";
let output_day = "انتظر من فضلك";
let output_yesterday = "انتظر من فضلك";
let output_week = "انتظر من فضلك";
let output_month = "انتظر من فضلك";
let output_year = "انتظر من فضلك";
let connectionStatus = false;
NetInfo.isConnected.fetch().then(isConnected => {
  connectionStatus = isConnected
});
NetInfo.isConnected.addEventListener(
  'connectionChange',
  isConnected => {
    connectionStatus = isConnected
});

class Month extends Component {
  constructor(props){super(props);}
  state = 
  {
    routes: [
      { key: 'tab1', title: 'اليوم' },
      { key: 'tab2', title: 'أمس' },
      { key: 'tab3', title: 'أسبوع' },
      { key: 'tab4', title: 'شهر' },
      { key: 'tab5', title: 'عام' }
    ],
    index: 0,
    data: '',
    output_1: '1000'
  }
  _renderScene = SceneMap({
    tab1: FirstRoute,
    tab2: SecondRoute,
    tab3: thirdRoute,
    tab4: forthRoute,
    tab5: fifthRoute,
  })
  getUrl(){
    var id = this.props.id;
    const getUniqueID = DeviceInfo.getUniqueID();
    return url+"&id="+id+"&cid="+getUniqueID;
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
              })
              output_day = responseJson.result_china.day.post_content;
              output_yesterday = responseJson.result_china.yesterday.post_content;
              output_week = responseJson.result_china.week.post_content;
              output_month = responseJson.result_china.month.post_content;
              output_year = responseJson.result_china.year.post_content;
              this.setState({
                routes: [
                  { key: 'tab1', title: 'اليوم' },
                  { key: 'tab2', title: 'أمس' },
                  { key: 'tab3', title: 'أسبوع' },
                  { key: 'tab4', title: 'شهر' },
                  { key: 'tab5', title: 'عام' }
                ],
              })
  
        })
        .catch((error) => {
            console.error(error);
        });
      }
      {
        output_day = "انتظر من فضلك";
        output_yesterday = "انتظر من فضلك";
        output_week = "انتظر من فضلك";
        output_month = "انتظر من فضلك";
        output_year = "انتظر من فضلك";
      }
  }



  //async componentWillMount() {getvals()}
  _handleIndexChange = index => this.setState({ index });
  _renderHeader = props => {
     const inputRange = props.navigationState.routes.map((x, i) => i);
     return (
       <View style={styles.tabBar} tabStyle={styles.tabStyle}>
        <StatusBar hidden={true} />
         {props.navigationState.routes.map((route, i) => {
           const color = props.position.interpolate({
             inputRange,
             outputRange: inputRange.map(
               inputIndex => (inputIndex === i ? '#FFF' : 'transparent')
             ),
           });
           return (
             <TouchableOpacity
              key = {route.key}
              style={styles.tabItem_5}
              onPress={() => this.setState({ index: i })}>
              <Animated.Text numberOfLines={1} style={styles.tabItemText}>{route.title}</Animated.Text>
              <Animated.View style={[
                          styles.indicator,{backgroundColor: color}
                        ]}>
                </Animated.View>
             </TouchableOpacity>
           );
         })}
       </View>
     )
  };
  output_day = "asdasd";
  //renderHome() {return <Text style={{color:"#FFF", textAlign: "justify", fontFamily: 'Tajawal-Light', lineHeight: 30, paddingRight:10,paddingLeft:10}}>12345678</Text>}

  render() {
    title = this.props.text;
    img = this.props.img;
    id  = this.props.id;
    //getvals(id);
    handleClick = () => {
      Share.share({
        message: title + '\r\n \r\n اليوم: \r\n' + output_day + '\r\n \r\n أمس: \r\n' + output_yesterday + '\r\n \r\n أسبوع: \r\n' + output_week + '\r\n \r\n شهر: \r\n' + output_month + '\r\n \r\n http://abrajmaktoob.com/app',
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
      <View style={[styles.container, {}]}>
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
      <TabView
        scrollEnabled = {1}
        style={{backgroundColor:'rgba(11, 15, 58, 0.6)'}}
        navigationState={this.state}
        renderScene={this._renderScene}
        onIndexChange={this._handleIndexChange}
        tabBarPosition = 'top'
        renderTabBar={this._renderHeader}
      />
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

var FirstRoute = () =>
(
  <ScrollView showsHorizontalScrollIndicator={true} showsVerticalScrollIndicator={true} style={[styles.container, {}]} scrollEnabled>
    <Text style={styles.month_body}>{output_day}</Text>
  </ScrollView>
);


const SecondRoute = () =>
(
  <ScrollView showsHorizontalScrollIndicator={true} showsVerticalScrollIndicator={true} style={[styles.container, {}]} scrollEnabled>
    <Text style={styles.month_body}>{output_yesterday}</Text>
  </ScrollView>
);
const thirdRoute = () =>
(
  <ScrollView showsHorizontalScrollIndicator={true} showsVerticalScrollIndicator={true} style={[styles.container, {}]} scrollEnabled>
    <Text style={styles.month_body}>{output_week}</Text>
  </ScrollView>
);
const forthRoute = () =>
(
  <ScrollView showsHorizontalScrollIndicator={true} showsVerticalScrollIndicator={true} style={[styles.container, {}]} scrollEnabled>
    <Text style={styles.month_body}>{output_month}</Text>
  </ScrollView>
);
const fifthRoute = () =>
(
  <ScrollView showsHorizontalScrollIndicator={true} showsVerticalScrollIndicator={true} style={[styles.container, {}]} scrollEnabled>
    <Text style={styles.month_body}>{output_year}</Text>
  </ScrollView>
);

// function getvals(id)
// {
//   fetch(url,
//   {
//     method: "GET",
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//     },
//   })
//   .then((response) => response.json())
//   .then((responseData) => 
//   {
//     output_day = responseData.result_china.day.post_content;
//     output_yesterday = responseData.result_china.yesterday.post_content;
//     output_week = responseData.result_china.week.post_content;
//     output_month = responseData.result_china.month.post_content;
//   })
//   .catch(error => console.warn(error));
// }
export default Month;