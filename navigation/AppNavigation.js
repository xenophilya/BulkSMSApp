//AppNavigation.js
import React from 'react';  
import {StyleSheet, Text, View,Button} from 'react-native';  
import {createStackNavigator, } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import {Icon} from 'react-native-elements';
import History from '../screens/History';
import VoiceSMS from '../screens/VoiceSMS';
import TextSMS from '../screens/TextSMS';
import Profile from '../screens/Profile';
import Support from '../screens/Support';
import AddressBook from '../screens/AddressBook';

const HistoryNavigation = createStackNavigator(
  {
    History: { screen: History}
  },
  {
headerMode: 'none'
}
  
  
)

const TextSMSNavigation = createStackNavigator(
  {
    TextSMS: { screen: TextSMS ,
      navigationOptions: {
        headerTitle: 'TextSMS',
      },
    }
  },
    {
  headerMode: 'none'
}
  
)
const VoiceSMSNavigation = createStackNavigator(
  {
    VoiceSMS: { screen: VoiceSMS}
  },
  {
headerMode: 'none'
}
)

const ProfileNavigation = createStackNavigator({
  SettingsList: {
    screen: Profile,
    navigationOptions: {
      headerTitle: 'Profile',
    },
  },
  
});

const AddressBookNavigation = createStackNavigator({
  
  SettingsList: {
    screen: AddressBook
  }
  
},
  {
    headerMode: 'none'
    }
  
);
const BuyCreditNavigation = createStackNavigator({
  SettingsList: {
    screen: Profile,
    navigationOptions: {
      headerTitle: 'Buy Unit',
    },
  },
  
});
const ReferralNavigation = createStackNavigator({
  SettingsList: {
    screen: Profile,
    navigationOptions: {
      headerTitle: 'Referral',
    },
  },
  
});
const SettingsNavigation = createStackNavigator({
  SettingsList: {
    screen: Profile,
    navigationOptions: {
      headerTitle: 'Settings',
    },
  },
  
});


const Tabs =  createMaterialBottomTabNavigator(
  {
 
    TextSMSNavigation: {  
      screen: TextSMSNavigation,  
      navigationOptions:{  
          tabBarLabel:'TextSMS',  
          tabBarIcon: ({ tintColor }) => (  
              <View>  
                  <Icon style={[{color: tintColor}]} size={25} name='message'/>  
              </View>),  
      },
       
  }, 

  VoiceSMSNavigation: {  
    screen: VoiceSMSNavigation,  
    navigationOptions:{  
        tabBarLabel:'SMS Template',  
        tabBarIcon: ({ tintColor }) => (  
            <View>  
                <Icon style={[{color: tintColor}]} size={25} name='archive'/>  
            </View>),  
    },
     
}, 
  

HistoryNavigation: {  
      screen: HistoryNavigation,  
      navigationOptions:{  
          tabBarLabel:'History',  
          tabBarIcon: ({ tintColor }) => (  
              <View>  
                  <Icon style={[{color: tintColor}]} size={25} name='folder'/>  
              </View>),  
      },
       
  }, 
},
  {
    initialRouteName: 'TextSMSNavigation',
    activeColor: '#694fad',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#fff' },
  }
);

const MainDrawer = createDrawerNavigator({
  Home: { screen: Tabs },
  Profile: { screen: ProfileNavigation },
  AddressBook:{screen: AddressBookNavigation},
  BuyCredit:{screen: BuyCreditNavigation},
  Referral:{screen: ReferralNavigation},
  Settings:{screen: SettingsNavigation},
  Support:{screen: Support},
  
}
,

);

export default MainDrawer