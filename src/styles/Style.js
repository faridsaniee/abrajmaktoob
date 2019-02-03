import {StyleSheet,  Dimensions, Platform} from 'react-native';
const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
  wrapper: {
    ...Platform.select({
      ios: {
        //fontFamily: 'Tajawal-Black',
      },
      android: {
        fontFamily: 'Tajawal-Black'
      }
    }),
  },
  slide: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  navigator: {
    flex: 2
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  background_image: {
    width: "100%",
    height: "100%",
    flex: 1, 
    position: 'absolute', 
    justifyContent: 'center',
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: "rgba(11, 15, 58, 0.5)",
    marginBottom: 5,
  },
  tabItem: {
    width: "20%",
    height: 60,
    alignItems:'center',
  },
  tabItem_4: {
    width: "25%",
    height: 50,
    alignItems:'center',
  },
  tabItem_5: {
    width: "20%",
    height: 50,
    alignItems:'center',
  },
  tabItemText: {
    color: "#FFF",
    height: 48,
    lineHeight:48,
    ...Platform.select({
      ios: {
        //fontFamily: 'Tajawal-Black',
      },
      android: {
        fontFamily: 'Tajawal-Black'
      }
    }),
    fontSize: 12
  },
  indicatorContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  indicator: {
    backgroundColor: 'transparent',
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    height: 2,
  },
  triangle:
  {
    marginBottom: 20,
    marginRight:40,
    marginLeft:40,
    paddingTop:20,
    paddingBottom:20,
    backgroundColor:'rgba(51, 31, 87, 0.7)',
    borderRadius:20,
    borderWidth: 0,
    borderColor: 'rgba(51, 31, 87, 0.7)',
    height: 100,
    width: '80%',
    elevation:10,
    shadowColor: '#FFF',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.7,
    shadowRadius: 20,
  },
  navbar:{
    flex: 0,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    height:70
  },
  navbar_background_image: {
    width: "100%",
    height:70,
    position: 'absolute', 
    justifyContent: 'center',
    top:0
  },
  month_title:
  {
    color:"#FFF", 
    flex:0, 
    ...Platform.select({
      ios: {
        //fontFamily: 'Tajawal-Black',
      },
      android: {
        fontFamily: 'Tajawal-Black'
      }
    }),
  },
  month_body:
  {
    color:"#FFF", 
    textAlign: "justify", 
    lineHeight: 30, 
    paddingRight:10,
    paddingLeft:10,
    fontSize:18,
    ...Platform.select({
      ios: {
        //fontFamily: 'Tajawal-Black',
      },
      android: {
        fontFamily: 'Tajawal-Light'
      }
    }),
  },
  menu_icon:
  {
    direction:"rtl", 
    fontSize:20, 
    lineHeight: 40, 
    height:40, 
    paddingRight: 10, 
    paddingLeft: 10
  },
  menu_caption:
  {
    direction:"rtl", 
    fontSize:20, 
    lineHeight: 30, 
    height:40, 
    ...Platform.select({
      ios: {
        //fontFamily: 'Tajawal-Black',
      },
      android: {
        fontFamily: 'Tajawal-Light'
      }
    })
  },
  navigation_caption:
  {
    color: 'white', 
    fontSize: 20, 
    textAlign: 'center', 
    height:60, 
    lineHeight:60,
    ...Platform.select({
      ios: {
        //fontFamily: 'Tajawal-Black',
      },
      android: {
        fontFamily: 'Tajawal-Black'
      }
    })
  },
  splash_caption:
  {
    marginTop: 200,
    color: 'white', 
    fontSize: 50, 
    textAlign: 'center', 
    ...Platform.select({
      ios: {
        //fontFamily: 'Tajawal-Black',
      },
      android: {
        fontFamily: 'Tajawal-Black'
      }
    })
  },
  star_title:
  {
    color:"#FFF",
    textAlign: "center",
    flex:0,
    padding:10,
    width:"100%",
    ...Platform.select({
      ios: {
        //fontFamily: 'Tajawal-Black',
      },
      android: {
        fontFamily: 'Tajawal-Black'
      }
    }),
  },
  star_caption:
  {
    flex:0,
    width: "20%"
  },
  star_caption_text:
  {
    color:"#FFF",
    direction:"rtl", 
    textAlign: "right",
    marginBottom: 5,
    paddingLeft: 10,
    paddingBottom: 5,
    ...Platform.select({
      ios: {
        //fontFamily: 'Tajawal-Black',
      },
      android: {
        fontFamily: 'Tajawal-Light'
      }
    }),
  },
  star_box1_text:
  {
    color:"#FFF",
    direction:"rtl", 

    ...Platform.select({
      ios: {
        //fontFamily: 'Tajawal-Black',
      },
      android: {
        fontFamily: 'Tajawal-Light'
      }
    }),
  },
  star_box1_caption:
  {
    color:"#FFF",
  },
  star_box:
  {
    flex:0,
    backgroundColor:'rgba(11, 15, 58, 0.7)', 
    width:"75%", 
    borderRadius: 30,
    borderWidth: 0,
    borderColor: '#fff',
    ...Platform.select({
      ios: {
        shadowOffset:{  width: 200,  height: 200,  },
        shadowColor: 'white',
        shadowOpacity: 1.0,
      },
      android: {
        elevation: 5
      }
    }),
    margin: 25, 
    padding:10
  },
  star_icon:
  {
    color:"#a874dc",
    direction:"rtl",
    textAlign:"right"
  },
  star_icon_un:
  {
    color:"#271b33",
    direction:"rtl",
    textAlign:"right"

  },
  star_box_inside:
  {
    flex:0,
    flexDirection:"row",
    width:"100%", 
    margin:5
  },
  date_title:
  {
    width: "100%", color:"#FFF", textAlign:"center",
    ...Platform.select({
      ios: {
        //fontFamily: 'Tajawal-Black',
      },
      android: {
        fontFamily: 'Tajawal-Black'
      }
    }),
  },
  date_img:
  {
    width: 50, 
    height: 50, 
    justifyContent: 'center',
    alignItems: 'center'
  },
  date_img_caption: {
    ...Platform.select({
      ios: {
        //fontFamily: 'Tajawal-Black',
      },
      android: {
        fontFamily: 'Tajawal-Black'
      }
    }),
    textAlign: 'center', // <-- the magic
    color:'white',
    fontSize: 12,
    paddingBottom: 10,
  },
  date_img_title: {
    ...Platform.select({
      ios: {
        //fontFamily: 'Tajawal-Black',
      },
      android: {
        fontFamily: 'Tajawal-Black'
      }
    }),
    textAlign: 'center', // <-- the magic
    alignContent: "center",
    color:'white',
    fontSize: 10,
    paddingBottom: 5,
  },
  date_convert: {
    ...Platform.select({
      ios: {
        //fontFamily: 'Tajawal-Black',
      },
      android: {
        fontFamily: 'Tajawal-Black'
      }
    }),
    width: "100%", color:"#FFF", textAlign:"center", margin:5
  },
  date_button:
  {
    ...Platform.select({
      ios: {
        //fontFamily: 'Tajawal-Black',
      },
      android: {
        fontFamily: 'Tajawal-Black'
      }
    }),
    width: "100%", color:"#FFF", alignContent: 'center', alignItems: 'center'
  },
  date_caption:
  {
    ...Platform.select({
      ios: {
        //fontFamily: 'Tajawal-Black',
      },
      android: {
        fontFamily: 'Tajawal-Black'
      }
    }),
    width: "100%", color:"#FFF"
  },
  date_fld_year:
  {
      ...Platform.select({
        ios: {
          //fontFamily: 'Tajawal-Black',
        },
        android: {
          fontFamily: 'Tajawal-Black'
        }
      }),
      width: "100%", color:"#FFF", alignContent: 'center', alignItems: 'center'
  },
  date_dropdown:
  {
    ...Platform.select({
      ios: {
        //fontFamily: 'Tajawal-Black',
      },
      android: {
        fontFamily: 'Tajawal-Light'
      }
    }),
    width: "100%", color:"#FFF", alignContent: 'center', alignItems: 'center', fontSize:12
  },
  modal: {
    justifyContent: 'center',
    fontSize:18,
    ...Platform.select({
      ios: {
        //fontFamily: 'Tajawal-Black',
      },
      android: {
        fontFamily: 'Tajawal-Light'
      }
    }),
    padding: 10
  },
  modalExit: {
    height: 150
  },
  modal_text:
  {
    justifyContent: 'center',
    textAlign:"center",
    fontSize:18,
    ...Platform.select({
      ios: {
        //fontFamily: 'Tajawal-Black',
      },
      android: {
        fontFamily: 'Tajawal-Light'
      }
    }),
  },
  modal_button:
  {
    flex:0,
    width:"50%"
  },
  modal_button_text:
  {
    textAlign:"center",
    fontSize:18,
    ...Platform.select({
      ios: {
        //fontFamily: 'Tajawal-Black',
      },
      android: {
        fontFamily: 'Tajawal-Light'
      }
    }),
  },
  txt_btn_title: {
    alignItems:"center",
    alignItems:"center",
    textAlign:"center",
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#FFF',
    width: 200,
    margin:0,
    backgroundColor:"#FFF",
    color: "rgba(11, 15, 58, 0.5)",
    ...Platform.select({
      ios: {
        //fontFamily: 'Tajawal-Black',
      },
      android: {
        fontFamily: 'Tajawal-Black'
      }
    }),
    paddingBottom:10,
    //color:'white',
    fontSize: 14,
  },
  gridView:{height: 400}
});


export default styles;