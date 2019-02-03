import React from 'react';

import {
    View,
    Text,
} from 'native-base';

import {
    TouchableOpacity,
    ScrollView,
    Image,
    FlatList,
    Dimensions,
    Platform,
    StyleSheet
} from 'react-native';

import {
    fonts,
    colors
} from './../config/Constants';

import EStyleSheet from 'react-native-extended-stylesheet';
import rowStyles from './../styles/style_home';

import {Actions} from 'react-native-router-flux';

//import ImageSlider from 'react-native-image-slider';
//import CommonDataManager from './../config/CommonDataManager';
//import Card from './../component/card/Card';

export default class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            id: null,
            type: 'city',
            result: {},
            info: {},
            reload: false
        }
    }

    getUrl() {

        let commonData = CommonDataManager.getInstance().getData();

        this.setState({
            id: commonData.id,
            type: commonData.type
        });

        return 'https://api.parsdid.com/iranplanner/react/api-home.php?action=home' +
            '&type=' +
            commonData.type + '&value=' +
            commonData.id;
    }

    componentWillMount() {
        fetch(this.getUrl(), {
            headers: {
                'Cache-Control': 'no-cache'
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.updateInfo(responseJson.Result_home);
                console.log(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    updateInfo(response) {
        this.setState({
            info: response.info,
            cities: response.province_city,
            localFood: response.localfood,
            souvenirs: response.souvenirs,
            events: response.event
        });
    }

    render() {
        return (
            <View>
                {this.renderMainComponent()}
            </View>
        )
    }

    renderMainComponent() {
        return (
            <ScrollView style={{height: '100%', backgroundColor: 'white'}}>
                <View style={styles.container}>

                    <View style={styles.toolbar}>

                        <Image style={{
                            height: 250,
                            width: '100%',
                            resizeMode: 'cover',
                            position: 'absolute'
                        }}
                               source={{uri: this.state.info.img_url}}/>

                        <View style={styles.toolbarInside}>
                            <TouchableOpacity activeOpacity={.8}
                                              onPress={()=>Actions.where()}
                                              style={styles.destination}>
                                <Text style={styles.toolbarText}>کجا بریم؟</Text>
                            </TouchableOpacity>

                            <Text style={styles.destinationText}>{this.state.info.title}</Text>

                            <TouchableOpacity style={styles.toolbarInfo} activeOpacity={.8}
                                              onPress={()=>Actions.about_province({
                                                  condition: 0,
                                                  uri: this.state.info.img_url,
                                                  title: this.state.info.title,
                                                  body: this.state.info.body
                                              })}>
                                <Icon name="info-circle" style={styles.toolbarInfoIcon}/>
                            </TouchableOpacity>
                        </View>

                        <Icon name="bars" style={styles.toolbarIcon} onPress={Actions.drawerOpen}/>

                    </View>

                    <View style={styles.actionTempContainer}>
                        <TouchableOpacity onPress={()=>Actions.event({info: this.getHomeInfo()})}
                                          activeOpacity={.7}
                                          style={styles.cell}>
                            <Icon name="calendar" style={styles.cellIcon}/>
                            <Text style={styles.cellText}>وقایع جالب</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>Actions.attraction({
                            info: this.getHomeInfo()
                        })}
                                          activeOpacity={.7}
                                          style={styles.cell}>
                            <Icon name="road" style={styles.cellIcon}/>
                            <Text style={styles.cellText}>جاذبه ی گردشگری</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>Actions.house({
                            info: this.getHomeInfo()
                        })}
                                          activeOpacity={.7}
                                          style={styles.cell}>
                            <Icon name="bed" style={styles.cellIcon}/>
                            <Text style={styles.cellText}>اقامت</Text>
                        </TouchableOpacity>

                        {/*<TouchableOpacity activeOpacity={.7} style={styles.cell}>*/}
                        {/*<Icon name="ios-map" style={styles.cellIcon}/>*/}
                        {/*<Text style={styles.cellText}>برنامه ی سفر</Text>*/}
                        {/*</TouchableOpacity>*/}
                    </View>

                    <View style={styles.eventContainer}>
                        <TouchableOpacity style={{
                            position: 'absolute',
                            left: 20
                        }} activeOpacity={.8} onPress={()=> Actions.event({info: this.getHomeInfo()})}>
                            <Text style={{
                                fontFamily: 'IRANSansMobile',
                                color: colors.primary,
                                fontSize: 12,
                            }}>رویدادهای بیشتر</Text>
                        </TouchableOpacity>
                        <Text style={{
                            fontFamily: 'IRANSansMobile',
                            color: 'black',
                            position: 'absolute',
                            right: 20
                        }}>رویدادهای {this.state.info.title}</Text>
                    </View>

                    {this.renderSlider()}

                    <View style={styles.foodContainer}>
                        <Text style={styles.title}>شهرهای استان</Text>

                        {this.renderIf(this.state.cities !== null,

                            <FlatList
                                style={{height: 200, marginHorizontal: 10}}
                                data={this.state.cities}
                                horizontal={true}
                                renderItem={({item}) => this.renderCitiesItem(item)}
                                keyExtractor={item =>'' + item.id}
                            />
                        )}

                    </View>

                    <View style={styles.foodContainer}>
                        <Text style={styles.title}>غذاهای محلی</Text>

                        {this.renderIf(this.state.localFood !== null,

                            <FlatList
                                style={{height: 200, marginHorizontal: 10}}
                                data={this.state.localFood}
                                horizontal={true}
                                renderItem={({item}) => this.renderFoodItem(item)}
                                keyExtractor={item => '' + item.id}
                            />
                        )}

                    </View>

                    <View style={styles.foodContainer}>
                        <Text style={styles.title}>سوغاتی</Text>

                        {this.renderIf(this.state.souvenirs !== null,

                            <FlatList
                                style={{height: 200, marginHorizontal: 10}}
                                data={this.state.souvenirs}
                                horizontal={true}
                                renderItem={({item}) => this.renderSouvenirsItem(item)}
                                keyExtractor={item => '' + item.id}
                            />
                        )}

                    </View>
                </View>
            </ScrollView>
        )
    }

    getHomeInfo() {
        return ({
            title: this.state.info.title,
            id: this.state.id,
            type: this.state.type,
            category: false
        })
    }

    renderIf(condition, component) {
        if (condition) {
            return (
                component
            )
        }
    }

    renderSlider() {
        if (this.state.events !== null) {
            return <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
                paddingTop: 20,
                paddingBottom: 20
            }}>

                <ImageSlider
                    style={{
                        width: Dimensions.get('window').width - 20,
                        backgroundColor: 'white',
                        borderRadius: 10
                    }}
                    loopBothSides
                    autoPlayWithInterval={3000}
                    images={this.state.events}
                    customSlide={({index, item, style, width}) => (
                        // It's important to put style here because it's got offset inside
                        <TouchableOpacity key={index} style={[style, styles.slider]} activeOpacity={.8}
                                          onPress={()=>Actions.event_detail({id: item.id})}>
                            <Image source={{uri: item.img_url}} style={styles.sliderImage}/>
                            <Text style={styles.sliderText}>{item.title}</Text>
                        </TouchableOpacity>
                    )}
                />

            </View>
        }
    }

    renderCitiesItem = (item) => {
        return <Card {...item}/>
    };

    renderFoodItem = (item) => {
        return <Card {...item}/>
    };

    renderSouvenirsItem = (item) => {
        return <Card {...item}/>
    };

}

const styles = StyleSheet.create({
    title: {
        ...fonts.normal,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'grey',
        alignSelf: 'flex-end',
        marginHorizontal: 15,
        marginTop: 15,
        marginBottom: 5
    },
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    toolbar: {
        width: '100%',
        height: 250,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        shadowColor: 'black',
        shadowOffset: {width: 0.1, height: 0.4},
        shadowOpacity: .5
    },
    toolbarIcon: {
        marginTop: Platform.OS === 'ios' ? 25 : 0,
        fontSize: 25,
        color: 'white',
        height: 30,
        padding: 5,
        marginRight: 10,
    },
    toolbarInside: {
        position: 'absolute',
        width: '100%',
        height: 250,
        alignItems: 'center',
        justifyContent: 'center'
    },
    toolbarText: {
        paddingVertical: 8,
        paddingHorizontal: 18,
        fontSize: 15,
        ...fonts.normal
    },
    destinationText: {
        color: 'white',
        fontSize: 20,
        ...fonts.bold
    },
    toolbarInfo: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        margin: 10,
        padding: 5
    },
    toolbarInfoIcon: {
        fontSize: 25,
        color: 'white',
        shadowColor: 'black',
        shadowOffset: {width: 0.1, height: 2},
        shadowOpacity: 0.5
    },
    destination: {
        position: 'absolute',
        borderRadius: 20,
        bottom: 0,
        left: 0,
        margin: 10,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: {width: 0.1, height: 4},
        shadowOpacity: 0.5
    },
    dash: {
        position: 'absolute',
        height: 100,
        width: '100%',
        alignItems: 'center'
    },
    dashImage: {
        marginTop: 30,
        tintColor: colors.primary
    },
    actionContainer: {
        backgroundColor: 'white',
        height: 180,
        width: '100%',
        flexDirection: 'column',
    },
    actionTempContainer: {
        backgroundColor: 'white',
        height: 90,
        width: '100%',
        flexDirection: 'row',
    },
    cell: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cellIcon: {
        color: colors.primary,
        fontSize: 35,
        marginTop: 10,
        marginBottom: 6,
        shadowOpacity: 0.4,
        shadowOffset: {width: 0.5, height: 2}
    },
    cellText: {
        ...fonts.bold,
        color: 'grey',
        fontSize: 15,
        marginTop:10
    },
    foodContainer: {
        backgroundColor: 'white',
        width: '100%',
        height: 250,
    },
    eventContainer: {
        height: 20,
        alignItems: 'center',
        marginTop: 25,
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    slider: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    sliderImage: {
        width: '100%',
        height: 250,
        resizeMode: 'cover',
    },
    sliderText: {
        ...fonts.bold,
        position: 'absolute',
        bottom: 40,
        color: 'white'
    }
});
