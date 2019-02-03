import * as React from 'react';
import{Platform,I18nManager} from 'react-native';
import {Scene, Router, Drawer, ActionConst, Actions, Stack} from 'react-native-router-flux';

import Splash from './src/screens/Splash';
import HomeScreen from './src/screens/Home';
import SettingsScreen from './src/screens/Settings';
import DateScreen from './src/screens/Date';
import ReminderScreen from './src/screens/Reminder';
import SignScreen from './src/screens/Sign';
import ContactScreen from './src/screens/Contact';
import MonthScreen from './src/screens/Month';
//import MonthYearScreen from './src/screens/Month-year';
import GreeceScreen from './src/screens/Greece';
import YearScreen from './src/screens/Year';
import StarScreen from './src/screens/Star';
import WeddingScreen from './src/screens/Wedding';
//import ChanceScreen from './src/screens/Chance';
import NavbarScreen from './src/component/Navigation';
import NavbarScreenUser from './src/component/NavigationUser';
import MenuRightScreen from './src/component/MenuRight';

// import DrawerLayout from './src/screens/DrawerLayout';
I18nManager.forceRTL(true);


// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

class App extends React.Component {

  render()
  {
    return(  
  <Router>
    <Scene  key="root" hideNavBar wrapRouter>
      <Scene key="group0"  type={ActionConst.REPLACE}>
        <Drawer hideNavBar="false" >
          <Scene key='Splash' component={Splash} duration={10} type={ActionConst.RESET} hideNavBar={1} initial />
        </Drawer>
      </Scene>
      <Scene key="group1"  drawerLockMode='locked-closed' gesturesEnabled={false}  type={ActionConst.REPLACE}  panHandlers={null} >
        <Drawer hideNavBar="true" key="drawerMenu" contentComponent={MenuRightScreen} drawerWidth={250} drawerPosition="right">
          <Scene key="rootInside" wrapRouter direction="leftToRight" type={ActionConst.REPLACE}  panHandlers={null} >
            <Scene key="home" component={HomeScreen} navBar={NavbarScreen} path="default" title="أبراج مكتوب" wrapRouter drawerLockMode='locked-closed' gesturesEnabled={false}  />
            <Scene key="star" navTransparent={0} component={StarScreen} navBar={NavbarScreen} title="مزيج" wrapRouter/>
            <Scene key="wedding" navTransparent={0} component={WeddingScreen} navBar={NavbarScreen} title="زواج" wrapRouter/>
            <Scene key="year" navTransparent={0} component={YearScreen} navBar={NavbarScreen} title="الصينية" wrapRouter/>
            <Scene key="month" navTransparent={0} component={MonthScreen} navBar={NavbarScreen} title="الغربية" wrapRouter/>
            <Scene key="greece" navTransparent={0} component={GreeceScreen} navBar={NavbarScreen} title="اليونانية" wrapRouter/>
            <Scene key="contact" navTransparent={0} component={ContactScreen} navBar={NavbarScreenUser} title="contact" wrapRouter/>
            <Scene key="settings" navTransparent={0} component={SettingsScreen} navBar={NavbarScreen} title="أبراج مكتوب" wrapRouter/>
            <Scene key="sign" navTransparent={0} component={SignScreen} navBar={NavbarScreenUser} title="أبراج مكتوب" wrapRouter/>
            <Scene key="date" navTransparent={0} component={DateScreen} navBar={NavbarScreenUser} title="اعرف برجك" wrapRouter/>
            <Scene key="reminder" navTransparent={0} component={ReminderScreen} navBar={NavbarScreenUser} title="تذكير" wrapRouter/>
          </Scene>
        </Drawer>
      </Scene>
    </Scene>
  </Router>
      )
    }
  };

export default App;