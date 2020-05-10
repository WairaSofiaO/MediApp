import React, {Component} from 'react';
import {View, StatusBar} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {imageBackgroundStyle} from '@styles/General';
import Colors from '@styles/Colors';

export default class SplashScreen extends Component {
  goToScreen(routeName) {
    {
      /*permite pasar de una pantalla a otra*/
    }
    this.props.navigation.navigate(routeName);
  }

  componentDidMount() {
    setTimeout(
      () => {
        this.goToScreen('Scan');
      },
      2000, //time in miliseg => 2000 = 2seg.
      this,
    );
  }

  render() {
    return (
      <View style={imageBackgroundStyle.image}>
        <StatusBar translucent backgroundColor={Colors.White} />
        <Animatable.Image
          animation="pulse" //animation class
          easing="ease-out" //animation type
          iterationCount="infinite"
          source={require('@assets/images/logo.png')}
        />
      </View>
    );
  }
}
