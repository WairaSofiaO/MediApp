import React from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';
import Colors from '@styles/Colors';

function Toggle(props) {
  return (
    <View sytle={styles.container}>
      <Text sytle={styles.text}>{props.value ? 'ON' : 'OFF'}</Text>
      <Switch
        sytle={styles.switch}
        value={props.value}
        onValueChange={props.onValueChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    color: Colors.Cafe,
  },
  switch: {
    width: 30,
  },
});

export default Toggle;
