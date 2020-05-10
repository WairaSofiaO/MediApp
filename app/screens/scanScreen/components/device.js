import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '@styles/Colors';
import Separator from '../components/separator';

function Device(props) {
  return (
    <>
      <TouchableOpacity style={styles.wrapper} onPress={props.onPress}>
        <View style={styles.wrapperLeft}>
          <Image style={styles.iconLeft} source={props.iconLeft} />
        </View>
        <View style={styles.wrapperName}>
          <Text style={styles.name}>Mac: {props.mac}</Text>
          <Text style={styles.name}>Major: {props.major} | Minor: {props.minor}</Text>
          <Text style={styles.name}>Mensaje DB: {props.message}</Text>
          <Text style={styles.name}>{props.taskName}</Text>
        </View>
        <View style={styles.wrapperRight}>
          <Image style={styles.iconRight} source={props.iconRight} />
        </View>
      </TouchableOpacity>
      {/*Se puede agregar en Separator la propiedad color, para que el componente se vuelva dinámico*/}
      <Separator />
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
  },
  wrapperLeft: {
    width: 40,
    height: 40,
    borderRadius: 30,
    borderColor: Colors.AzulPastel,
    borderWidth: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconLeft: {
    width: 24,
    height: 24,
  },
  wrapperName: {
    flex: 1,
    justifyContent: 'flex-start',
    marginLeft: 8,
    marginRight: 8,
  },
  name: {
    fontFamily: 'Arial',
    fontSize: 14,
  },
  wrapperRight: {
    width: 40,
    height: 40,
    borderRadius: 30,
    borderColor: Colors.AzulPastel,
    borderWidth: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconRight: {
    width: 26,
    height: 26,
  },
});

export default Device;
