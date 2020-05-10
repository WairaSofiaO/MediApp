import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Colors from '@styles/Colors';

export default class DetailScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to Detail Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
});
