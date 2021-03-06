import React from 'react'
import { createDrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Settings from './Settings';  //Tab Nav
import Profile from './Profile'; //Stack Nav

export default createDrawerNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      drawerLabel: 'Settings',
      drawerIcon: ({ tintColor }) => <Icon name="cog" size={17} />,
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      drawerLabel: 'Profile',
      drawerIcon: ({ tintColor }) => <Icon name="user-circle" size={17} />,
    }
  }
});