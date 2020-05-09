import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import DateScreen from './././screens/date/date.js';
import HistoryScreen from './screens/history/history.js';
import TeamScreen from './screens/team/team.js';
import Colors from './styles/Colors.js';

const Tab = createMaterialBottomTabNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="DateScreen"
          activeColor="#e91e63"
          backgroundColor={Colors.DarkBlue}>
          <Tab.Screen
            name="DateScreen"
            component={DateScreen}
            options={{
              tabBarLabel: 'Date',
              tabBarColor: Colors.DarkBlue,
              tabBarIcon: () => (
                <Icon name="calendar-edit" color={Colors.DarkBlue} size={25} />
              ),
            }}
          />
          <Tab.Screen
            name="HistoryScreen"
            component={ HistoryScreen}
            options={{
              tabBarLabel: 'History',
              tabBarColor: Colors.DarkBlue,
              tabBarIcon: () => (
                <Icon name="view-list" color={Colors.DarkBlue} size={25} />
              ),
            }}
          />
          {/* <Tab.Screen
            name="DetailList"
            component={DetailList}
            options={{
              tabBarLabel: 'Detail',
              //tabBarColor: Colors.DarkBlue,
              tabBarIcon: ({ color }) => (
                <Icon
                  name="format-list-bulleted"
                  color={color}
                  size={25}
                />
              ),
            }}
          /> */}
          <Tab.Screen
            name="TeamScreen"
            component={TeamScreen}
            options={{
              tabBarLabel: 'Team',
              tabBarColor: Colors.DarkBlue,
              tabBarIcon: () => (
                <Icon name="account-group" color={Colors.DarkBlue} size={25} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
