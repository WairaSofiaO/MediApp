import React, {useState} from 'react';
import { StyleSheet, View} from 'react-native';
import Icon from './components/Icon.js';
import Title from './components/Title.js';
import Form from './components/Form.js'

export default class DateScreen extends React.Component{
 render (){
    return (
    <View style={styles.container}>
      <Icon/>
      <Title />
      <Form />
    </View>
  );
 }
 
 }

const styles = StyleSheet.create({
    container: {//global container style
      width: '100%',
      height: '100%',
      flexDirection: 'column',
      backgroundColor: '#EEFBFE',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

