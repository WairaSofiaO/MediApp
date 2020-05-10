import React from 'react';
import {

  Text,
    FlatList
} from 'react-native';
import BluetoothSerial from 'react-native-bluetooth-serial-next';

function BluetoothActivation() {
    async function init(){
        const requestEnable = await BluetoothSerial.requestEnable();
        await BluetoothSerial.enable()
        const listaParej = await BluetoothSerial.list();  
        const listaNoParej = await BluetoothSerial.listUnpaired();
        console.log(listaParej);
        console.log(listaNoParej);
           
    }
    init();

    const list =[
        {
            name: 'beacon1: UUID 989EFB9D-8FFB-4F49-9355-9CF7F7459296',
            mac: '[{"address": "FC:77:74:54:C9:9A", "class": 268, "id": "FC:77:74:54:C9:9A", "name": null}, {"address": "F8:F0:05:C0:74:09", "class": 7936, "id": "F8:F0:05:C0:74:09", "name": null}'
        }
    ];

    return(
    <FlatList data={list} 
        renderItem={
            ({item}) => <Text>{item.name} {item.mac} </Text>
        } 
    />
    );
    

};
export default BluetoothActivation;