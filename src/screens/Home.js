import * as React from 'react';

import{Text,View,StatusBar,Image ,Animated,TouchableOpacity,TouchableHighlight,I18nManager,Dimensions, BackHandler} from 'react-native';
import {TabView, TabBar,SceneMap } from 'react-native-tab-view';
import { SuperGridSectionList } from 'react-native-super-grid';
import {Actions} from 'react-native-router-flux';
import RNFirebase from 'react-native-firebase';
import Modal from 'react-native-modalbox';

import Month_horscope from '../data/month_horscope.json';
import Month_china from '../data/month_china.json';

import styles from '../styles/Style.js';
import styles_home from '../styles/style_home.js';
I18nManager.forceRTL(true);


var Appsee = require('react-native-appsee');
Appsee.start("192dcad3fa01459f809ec1b53921d457");
Appsee.startScreen();

const firebaseApp = RNFirebase.initializeApp({ debug: false });
firebaseApp.admob().initialize('ca-app-pub-5941652146529991~9893279074');
const Banner = RNFirebase.admob.Banner;
const AdRequest = RNFirebase.admob.AdRequest;
const request = new AdRequest();
request.addKeyword('foobar');

let itemDimension = 90;
if(Dimensions.get('window').width > 400){itemDimension = 100}
if(Dimensions.get('window').width > 450){itemDimension = 120}

let counter = 0;
let wedding_btn_status = false;
let icon_male = "";
let icon_female = "";
let icon_male_text = "";
let icon_female_text = "";
class Home extends React.Component {

  handleBackPress = () => {
    if(Actions.currentScene == "home")
    {
      //Actions.home();
      this.refs.modalExit.open();
      return true;
    }

  };
  componentWillMount() 
  {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }
  componentDidMount()
  {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }
  componentWillUnmount() 
  {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }
  componentWillMount() 
  {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }
  state = {
    index: 0,
    routes: [
      { key: 'tab1', title: 'الغربية' },
      { key: 'tab2', title: 'الصينية' },
      { key: 'tab3', title: 'اليونانية' },
      { key: 'tab4', title: 'مزيج' },
      { key: 'tab5', title: 'التوافق' },
    ],
  };


  // componentDidMount() {
  //   BackHandler.addEventListener('hardwareBackPress', () => {
  //     return true;
  //     console.log(1)
  //   });
  // };

  _renderScene = SceneMap({
    tab1: FirstRoute,
    tab2: SecondRoute,
    tab3: thirdRoute,
    tab4: forthRoute,
    tab5: fifthRoute,
  })
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
                style={styles.tabItem}
                scrollable= "true"
                onPress={() => this.setState({ index: i })}>
                <Animated.Text numberOfLines={1} style={styles.tabItemText}>{route.title}</Animated.Text>
                <Animated.View style={[styles.indicator,{backgroundColor: color}]}></Animated.View>
             </TouchableOpacity>
           );
         })}
       </View>
     )
  };

  render() {
    click_wedding = (event, someParameter) => {
      counter++;
      if(counter == 1)
      {
        icon_male = someParameter.img;
        icon_male_text = someParameter.text;
        icon_female = "";
        icon_female_text = "";
      }
      if(counter == 2)
      {
        wedding_btn_status = false;
        icon_female = someParameter.img;
        icon_female_text = someParameter.text;
        counter = 0;
        Actions.wedding({male_icon:icon_male,female_icon:icon_female,male_icon_text:icon_male_text,female_icon_text:icon_female_text});
        icon_female = "";
        icon_female_text = "";
        icon_male = "";
        icon_male_text = "";
      }
      this.setState({
        routes: [
          { key: 'tab1', title: 'الغربية' },
          { key: 'tab2', title: 'الصينية' },
          { key: 'tab3', title: 'اليونانية' },
          { key: 'tab4', title: 'مزيج' },
          { key: 'tab5', title: 'التوافق' },
        ],
      })
    }
    return (
      <View style={styles.container}>
        <Image
        source={require('../assets/image/bg_user.png')}
        style={styles.background_image} />
        <Modal style={[styles.modal, styles.modalExit]} position={"center"} ref={"modalExit"} backdrop={false} animationDuration = {0}>
          <Text style={styles.modal_text}>تريد ترك التطبيق؟</Text>
          <View style={{flex:0, flexDirection:"row"}}>
            <TouchableOpacity style={styles.modal_button} activeOpacity={0}  onPress={() => {BackHandler.exitApp();return false;}} >
              <Text style={styles.modal_button_text}>نعم</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modal_button} activeOpacity={0}  onPress={() => this.refs.modalExit.close()} >
              <Text style={styles.modal_button_text}>لا</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <TabView
          style={{backgroundColor:'rgba(11, 15, 58, 0.49)'}}
          navigationState={this.state}
          renderScene={this._renderScene}
          onIndexChange={this._handleIndexChange}
          tabBarPosition = 'top'
          renderTabBar={this._renderHeader}
          />
        <View style={{alignItems:"center"}}>
            {this.state.index != '4'? 
              <TouchableHighlight onPress={() =>  Actions.date()}>
                <Text style={styles.txt_btn_title}>اعرف برجك</Text>
              </TouchableHighlight>
          : null }
        </View>
        <Banner
        unitId="ca-app-pub-5941652146529991/5895637395"
        size={'SMART_BANNER'}
        request={request.build()}
        onAdLoaded={() => {}}
        onAdOpened={() => {}}
        //onAdFailedToLoad={error => console.log(error)}
        testDevices={"EMULATOR"}
        />
        </View>
    );
  }
}

const FirstRoute = () =>
(
  <View style={[styles.container, {}]}>
    <SuperGridSectionList
      itemDimension={itemDimension}
      sections={[{data:Month_horscope}]}
      style={styles.gridView}
      renderItem ={({ item }) => (
        <View style={styles_home.grid_view}>
          <TouchableOpacity activeOpacity={.8}  onPress={() => Actions.month({text: item.title, img: item.icon, id: item.id})} >
            <Image
              style={styles_home.grid_view_image}
              source={{uri: 'asset:/icon/'+item.icon+'.png'}}
            />
          </TouchableOpacity>
          <TouchableHighlight  onPress={() => Actions.month({text: item.title, img: item.icon, id: item.id})}>
            <Text style={styles_home.grid_view_title}>{item.title}</Text>
          </TouchableHighlight>
        </View>
      )}/>
  </View>
);
const SecondRoute = () =>
(
  <View style={[styles.container, {}]}>
    <SuperGridSectionList
      itemDimension={itemDimension}
      sections={[{data: Month_china}]}
      style={styles.super_gird_view}
      renderItem ={({ item }) => (
        <View style={styles_home.grid_view}>
          <TouchableHighlight onPress={() => Actions.year({text: item.title, img: item.icon, id: item.id})}>
            <Image
              key={item.id}
              style={styles_home.grid_view_image}
              source={{uri: 'asset:/icon/'+item.icon+'.png'}}
             />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => Actions.year({text: item.title, img: item.icon, id: item.id})}>
            <Text style={styles_home.grid_view_title}>{item.title}</Text>
          </TouchableHighlight>
        </View>
      )}/>
  </View>
);

const thirdRoute = () =>
(
  <View style={[styles.container, {}]}>
      <SuperGridSectionList
      itemDimension={itemDimension}
      sections={[{data: Month_horscope}]}
      style={styles.gridView}
      renderItem ={({ item }) => (
        <View style={styles_home.grid_view}>
          <TouchableHighlight onPress={() => Actions.greece({text: item.title, img: item.icon, id: item.id})}>
            <Image
              var icon = {item.icon+'.png'}
              key={item.id}
              style={styles_home.grid_view_image}
              source={{uri: 'asset:/icon/'+item.icon+'.png'}}
            />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => Actions.greece({text: item.title, img: item.icon, id: item.id})}>
            <Text style={styles_home.grid_view_title}>{item.title}</Text>
          </TouchableHighlight>
        </View>
    )}/>
  </View>
);
const forthRoute = () =>
(
  <View style={[styles.container, {}]}>
    <SuperGridSectionList
      itemDimension={itemDimension}
      sections={[{data: Month_horscope}]}
      style={styles.gridView}
      renderItem ={({ item }) => (
        <View style={styles_home.grid_view}>
          <TouchableHighlight onPress={() => Actions.star({text: item.title, img: item.icon, id: item.id})}>
            <Image
              var icon = {item.icon+'.png'}
              key={item.id}
              style={styles_home.grid_view_image}
              source={{uri: 'asset:/icon/'+item.icon+'.png'}}
            />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => Actions.star({text: item.title, img: item.icon, id: item.id})}>
            <Text style={styles_home.grid_view_title}>{item.title}</Text>
          </TouchableHighlight>
        </View>
    )}/>
  </View>
);
const fifthRoute = () =>
(
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
        {wedding_btn_status? 
          <TouchableHighlight onPress={() => Actions.wedding({male_icon:icon_male,female_icon:icon_female,male_icon_text:icon_male_text,female_icon_text:icon_female_text})}>
            <Image
            style={{width: 20, height: 20}}
            source={require('../assets/icon/icon-mafema.png')}
            />
          </TouchableHighlight>
          : null }

      </View>
      <View style={[styles.wedding_sign, {}]}>
        <Image
          style={{width: 40, height: 40}}
          source={{uri: 'asset:/icon/'+icon_female+'.png'}}
            />
        <Text style={[styles.wedding_sign_caption, {}]}>{icon_female_text}</Text>
      </View>
      <View style={{width:"20%",alignContent:"center", alignItems:"center"}}>
        <Image
          style={{width: 40, height: 40}}
          source={require('../assets/icon/icon-female.png')}
          />
          <Text style={[styles.wedding_symbol_caption, {}]}>{"إناثا"}</Text>
      </View>
    </View>
    <SuperGridSectionList
      itemDimension={itemDimension}
      sections={[{data: Month_horscope}]}
      style={styles.gridView}
      renderItem ={({ item }) => (
        <View style={styles_home.grid_view}>
          <TouchableHighlight onPress={(e) => click_wedding(e,{text: item.title, img: item.icon, id: item.id})}>
            <Image
              var icon = {item.icon+'.png'}
              key={item.id}
              style={styles_home.grid_view_image}
              source={{uri: 'asset:/icon/'+item.icon+'.png'}}
            />
          </TouchableHighlight>
          <TouchableHighlight onPress={(e) => click_wedding(e,{text: item.title, img: item.icon, id: item.id})}>
            <Text style={styles_home.grid_view_title}>{item.title}</Text>
          </TouchableHighlight>
        </View>
    )}/>
  </View>
);
export default Home;