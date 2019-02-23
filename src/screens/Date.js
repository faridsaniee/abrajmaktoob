import * as React from 'react';
import {TouchableHighlight, Text, View, StatusBar, Image, I18nManager,TouchableOpacity, AsyncStorage} from 'react-native';
import { Dropdown, selectedIndex } from 'react-native-material-dropdown';
import RNPickerSelect from 'react-native-picker-select';
import {Actions} from 'react-native-router-flux';
import NumericInput from 'react-native-numeric-input'
import styles from '../styles/Style.js';
import RNFirebase from 'react-native-firebase';

import Month_horscope from '../data/month_horscope.json';
import Month_china from '../data/month_china.json';

I18nManager.forceRTL(true);

const firebaseApp = RNFirebase.initializeApp({ debug: false });
firebaseApp.analytics().logEvent('Date');
//firebaseApp.admob().initialize('ca-app-pub-5941652146529991~9893279074');
//firebaseApp.admob().initialize('ca-app-pub-5941652146529991/3563380265');
//firebaseApp.admob().initialize('ca-app-pub-5941652146529991~9893279074');
//const advert = firebaseApp.admob().interstitial('ca-app-pub-5941652146529991~9893279074');
const advert = firebaseApp.admob().interstitial('ca-app-pub-5941652146529991/3563380265');

const AdRequest = RNFirebase.admob.AdRequest;
const request = new AdRequest();
request.addKeyword('foo').addKeyword('bar');

const Month_name = [
    {value: 'المُحَرَّم',index: 1, label: 'المُحَرَّم',key: 1},
    {value: 'صَفَر',index: 2, label: 'صَفَر',key: 2},
    {value: 'ربيع الأول',index: 3, label: 'ربيع الأول',key: 3},
    {value: 'ربيع الآخِر',index: 4, label: 'ربيع الآخِر',key: 4},
    {value: 'جُمَادَى الأولى',index: 5, label: 'جُمَادَى الأولى',key: 5},
    {value: 'جُمَادَى الآخِرَة',index: 6, label: 'جُمَادَى الآخِرَة',key: 6},
    {value: 'رَجَب',index: 7, label: 'رَجَب',key: 7},
    {value: 'شَعْبَانُ',index: 8, label: 'شَعْبَانُ',key: 8 },
    {value: 'رَمَضَانَ',index: 9, label: 'رَمَضَانَ',key: 9 },
    {value: 'شَوَّال',index: 10, label: 'شَوَّال',key: 10 },
    {value: 'ذو القعدة',index: 11, label: 'ذو القعدة',key: 11 },
    {value: 'ذو الحِجَّة',index: 12, label: 'ذو الحِجَّة',key: 12 },
];
  
const Day_name = [
    { value: '1' },
    { value: '2' },
    { value: '3' },
    { value: '4' },
    { value: '5' },
    { value: '6' },
    { value: '7' },
    { value: '8' },
    { value: '9' },
    { value: '10' },
    { value: '11' },
    { value: '12' },
    { value: '13' },
    { value: '14' },
    { value: '15' },
    { value: '16' },
    { value: '17' },
    { value: '18' },
    { value: '19' },
    { value: '20' },
    { value: '21' },
    { value: '22' },
    { value: '23' },
    { value: '24' },
    { value: '25' },
    { value: '26' },
    { value: '27' },
    { value: '28' },
    { value: '29' },
    { value: '30' },
    { value: '31' },
];



function weekName(weekNumber)
{
    let label = '';
    switch (weekNumber) {
        case 2:
        label = "سبت"
            break;
        case 3:
        label = "أَحَد"
            break;
        case 4:
        label = "إثْنَان"
            break;
        case 5:
        label = "الثلاثاء"
            break;
        case 6:
        label = "أربعاء"
            break;
        case 0:
        label = "الخميس"
            break;
        case 1:
        label = "الجمعة"
            break;
    }
    return label;
}
function monthName(monthNumber)
{
    let label = '';
    switch (monthNumber) {
        case 1:
        label = "January"
            break;
        case 2:
        label = "February"
            break;
        case 3:
        label = "March"
            break;
        case 4:
        label = "April"
            break;
        case 5:
        label = "May"
            break;
        case 6:
        label = "June"
            break;
        case 7:
        label = "July"
            break;
        case 8:
        label = "August"
            break;
        case 9:
        label = "September"
            break;
        case 10:
        label = "October"
            break;
        case 11:
        label = "November"
            break;
        case 12:
        label = "December"
            break;
    }
    return label;
}
function yearMap(yearMod)
{
    var yearMapNum = 0;
    switch (yearMod)
    {
        case 0:
        yearMapNum = 8
            break;
        case 1:
        yearMapNum = 9
            break;
        case 2:
        yearMapNum = 10
            break;
        case 3:
        yearMapNum = 11
            break;
        case 4:
        yearMapNum = 0
            break;
        case 5:
        yearMapNum = 1
            break;
        case 6:
        yearMapNum = 2
            break;
        case 7:
        yearMapNum = 3
            break;
        case 8:
        yearMapNum = 4
            break;
        case 9:
        yearMapNum = 5
            break;
        case 10:
        yearMapNum = 6
            break;
        case 2:
        yearMapNum = 7
            break;
    }
    return yearMapNum;
}
class Date extends React.Component {


    state = 
    {
      convert_day: '',
      img_month: '',
      txt_month: '',
      id_month: '',
      img_year: '',
      txt_year: '',
      id_year: '',
      txt_china_title: '',
      txt_greece_title: '',
      txt_zodiac_title: '',
      txt_star_title: '',
    };
    componentDidMount()
    {
        AsyncStorage.getItem("date_convert_convert_day").then((value)=>{this.setState({convert_day: value})})
        AsyncStorage.getItem("date_convert_img_month").then((value)=>{this.setState({img_month: value})})
        AsyncStorage.getItem("date_convert_txt_month").then((value)=>{this.setState({txt_month: value})})
        AsyncStorage.getItem("date_convert_id_month").then((value)=>{this.setState({id_month: value})})
        AsyncStorage.getItem("date_convert_img_year").then((value)=>{this.setState({img_year: value})})
        AsyncStorage.getItem("date_convert_txt_year").then((value)=>{this.setState({txt_year: value})})
        AsyncStorage.getItem("date_convert_id_year").then((value)=>{this.setState({id_year: value})})
        this.setState({txt_china_title: "الصينية"});
        this.setState({txt_zodiac_title: "الغربية"});
        this.setState({txt_greece_title: "اليونانية"});
        this.setState({txt_star_title: "مزيج"});
    }

    intPart(floatNum)
    {
        if (floatNum< -0.0000001){return Math.ceil(floatNum-0.0000001)}
        return Math.floor(floatNum+0.0000001);
    }
    _toggleModal = () =>
    {
        let d=(this.fld_date_day);
        let m=(this.fld_date_month);
        let y=(this.fld_date_year);
        if(d != null && m != null && y != null)
        {
            d = parseInt(d);
            m = parseInt(m);
            y = parseInt(y);

            let jd = this.intPart((11*y+3)/30)+354*y+30*m-this.intPart((m-1)/2)+d+1948440-385; // Juluian Day
            let dayOfWeek = jd%7; //Dayofweek  
            if (jd> 2299160 )
            {

                l=jd+68569
                n=this.intPart((4*l)/146097)
                l=l-this.intPart((146097*n+3)/4)
                i=this.intPart((4000*(l+1))/1461001)
                l=l-this.intPart((1461*i)/4)+31
                j=this.intPart((80*l)/2447)
                d=l-this.intPart((2447*j)/80)
                l=this.intPart(j/11)
                m=j+2-12*l
                y=100*(n-49)+i+l
            }	
            else	
            {
                j=jd+1402
                k=this.intPart((j-1)/1461)
                l=j-1461*k
                n=this.intPart((l-1)/365)-intPart(l/1461)
                i=l-365*n+30
                j=this.intPart((80*i)/2447)
                d=i-this.intPart((2447*j)/80)
                i=this.intPart(j/11)
                m=j+2-12*i
                y=4*k+n+i-4716
            }
        // //     let weekNamelbl = weekName(dayOfWeek);
        // //     let monthNamelbl = monthName(m);
        // //     let yearMod = y%12;
        // //     let yearMapNum = yearMap(y%12);
            let month_map = 0;
            let year_map = 0;
            switch (m-1)
            {
                case 3:
                    month_map = 0
                    break;
                case 4:
                    month_map = 1
                    break;
                case 5:
                    month_map = 2
                    break;
                case 6:
                    month_map = 3
                    break;
                case 7:
                    month_map = 4
                    break;
                case 8:
                    month_map = 5
                    break;
                case 9:
                    month_map = 6
                    break;
                case 10:
                    month_map = 7
                    break;
                case 11:
                    month_map = 8
                    break;
                case 0:
                    month_map = 9
                    break;
                case 1:
                    month_map = 10
                    break;
                case 2:
                    month_map = 11
                    break;
            }
            this.setState({
                img_month: Month_horscope[(month_map)]['icon'],
                txt_month: Month_horscope[(month_map)]['title'],
                id_month: Month_horscope[(month_map)]['id'],
                img_year: Month_china[yearMap(y%12)]['icon'],
                txt_year: Month_china[yearMap(y%12)]['title'],
                id_year: Month_china[yearMap(y%12)]['id'],
                convert_day: d + " / " + m + " / " + y + " , " + weekName(dayOfWeek) + " , " + monthName(m),
                txt_china_title: 'الصينية',
                txt_zodiac_title: 'الغربية',
                txt_greece_title: 'اليونانية',
                txt_star_title: 'مزيج'
            })
        }
        else
        {
            this.setState({
                convert_day: "يرجى ملء هذا النموذج",
            });
        }


    }
    
  render() 
  {
    advert.loadAd(request.build());
    advert.on('onAdLoaded', () => {
        advert.show();
    });
    if(this.state.txt_month != '')
    {
        AsyncStorage.setItem('date_convert_img_month',this.state.img_month, () => {});
        AsyncStorage.setItem('date_convert_txt_month',this.state.txt_month, () => {});
        AsyncStorage.setItem('date_convert_id_month',this.state.id_month, () => {});
        AsyncStorage.setItem('date_convert_img_year',this.state.img_year, () => {});
        AsyncStorage.setItem('date_convert_txt_year',this.state.txt_year, () => {});
        AsyncStorage.setItem('date_convert_id_year',this.state.id_year, () => {});
        AsyncStorage.setItem('date_convert_convert_day',this.state.convert_day, () => {});
    }
    else
    {

        // AsyncStorage.getItem("date_convert_img_month").then((value)=>{this.setState.img_month = value;})
        // AsyncStorage.getItem("date_convert_txt_month").then((value1)=>{this.state.txt_month = value1;})
        // AsyncStorage.getItem("date_convert_id_month").then((value)=>{this.state.id_month = value;})
        // AsyncStorage.getItem("date_convert_img_year").then((value)=>{this.state.img_year = value;})
        // AsyncStorage.getItem("date_convert_txt_year").then((value)=>{this.state.txt_year = value;})
        // AsyncStorage.getItem("date_convert_id_year").then((value)=>{this.state.id_year = value;})
        // AsyncStorage.getItem("date_convert_convert_day").then((value)=>{this.state.convert_day = "asdasd";})
    }

    return (
    <View style={styles.container}>
        <Image
        source={require('../assets/image/bg_user.png')}
        style={styles.background_image} />
        <StatusBar hidden={true} />
        <View style={[styles.container, {}]}>
            <View style={{flex: 1, flexDirection: 'column', padding: 50}}>
                <View>
                    <Text style={styles.date_title}>الرجاء ادخال تاريخ ميلادك</Text>
                </View>
                <View style={{width: "100%"}}>
                    <Text style={styles.date_caption}>عام</Text>
                    <NumericInput 
                    initValue = {1440}
                    style={styles.date_fld_year}
                    iconStyle={styles.date_fld_year}
                    containerStyle={styles.date_fld_year}
                    inputStyle={styles.date_fld_year}
                    //value={this.state.fld_date_year}
                    //onChange={value => this.setState({value})} 
                    onChange ={value => this.fld_date_year = (value)}
                    totalWidth={290} 
                    totalHeight={50} 
                    iconSize={20}
                    step={1}
                    valueType='real'
                    textColor='#FFF' 
                    iconStyle={{ color: 'white' }} 
                    separatorWidth = {5}
                    minValue = {1340}
                    maxValue = {1440}
                    rightButtonBackgroundColor='#5a1743' 
                    leftButtonBackgroundColor='#5a1743'
                    borderColor="transparent"
                    />
                </View>

                <View style={{width: "100%"}}>
                    <Dropdown
                    style={styles.date_dropdown}
                    itemTextStyle={styles.date_dropdown}
                    label='شهر'
                    textColor={"rgba(0, 0, 0, 1)"}
                    baseColor={"rgba(255, 255, 255, 1)"}
                    data={Month_name}
                    animationDuration={1}
                    dropdownPosition={0}
                    itemCount={15}
                    itemPadding = {5}
                    valueExtractor = {({ index }) => index}
                    labelExtractor = {({ value }) => value}
                    //propsExtractor = {({ index }) => index}
                    //onChangeText={index => console.log(index)}
                    onChangeText={index => this.fld_date_month = (index)}
                    
                />
                </View>
                <View style={{width: "100%"}}>
                <Dropdown
                    style={styles.date_dropdown}
                    itemTextStyle={styles.date_dropdown}
                    label='يوم'
                    textColor={"rgba(0, 0, 0, 1)"}
                    baseColor={"rgba(255, 255, 255, 1)"}
                    data={Day_name}
                    itemCount={10}
                    onChangeText={index => this.fld_date_day = (index)}
                />
                </View>
                <View style={{alignItems:"center"}}>
                    <TouchableHighlight onPress={this._toggleModal}>
                        <Text style={styles.txt_btn_title}>حساب</Text>
                    </TouchableHighlight>
                </View>
                <View>
                    <Text style={styles.date_convert}>{this.state.convert_day}</Text>
                </View>
                <View style={{flex: 1, flexDirection: "row"}}>
                    <View style={{width:"25%",height:80, alignContent:"center", alignItems:"center", alignSelf:"center"}}>
                        <Text style={styles.date_img_title}>{this.state.txt_zodiac_title}</Text>
                        <TouchableOpacity activeOpacity={.8}  onPress={() => Actions.month({text: this.state.txt_month, img: this.state.img_month, id: this.state.id_month})} >
                            <Image
                            style={styles.date_img}
                            source={{uri: 'asset:/icon/'+this.state.img_month+'.png'}}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={.8}  onPress={() => Actions.month({text: this.state.txt_month, img: this.state.img_month, id: this.state.id_month})} >
                            <Text style={styles.date_img_caption}>{this.state.txt_month}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{width:"25%",height:80, alignContent:"center", alignItems:"center", alignSelf:"center"}}>
                        <Text style={styles.date_img_title}>{this.state.txt_china_title}</Text>
                        <TouchableOpacity activeOpacity={.8}  onPress={() => Actions.year({text: this.state.txt_year, img: this.state.img_year, id: this.state.id_year})} >
                            <Image
                            style={styles.date_img}
                            source={{uri: 'asset:/icon/'+this.state.img_year+'.png'}}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={.8}  onPress={() => Actions.year({text: this.state.txt_year, img: this.state.img_month, id: this.state.id_year})} >
                            <Text style={styles.date_img_caption}>{this.state.txt_year}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{width:"25%",height:80, alignContent:"center", alignItems:"center", alignSelf:"center"}}>
                        <Text style={styles.date_img_title}>{this.state.txt_greece_title}</Text>
                        <TouchableOpacity activeOpacity={.8}  onPress={() => Actions.greece({text: this.state.txt_month, img: this.state.img_month, id: this.state.id_month})} >
                            <Image
                            style={styles.date_img}
                            source={{uri: 'asset:/icon/'+this.state.img_month+'.png'}}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={.8}  onPress={() => Actions.greece({text: this.state.txt_month, img: this.state.img_month, id: this.state.id_month})} >
                            <Text style={styles.date_img_caption}>{this.state.txt_month}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{width:"25%",height:80, alignContent:"center", alignItems:"center", alignSelf:"center"}}>
                        <Text style={styles.date_img_title}>{this.state.txt_star_title}</Text>
                        <TouchableOpacity activeOpacity={.8}  onPress={() => Actions.star({text: this.state.txt_month, img: this.state.img_month, id: this.state.id_month})} >
                            <Image
                            style={styles.date_img}
                            source={{uri: 'asset:/icon/'+this.state.img_month+'.png'}}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={.8}  onPress={() => Actions.star({text: this.state.txt_month, img: this.state.img_month, id: this.state.id_month})} >
                            <Text style={styles.date_img_caption}>{this.state.txt_month}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
        {/* <Banner
        unitId="ca-app-pub-5941652146529991/3563380265"
        request={request.build()}
        onAdLoaded={() => {console.log('Advert loaded');}}
        onAdOpened={() => {console.log('Advert Opened');}}
        onAdFailedToLoad={error => console.log(error)}
        testDevices={"EMULATOR"}
        /> */}
    </View>
    )
  }
};

export default Date;
