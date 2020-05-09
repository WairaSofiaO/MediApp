import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default class Media extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Images Attributes</Text>
                <Text style={styles.text}>{'\n\n'}The icons used have been obtained from</Text>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.flaticon.com/')}>
                    <Text style={styles.link}>https://www.flaticon.com</Text>
                </TouchableOpacity>
            </View>
        );
    }
}





const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: 'green',
        paddingTop: 16,
        paddingBottom:40,
    },
    title:{
        fontFamily: 'Arial',
        fontSize: 16,
        fontWeight: 'bold',
    },
    text:{
        fontFamily: 'Arial',
        fontSize: 16,
    },
    link:{
        fontFamily: 'fantasy',
        fontSize: 16,
        color: 'blue',
        paddingBottom: 40,
    },
});