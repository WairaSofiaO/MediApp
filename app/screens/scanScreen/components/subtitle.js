import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '@styles/Colors';

function Subtitle(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 15,
    alignItems: 'center',
  },
  title: {
    marginLeft: 10,
    fontFamily: 'Arial',
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.Beige,
  },
  line: {
    borderBottomWidth: 1,
    marginLeft: 6,
    flex: 1,
    marginTop: 3,
    borderColor: '#eceff1',
  },
});

export default Subtitle;
