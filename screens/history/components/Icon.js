import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
//import * as Animatable from 'react-native-animatable';

export default class Icon extends React.Component {
  render(){
    return (
        <View style={styles.container}>
          {/* <Animatable.Image
            animation="rotate"
            easing="ease-out"
            iterationCount="infinite"
            source={require('../../../assets/icons/calendar.png')}>
          </Animatable.Image> */}
          <Image style={styles.icon} source={require('../../../assets/icons/test.png')} />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
    paddingTop: 20,
  },
  icon:{
    width: 50,
    height: 50,
  },
});