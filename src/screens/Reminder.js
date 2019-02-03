import * as React from 'react';
import {Button, Text, View, StatusBar, Image, I18nManager,TouchableOpacity, Picker,Dimensions, TouchableHighlight} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { SuperGridSectionList } from 'react-native-super-grid';
import styles from '../styles/Style.js';
import styles_home from '../styles/style_home.js';
import RNFirebase from 'react-native-firebase';

import DateTimePicker from 'react-native-modal-datetime-picker';

import Month_horscope from '../data/month_horscope.json';
I18nManager.forceRTL(true);

const Banner = RNFirebase.admob.Banner;
const AdRequest = RNFirebase.admob.AdRequest;
const request = new AdRequest();
// console.log(request);
// request.addKeyword('foobar');

let itemDimension = 90;
if(Dimensions.get('window').width > 450){itemDimension = 120}

export default class Date extends React.Component {
    state = 
    {
        isDateTimePickerVisible: false
    };
    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
    _handleDatePicked = (date) => {
      console.log('A date has been picked: ', date);
      this._hideDateTimePicker();
    };
  render() {
    //const { convert_day, img_month, txt_month, id_month, txt_year, id_year, img_year } = this.state
    return (
    <View style={styles.container}>
        <Image
        source={require('../assets/image/bg_user.png')}
        style={styles.background_image} />
        <StatusBar hidden={true} />
        <View style={[styles.container, {}]}>
        <Banner
      unitId="ca-app-pub-5941652146529991~9893279074"
      size={'SMART_BANNER'}
      style={{height:100}}
      request={request.build()}
      onAdLoaded={() => {
        console.log('Advert loaded');
      }}/>    
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
            <View>
                <TouchableHighlight onPress={() =>  Actions.date()}>
                <Text style={styles_home.grid_view_title}>ما هي اشارتي</Text>
                </TouchableHighlight>
            </View>
        </View>
        <View style={[styles.container, {}]}>
            <View style={{flex: 1, flexDirection: 'column', padding: 50}}>
                <View>
                    <Text style={styles.date_title}>إعداد التذكير</Text>
                </View>
                <View style={{width: "100%"}}>
                    <Text style={styles.date_caption}>ساعة</Text>

                    <TouchableOpacity onPress={this._showDateTimePicker}>
          <Text>Show DatePicker</Text>
        </TouchableOpacity>
        <DateTimePicker
        datePickerModeAndroid={"spinner"}
        minuteInterval ={15}
        mode={"time"}
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
        />

                </View>
                <View style={{width: "100%"}}>

                </View>
                <View style={{width: "100%"}}>
                <Button
                onPress={() => this.bar()}
                title="حفظ"
                color="transparent"
                style={styles.date_button}
                />
                </View>
                <View style={{flex: 1, flexDirection: "row"}}>

                </View>
            </View>
        </View>
    </View>
    )
  }
};

// export default Settings;
