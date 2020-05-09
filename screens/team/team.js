import React from 'react';
import { StyleSheet, View} from 'react-native';
import Icon from './components/Icon.js';
import Title from './components/Title.js';
import Photo from './components/Photos.js';
import Media from './components/Media.js';
import Separator from './components/Separator.js';

export default class TeamScreen extends React.Component{
  render (){
    return (
      <View style={styles.container}>
        <Icon />
        <Title/>
        <Photo />
        <Separator />
        <Media />
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