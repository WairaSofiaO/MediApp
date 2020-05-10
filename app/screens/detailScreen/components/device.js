import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Colors from '@styles/Colors';
import Separator from '../components/separator';

function Device(props) {
  return (
    <>
      {/* <View style={styles.wrapper}> */}
      {/* <View style={styles.wrapperLeft}>
          <Image style={styles.iconLeft} source={props.iconLeft} />
        </View> */}
      <View style={styles.wrapperName}>
        {/* <Text style={styles.name}>{props.name}</Text> */}
        {/*permiten mostrar el de la información de la lista que aparece en la
          consola de node.js*/}
        {/* <Text style={styles.name}>"Id"={props.id}</Text>
        <Text style={styles.name}>"Address"={props.address}</Text>
        <Text style={styles.name}>"Class"={props.class}</Text> */}
      </View>
      {/* <Separator /> */}
      {/* <View style={styles.wrapperRight}>
          <Image style={styles.iconRight} source={props.iconRight} />
        </View> */}
      {/*Se puede agregar en Separator la propiedad color, para que el componente se vuelva dinámico*/}
      {/* </View> */}
    </>
  );
}

const styles = StyleSheet.create({
  // wrapper: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   padding: 10,
  //   justifyContent: 'space-between',
  // },
  // wrapperLeft: {
  //   width: 40,
  //   height: 40,
  //   borderRadius: 30,
  //   borderColor: Colors.AzulPastel,
  //   borderWidth: 1,
  //   flexDirection: 'column',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // iconLeft: {
  //   width: 24,
  //   height: 24,
  // },
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
  // wrapperRight: {
  //   width: 40,
  //   height: 40,
  //   borderRadius: 30,
  //   borderColor: Colors.AzulPastel,
  //   borderWidth: 1,
  //   flexDirection: 'column',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // iconRight: {
  //   width: 26,
  //   height: 26,
  // },
});

export default Device;
