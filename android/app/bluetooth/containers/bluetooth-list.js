import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList
} from 'react-native';
import BluetoothSerial from 'react-native-bluetooth-serial-next';

function BluetoothList(props) {
    
    async function init(){
        const enable = await BluetoothSerial.requestEnable();

        init();
        
        }


const lista = [
        {
            name:'Cristian',
            keys: '1'
        }
    ];

    return(
        <View>
            <FlatList data={lista}/>
            <Text>MI texto wey</Text>
        </View>
    );

};
export default BluetoothList;