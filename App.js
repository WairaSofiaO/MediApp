// import React from 'react';
// import AppNavigation from '@navigation/AppNavigation';
// import {NavigationContainer} from '@react-navigation/native';
// function App() {
// }
// export default App;
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/EvilIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import BluetoothList from '@screens/scanScreen/containers/bluetooth-list';
import DetailScreen from '@screens/detailScreen/containers/detail-list';
import RegistryScreen from '@screens/registryScreen/containers/RegistryScreen';
import AboutScreen from '@screens/aboutScreen/AboutScreen';
import Colors from '@styles/Colors';
//

const Tab = createMaterialBottomTabNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        {/* <AppNavigation /> */}
        <Tab.Navigator
          initialRouteName="Scan"
          backgroundColor={Colors.LigthBlue}
          activeColor='rgb(255, 255, 255)'>
          <Tab.Screen
            name="Scan"
            component={BluetoothList}
            options={{
              tabBarLabel: 'Scanner',
              tabBarColor: Colors.LigthBlue,
              // tabBarIcon: () => (
              //   <Icon name="search" color={Colors.LigthBlue} size={25} />
              // ),
            }}
          />
          <Tab.Screen
            name="DetailScreen"
            component={DetailScreen}
            options={{
              tabBarLabel: 'Details',
              tabBarColor: Colors.DarkBlue,
              // tabBarIcon: () => (
                // <Icon name="navicon" color={Colors.LigthBlue} size={25} />
              // ),
            }}
          />
          <Tab.Screen
            name="RegistryScreen"
            component={RegistryScreen}
            options={{
              tabBarLabel: 'Registry',
              tabBarColor: Colors.LigthBlue,
              // tabBarIcon: () => (
              //    <Icon name="pencil" color={Colors.LigthBlue} size={25} />
              // ),
            }}
          />
          <Tab.Screen
            name="AboutScreen"
            component={AboutScreen}
            options={{
              tabBarLabel: 'Contact',
              tabBarColor: Colors.Yellow,
              // tabBarIcon: () => (
              //   <Icon name="user" color={Colors.LigthkBlue} size={25} />
              // ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
