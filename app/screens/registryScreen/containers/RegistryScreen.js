import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Colors from '@styles/Colors';
import Form from '../components/form'

export default class RegistryScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Form />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
