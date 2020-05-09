import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default class Title extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Medical Date</Text>
            </View>
        );
  }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '6%',
        alignItems: 'center',
        justifyContent: 'center',
       // backgroundColor: 'green',
    },
    title:{
        fontFamily: 'Arial',
        fontSize: 16,
        fontWeight: 'bold',
    },
});