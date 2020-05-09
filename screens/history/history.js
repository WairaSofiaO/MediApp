import React, {useState} from 'react';
import { StyleSheet, View} from 'react-native';
import Icon from './components/Icon.js';
import Title from './components/Title.js';
import ListH from './components/ListH.js';

export default class HistoryScreen extends React.Component{
  render (){
    return (
    <View style={styles.container}>
      <Icon/>
      <Title />
      <ListH />
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