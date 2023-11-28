import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Home from './Home';
import Search from './Search';
import CompleteProfile from './CompleteProfile';
import Settings from './Settings';
import Theme from '../../utils/Theme';
import AddRequest from './AddRequest';
import LiveSteaming from './LiveSteaming';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createMaterialBottomTabNavigator();

const Dashboard = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor={Theme.primary}
    barStyle={{
      backgroundColor: 'white',
      overflow: 'hidden',
      position: 'absolute',
      borderTopLeftRadius: 23,
      borderTopRightRadius: 23,
      elevation: 10,
    }}>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: Theme.lightWhite,
        tabBarIcon: ({color}) => (
          <Icon name="ios-home" color={color} size={25} />
        ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={Search}
      options={{
        tabBarLabel: 'Search',
        tabBarColor: Theme.lightWhite,
        tabBarIcon: ({color}) => (
          <Icon name="ios-search" color={color} size={26} />
        ),
      }}
    />

    <Tab.Screen
      name="AddRequest"
      component={AddRequest}
      options={{
        tabBarLabel: 'Add Request',
        tabBarColor: Theme.lightWhite,
        tabBarIcon: ({color}) => (
          <MaterialIcons name="post-add" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="LiveSteaming"
      component={LiveSteaming}
      options={{
        tabBarLabel: 'Live',
        tabBarColor: Theme.lightWhite,
        tabBarIcon: ({color}) => (
          <Material name="radio-tower" color={color} size={26} />
        ),
      }}
    />

    <Tab.Screen
      name="Settings"
      component={Settings}
      options={{
        tabBarLabel: 'Settings',
        tabBarColor: Theme.lightWhite,
        tabBarIcon: ({color}) => (
          <Icon name="settings" color={color} size={25} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default Dashboard;
