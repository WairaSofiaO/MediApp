import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Linking,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Colors from '@styles/Colors';

export default class AboutScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.image}>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL('https://www.accenture.com/us-en')
              }>
              <Animatable.Image
                animation="tada" //animation class
                easing="ease-out" //animation type
                iterationCount="infinite"
                source={require('@assets/images/logo.png')}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.text}>
              Growing customer expectations. Market-shaping AI. Self-optimizing
              systems.
            </Text>
            <Text style={styles.text}>
              The post-digital age shows no signs of slowing down, and the need
              for rapid business transformation has never been greater.
            </Text>
            <Text style={styles.text}>
              We meet clients wherever they are on their paths to change—in
              every industry across the globe—and partner with them to create
              lasting value.
            </Text>
          </View>
          <View style={[styles.separator, {borderColor: '#eceff1'}]} />
          <View style={styles.attribute}>
            <Text style={styles.tittle}>Media's attribute</Text>
            <Text style={styles.text}>
              {
                'the icons used have been obtained from the page: \n\n https://www.flaticon.com/'
              }
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.White,
  },
  image: {
    paddingVertical: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontFamily: 'Arial',
    color: Colors.DarkBrown,
    padding: 15,
  },
  separator: {
    flex: 1,
    borderTopWidth: 1,
    marginLeft: 15,
    marginRight: 15,
  },
  attribute: {
    alignItems: 'center',
  },
  tittle: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    color: Colors.DarkBrown,
    padding: 15,
  },
});
