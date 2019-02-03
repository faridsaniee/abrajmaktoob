import React, { Component } from 'react';
import { StyleSheet,View, Text, TouchableOpacity ,  Image,Share, NetInfo, I18nManager} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import RNFirebase from 'react-native-firebase';
import styles from '../styles/Style.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import StarRating from 'react-native-star-rating';
I18nManager.forceRTL(true);

const firebaseApp = RNFirebase.initializeApp({ debug: false });
firebaseApp.analytics().logEvent('Star');
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
       month_1: "انتظر...",
       month_2: "انتظر...",
       month_3: "انتظر...",
       rate_1: 0,
       rate_2: 0,
       rate_3: 0,
       rate_4: 0,
       month_icon_1: "",
       month_icon_2: "",
       month_icon_3: ""
    }
  }
  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }
  updateText(){}
  getUrl(){
      var id = this.props.id;
      const getUniqueID = DeviceInfo.getUniqueID();
      return 'http://api.abrajmaktoob.com/api-horoscope?action=star&id='+ id +'&cid='+getUniqueID;
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
              month_1: responseJson.result_star.month["1"][1],
              month_2: responseJson.result_star.month["2"][1],
              month_3: responseJson.result_star.month["3"][1],
              month_icon_1: responseJson.result_star.month["1"][0],
              month_icon_2: responseJson.result_star.month["2"][0],
              month_icon_3: responseJson.result_star.month["3"][0],
              rate_1: responseJson.result_star.rate["1"],
              rate_2: responseJson.result_star.rate["2"],
              rate_3: responseJson.result_star.rate["3"],
              rate_4: responseJson.result_star.rate["4"]
          })
      })
      .catch((error) => {
          console.error(error);
      });
    }
    else
    {
      month_1: "انتظر...";
      month_2: "انتظر...";
      month_3: "انتظر...";
      rate_1: 0;
      rate_2: 0;
      rate_3: 0;
      rate_4: 0;
      month_icon_1: "";
      month_icon_2: "";
      month_icon_3: "";
    }
  }
  render() {
    title = this.props.text;
    img = this.props.img;
    id  = this.props.id;
    let body = title + '\r\n \r\n مبارياتك اليوم \r\n حب: '+this.state.month_1+' \r\n صداقة: '+this.state.month_2+'\r\n مهنة: '+this.state.month_3+'\r\n\r\n تصنيف النجوم اليوم \r\n حب: '+this.state.rate_1+'\r\n مزاج: '+this.state.rate_2+'\r\n مهنة: '+this.state.rate_3+'\r\n مال: '+this.state.rate_4;
    handleClick = () => {
      Share.share({
        message: body + '\r\n \r\n http://abrajmaktoob.com/app',
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
        <View style={[styles.container, {backgroundColor:'transparent', alignContent: "center", alignItems:"center"}]}> 
            <View style={[styles.star_box,{}]}>
                <Text  style={styles.star_title}>مبارياتك اليوم</Text>
                <View style={[styles.star_box_inside]}>
                    <View style={[{},{width:"40%",}]}><Text style={[styles.star_box1_text,{textAlign: "right",}]}>حب</Text></View>
                    <View style={[{},{width:"20%",justifyContent: 'center',alignItems: 'center'}]}>
                      <Image style={{width: 20,height: 20}} source={{uri: 'asset:/icon/'+this.state.month_icon_1+'.png'}}/>
                    </View>
                    <View style={[{},{width:"40%",}]}><Text style={[styles.star_box1_text,{textAlign: "left",}]}>{this.state.month_1}</Text></View>
                </View>
                <View style={[styles.star_box_inside]}>
                    <View style={[{},{width:"40%",}]}><Text style={[styles.star_box1_text,{textAlign: "right"}]}>صداقة</Text></View>
                    <View style={[{},{width:"20%",justifyContent: 'center',alignItems: 'center'}]}>
                      <Image style={{width: 20,height: 20}} source={{uri: 'asset:/icon/'+this.state.month_icon_2+'.png'}}/>
                    </View>
                    <View style={[{},{width:"40%",}]}><Text style={[styles.star_box1_text,{textAlign: "left"}]}>{this.state.month_2}</Text></View>
                </View>
                <View style={[styles.star_box_inside]}>
                    <View style={[{},{width:"40%",}]}><Text style={[styles.star_box1_text,{textAlign: "right"}]}>مهنة</Text></View>
                    <View style={[{},{width:"20%",justifyContent: 'center',alignItems: 'center'}]}>
                      <Image style={{width: 20,height: 20}} source={{uri: 'asset:/icon/'+this.state.month_icon_3+'.png'}}/>
                    </View>
                    <View style={[{},{width:"40%",}]}><Text style={[styles.star_box1_text,{textAlign: "left"}]}>{this.state.month_3}</Text></View>
                </View>
            </View>
            <View style={[styles.star_box,{}]}>
                <Text  style={styles.star_title}>تصنيف النجوم اليوم</Text>
                <View style={[styles.star_box_inside]}>
                    <View style={[styles.star_caption,{}]}><Text style={[styles.star_caption_text,{}]}>حب</Text></View>
                    <View style={[styles.star_rate,{}]}>
                    <StarRating
        disabled={true}
        maxStars={5}
        rating={this.state.rate_1}
        reversed = {false}
        starSize = {20}
        emptyStarColor = "#452f5a"
        fullStarColor = "#a874dc"
      />
                    </View>
                </View>
                <View style={[styles.star_box_inside]}>
                    <View style={[styles.star_caption,{}]}><Text style={[styles.star_caption_text,{}]}>مزاج</Text></View>
                    <View style={[styles.star_rate,{}]}>
                    <StarRating
        disabled={true}
        maxStars={5}
        rating={this.state.rate_2}
        reversed = {false}
        starSize = {20}
        emptyStarColor = "#452f5a"
        fullStarColor = "#a874dc"
      />
                    </View>
                </View>
                <View style={[styles.star_box_inside]}>
                    <View style={[styles.star_caption,{}]}><Text style={[styles.star_caption_text,{}]}>مهنة</Text></View>
                    <View style={[styles.star_rate,{}]}>
                    <StarRating
        disabled={true}
        maxStars={5}
        rating={this.state.rate_3}
        reversed = {false}
        starSize = {20}
        emptyStarColor = "#452f5a"
        fullStarColor = "#a874dc"
      />
                    </View>
                </View>
                <View style={[styles.star_box_inside]}>
                    <View style={[styles.star_caption,{}]}><Text style={[styles.star_caption_text,{}]}>مال</Text></View>
                    <View style={[styles.star_rate,{}]}>
                    <StarRating
        disabled={true}
        maxStars={5}
        rating={this.state.rate_4}
        reversed = {false}
        starSize = {20}
        emptyStarColor = "#452f5a"
        fullStarColor = "#a874dc"
      />

                    </View>
                </View>
            </View>
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