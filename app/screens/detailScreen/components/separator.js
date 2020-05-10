import React from 'react';
import {View, StyleSheet} from 'react-native';
import Colors from '@styles/Colors';

function Separator(props) {
  /*Se agrgan las llaves para que el componente se vuelva dinámico */
  return (
    <View
      style={[
        styles.separator,
        {
          borderColor: props.color ? props.color : '#eceff1',
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  separator: {
    flex: 1,
    borderTopWidth: 1,
    marginLeft: 15,
    marginRight: 15,
  },
});

export default Separator;
