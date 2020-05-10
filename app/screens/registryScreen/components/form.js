import React, {useState, Component} from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';
// import Dialog, { DialogContent } from 'react-native-popup-dialog';
import Colors from '@styles/Colors';


class Form extends Component {
  constructor(){
    super();
    this.state = {
      uuid:'',
      mac:'',
      major:'',
      minor:'',
      message:'',
      emptyMessageUuid:'',
      emptyMessageMac:'',
      emptyMessageMajor:'',
      emptyMessageMinor:'',
      emptyMessageMessage:'',
      buttonEmptyMessage:''
    }
  }

  request(){
    let uuid = this.state.uuid;
    let mac = this.state.mac;
    let major = this.state.major;
    let minor = this.state.minor;
    let message = this.state.message;

    let bodyItem = {
      uuid: uuid,
      mac: mac,
      major: major,
      minor: minor,
      message: message
    };

    fetch('https://az-fn-beacon.azurewebsites.net/api/CreateBeaconFunction?code=XUYF2jPpiH9oK3eo9o4YhjBejFTz8ylZOmV0brsPFhy/M349JUhLJw==', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Cookie': 'ARRAffinity=cccfbcd844aa2ae07f206dd7f46cf78002021bee311f920bdbe397ab5ea6aa9e'
    },
    body: JSON.stringify(bodyItem)
  });
  console.log("Create Enviado");
  console.warn("Se ha registrado su beacon");
  console.log(bodyItem);
  }

  EmptyValidation(){

    if (this.state.uuid=="") {
      this.setState({ emptyMessageUuid:"Rellene este campo para continuar"  });
    } else {
      this.setState({ emptyMessageUuid:""  });
    }

    if (this.state.mac=="") {
      this.setState({ emptyMessageMac:"Rellene este campo para continuar"  });
    } else {
      this.setState({ emptyMessageMac:""  });
    }

    if (this.state.major=="") {
      this.setState({ emptyMessageMajor:"Rellene este campo para continuar"  });
    } else {
      this.setState({ emptyMessageMajor:""  });
    }

    if (this.state.minor=="") {
      this.setState({ emptyMessageMinor:"Rellene este campo para continuar"  });
    } else {
      this.setState({ emptyMessageMinor:""  });
    }

    if (this.state.message=="") {
      this.setState({ emptyMessageMessage:"Rellene este campo para continuar"  })  
    } else {
      this.setState({ emptyMessageMessage:""  });
    }

  }

  ButtonEmptyValidation(){
    if (this.state.uuid=="" || this.state.mac=="" || this.state.major=="" || this.state.minor=="" || this.state.message=="") {
      this.setState({ buttonEmptyMessage: "Rellena todos los campos"  });
    } else {
      this.setState({ buttonEmptyMessage: "Su Beacon ha sido registrado"  });
      this.request();
    }
  }
  
  render(){
    return (
      <View style={styles.column}>
        <Text style={styles.title}>Registry Beacon</Text>
        <ScrollView>

          <TextInput style={styles.inputs}
            placeholder="UUID"
            onChangeText={  (text) => {this.setState({  uuid: text }) } }
            onBlur={  () => this.EmptyValidation()  }>            
          </TextInput>
          <Text style={styles.emptyMessageText}  >{ this.state.emptyMessageUuid  }</Text>

          <TextInput style={styles.inputs}
            placeholder="Mac"
            onChangeText={  (text) => {this.setState({  mac: text }) } }
            onBlur={  () => this.EmptyValidation()  }>            
          </TextInput>
          <Text style={styles.emptyMessageText}  >{ this.state.emptyMessageMac  }</Text>

          <TextInput style={styles.inputs} placeholder="Major"
            keyboardType="numeric"
            maxLength={4}
            onChangeText={  (text) => {this.setState({  major: text }) } }
            onBlur={  () => this.EmptyValidation()  }>
          </TextInput>
          <Text style={styles.emptyMessageText}  >{ this.state.emptyMessageMajor  }</Text>

          <TextInput style={styles.inputs} placeholder="Minor"
            keyboardType="numeric"
            maxLength={2}
            onChangeText={  (text) => {this.setState({  minor: text }) } }
            onBlur={  () => this.EmptyValidation()  }>
          </TextInput>
          <Text style={styles.emptyMessageText}  >{ this.state.emptyMessageMinor  }</Text>

          <TextInput style={styles.inputs} placeholder="Mensaje DB"
            maxLength={50}
            onChangeText={
              (text) => {this.setState({  message: text }) }
            }
            onBlur={  () => this.EmptyValidation()  }
            // isFocused={() => this.EmptyValidation()}
            >
          </TextInput>
          <Text style={styles.emptyMessageText}  >{ this.state.emptyMessageMessage  }</Text>

          <Button title='Send'
            style={styles.send}
            onPress={ () => this.ButtonEmptyValidation()}
          ></Button>
          <Text style={styles.emptyMessageText}  >{ this.state.buttonEmptyMessage  }</Text>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    flexDirection : 'column'
  },
  text:{
    color: '#fff',
    padding:25
  },
  
  column:{
    flex: 1,
    backgroundColor: Colors.White,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  icon:{
    width:'200px'
  },
  title:{
    color: Colors.Beige,
    fontWeight: 'bold',
    fontSize:30,
    paddingBottom:15,
    paddingTop:20
  },
  inputs:{
    borderColor:Colors.Beige,
    backgroundColor: Colors.Grey,
    borderWidth:1,
    borderRadius: 25,
    padding:10,
    width:300,
  },
  send:{
    backgroundColor:Colors.Beige
  },
  emptyMessageText:{
    textAlign: "left",
    color:  "#b71c1c",
    marginBottom:15,
  },
});

export default Form;