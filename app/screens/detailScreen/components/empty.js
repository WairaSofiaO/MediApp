import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Colors from '@styles/Colors';

function Empty(props) {
  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={require('@assets/images/box.png')} />
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontFamily: 'Arial',
    color: Colors.Beige,
  },
  icon: {
    marginVertical: 20,
    height: 150,
    width: 150,
  },
});

export default Empty;
