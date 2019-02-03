import {StyleSheet, Platform} from 'react-native';

const styles_home = StyleSheet.create({
  super_gird_view:{
    margin:10
  },
  grid_view: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center' ,
    width: "100%"
  },
  grid_view_image:{
    width: 60, 
    height: 60, 
    justifyContent: 'center',
    alignItems: 'center'
  },
  grid_view_title: {
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
    paddingBottom: 0
  }
});


export default styles_home;
