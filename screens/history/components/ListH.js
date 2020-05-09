import React, {useEffect, useState} from 'react';
import {StyleSheet, View, FlatList, tasks, TouchableHighlight} from 'react-native';
import CardComponent from './card';
import { useIsFocused } from '@react-navigation/native';

export default function ListH(props){
  const isFocused = useIsFocused();
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () =>{
    //let response = await fetch('http://192.168.1.4/taskapp_api_php/api/listtasks');
    let response = await fetch(';http://192.168.1.4:3000/api/listtask');
    let jsonResponse = await response.json();
    setTasks(jsonResponse.tasks);
  }
  useEffect(()=>{
    fetchTasks();
  },[isFocused]);

  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.createTaskButton} onPress={() => navigation.navigate('Create')}>
        <Text style={styles.buttonTextStyle}>Create Task</Text>
        </TouchableHighlight>
          <FlatList
            data={tasks}
            renderItem={({ item }) => <CardComponent task={item}/>}
            keyExtractor={item => item._id} aca la identificación como esta en la base de datos
            keyExtractor={item => item.name}
          />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {//global container style
    width: '100%',
    height: '80%',
    flexDirection: 'column',
    //backgroundColor: '#EEFBFE',
    alignItems: 'center',
    justifyContent: 'center',
   },
   createTaskButton: {
        backgroundColor: 'purple',
        padding: 20,
        alignItems: 'center',
    },
    buttonTextStyle: {
        color: 'white',
    },
    item: {
        backgroundColor:'#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
});