import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default class Photos extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.box}>
                    <View style={styles.inner}>
                        <Image style={styles.image} source={require('../../../assets/images/Sofia.png')} />
                        <Text style={styles.name}>Waira Sofia Ocampo</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.inner}>
                        <Image style={styles.image} source={require('../../../assets/images/Alejandra.png')} />
                        <Text style={styles.name}>Alejandra Bolívar</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.inner}>
                    <Image style={styles.image} source={require('../../../assets/images/Yeison.png')} />
                        <Text style={styles.name}>Yeison Ariel Zaraza</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.inner}>
                        <Image style={styles.image} source={require('../../../assets/images/Santiago.png')} />
                        <Text style={styles.name}>Santiago Tavera G.</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '60%',
        padding: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: 'red',
    },
        box:{
        width: '50%',
        height: '50%',
        padding: 10,
    },
    inner: {
        flex: 1,
       // backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 160,
        height: 160,
        borderRadius: 100,
        borderColor: 'tomato',
        borderWidth: 5,
        borderStyle: 'dotted',
    },
    name: {
        fontFamily: 'Arial',
        fontSize: 16,  
    },
});