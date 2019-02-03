import React from 'react';

import {View, Text, Image, ScrollView} from 'react-native'

import {Icon} from 'native-base';

import EStyleSheet from 'react-native-extended-stylesheet';

import Toolbar from './../component/Toolbar';

export default class About extends React.Component {

    render() {
        return (
            <View style={{flex: 1,backgroundColor:'white'}}>

                <Toolbar title='درباره ما'/>

                <ScrollView contentContainerStyle={styles.container}>

                    <Text style={styles.title}>ایران پلنر</Text>

                    <Text style={styles.subtitle}>سامانه جامع برنامه ریزی سفر در ایران</Text>

                    <Text style={styles.link}>www.iranplanner.com</Text>

                    <View style={styles.cell}>
                        <Icon name="logo-instagram" style={styles.cellIcon}/>
                        <Icon name="logo-linkedin" style={styles.cellIcon}/>
                        <Icon name="logo-instagram" style={styles.cellIcon}/>
                    </View>

                    <Text style={styles.desc} lineHeight={50}>همه چیز از چند لوکیشن ساده روی نقشه شروع شد. و سوالهای مکرر اطرافیان که به کجا برویم؟

وقتی سوال باشد، پاسخ به سادگی مهیا خواهد شد. و اینگونه آغاز کردیم. سالها تجربه مان را در سفر آوردیم، همراهی مسافران در جاده های کشور در سالیان متمادی به ما این توان را داده است که بدانیم شما چه می خواهید. میان آن همه جاذبه در یک شهر چقدر برای دیدن کدامشان وقت صرف کنید. اگر نخواستید به مسیرهای تکراری پر ترافیک سفر کنید چگونه به چهار گوشه ایران سر بزنید؟!

گروه گردشگری ایران پلنر برای همه این سوالات پاسخی به اندازه بیش از یک دهه تجربه همراهی با مسافران را دارد.

این گروه در کنار گروه فناوری اطلاعات که می داند چگونه اطلاعات را در دسترس شما قرار دهد، و آن را منظم و آسان و راحت در اختیار شما بگذارد، تیمی کامل را برای ارائه خدمات تشکیل میدهد. و منجر شد به اینکه ایران پلنر سایتی باشد برای رفع نیازهای شما در سفر، دوست و همراه شما در جاده ها و گوشه های پنهان ایران. ایران پلنر به کاربر این امکان را می دهد تا با چند کلیک ساده به دنیایی از اطلاعات طبقه بندی شده دسترسی پیدا کند و برنامه ریز حرفه ای سفر خود باشد.

صدها برنامه سفر همراه با توضیح جاذبه های گردشگری کشور مانند یک راهنمای گردشگری تمام وقت در اختیار کاربران است. نقشه راه، توصیه های ضروری و همه آنچه در سفر باید بدانید به تحقق اهداف تیم ایران پلنر منجر می شود.</Text>

                </ScrollView>

            </View>
        )
    }
}

const styles = EStyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor:'white'
    },
    title: {
        fontFamily: '$default',
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        paddingVertical: 12
    },
    subtitle: {
        fontFamily: '$default',
        fontSize: 14,
        color: 'black',
        fontWeight: 'bold',
    },
    link: {
        fontFamily: '$default',
        fontSize: 13,
        color: '$primaryColor',
        paddingVertical: 10
    },
    cell: {
        flexDirection: 'row'
    },
    cellIcon: {
        paddingHorizontal: 14,
        fontSize: 25
    },
    desc:{
        textAlign:'right',
        fontFamily: '$default',
        fontSize: 14,
        paddingVertical:20,
        paddingHorizontal:10,
        lineHeight:25
    }
});
