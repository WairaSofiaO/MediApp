import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';

export default function Form(props){

     //const to refresh inputs
    const [Name, setName] = useState("");
    const [Lastname, setLastname] = useState("");
    const [ident, setident] = useState("");
    const [Birthdate, setBirthdate] = useState("");
    const [City, setCity] = useState("");
    const [phone, setphone] = useState("");
    const [neighborhood, setneighborhood] = useState("");
    const [DateAppointment, setDate] = useState("");
    const [hours, sethours] = useState("");
    const [doctor, setdoctor] = useState("");

   //method to create date
    const create = async () => {
        try {
            const response = await fetch('http://192.168.1.4:3000/api/addtask', { //la función de crear 
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({   
                    // los parametros que esperan la api para agregar 
                    Name: Name,
                    Lastname: Lastname,
                    ident: ident,
                    Birthdate: Birthdate,
                    City: City,
                    phone: phone,
                    neighborhood: neighborhood,
                    date: DateAppointment,
                    hours: hours,
                    doctor: doctor
                }),
            });
            const json = await response.json();
            Alert.alert("Task created successfuly");
            //navigation.navigate('Tasks');
        } catch (error) {

        }
    }
        return (
            <View style={styles.container}>
                <View style={styles.form}>
                    <TextInput style={styles.textInput} placeholder="Name" keyboardType="default" onChangeText={text => setName(text)} />
                    <TextInput style={styles.textInput} placeholder="Lastname" keyboardType="default" onChangeText={text => setLastname(text)} />
                    <TextInput style={styles.textInput} placeholder="Identification" keyboardType="default" onChangeText={text => setident(text)} />
                    <TextInput style={styles.textInput} placeholder="Birthdate" keyboardType="default" onChangeText={text => setBirthdate(text)} />
                    <TextInput style={styles.textInput} placeholder="phone" keyboardType="phone-pad" onChangeText={text => setphone(text)} />
                    <TextInput style={styles.textInput} placeholder="City" keyboardType="default" onChangeText={text => setCity(text)} />
                    <TextInput style={styles.textInput} placeholder="neighborhood" keyboardType="default" onChangeText={text => setneighborhood(text)} />
                    <TextInput style={styles.textInput} placeholder="Date Appointment" keyboardType="default" onChangeText={text => setDate(text)} />
                    <TextInput style={styles.textInput} placeholder="Hours" keyboardType="default" onChangeText={text => sethours(text)} />
                    <TextInput style={styles.textInput} placeholder="Doctor" keyboardType="default" onChangeText={text => setdoctor(text)} />
                    <TouchableHighlight style={styles.createTaskButton} onPress={create}>
                        <Text style={styles.textStyleButton}>Create Appointment  </Text>
                    </TouchableHighlight>            
                </View> 
            </View>
        );
}
    

//styles
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '86%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 50,
    //backgroundColor: 'red',
  },
  form: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
  textInput: {
        padding: 20,
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 1,
        marginTop: 10,
        width: 250,//Dimensions.get('screen').width * 0.9
        height: 30,
    },
    createTaskButton: {
        marginBottom: 40,
        marginTop: 10,
        padding: 15,
        backgroundColor: 'purple',
        borderRadius: 5,
        width: 250,//Dimensions.get('screen').width * 0.9,
        alignItems: 'center'
    },
    textStyleButton: {
        color: 'white',
        fontSize: 16
    },
});