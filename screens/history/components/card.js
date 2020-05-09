import React from 'react';
import {StyleSheet, View, } from 'react-native';


export default function Card(props){

    const {date,name, _id} = props.task;
    return(
        <View style={styles.container}>
            <Text>{name}</Text>
            <Text>{date}</Text>
            <Text>{_id}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {//global container style
    flex: 1,
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    padding: 20,
    marginTop: 10,
    
    // width: '100%',
    // height: '80%',
    // flexDirection: 'column',
    // //backgroundColor: '#EEFBFE',
    // alignItems: 'center',
    // justifyContent: 'center',
   },
})