import React from 'react';
import {View, StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Colors from '@styles/Colors';

function DetailListLayout(props) {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Animatable.Image
          animation="pulse"
          easing="ease-out"
          iterationCount="infinite"
          source={require('@assets/images/responsive.png')}>
          {props.image}
        </Animatable.Image>
      </View>

      {/*permite agrupar componentes como si fueran hijos de BluetoothListLayout*/}
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  image: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DetailListLayout;
