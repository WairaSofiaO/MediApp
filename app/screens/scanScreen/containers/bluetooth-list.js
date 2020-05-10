/* eslint-disable no-lone-blocks */
import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import BluetoothSerial, {disable} from 'react-native-bluetooth-serial-next';
import Layout from '../components/bluetooth-list-layout';
import Subtitle from '../components/subtitle';
import Device from '../components/device';
import Toggle from '../components/toggle';
import Empty from '../components/empty';
// import EstimotePlugin from '../../../native-modules/EstimotePlugin'

{
  /*Va a manejar toda la funcionalidad de la lista bluetooth.
  Se le adiciona props debido a que va a ser un componente funcional*/
}

function postazfnbeacons(bodyJson) {
  return  fetch(
    'https://az-fn-beacon.azurewebsites.net/api/QueryBeaconFunction?code=Fb3JRSOM6Hc1oSWvOej3mtv2ZgqgNKQaPxEVXIOTyZbM8m3Vvc7cug==', 
    { 
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyJson),
    }
  )
   .then((response)  => response.json() ) //Que realizo con la respuesta? asigno la respuesta al objeto.json() response
  // .then((responseJson) => { console.log(responseJson); })
  .catch((error)=> {  console.error(error); 
  });
}

function BluetoothList(props) {
  {
    /*La constante se crea como un hook , la cual tiene dos valores:el primero
    es el estado, y el segundo es la función para actualizar el estado*/
  }
  const [lista, setLista] = useState([]); //se define el hook
  const [bolEnable, setBolEnable] = useState(false);
  // const listaJava = EstimotePlugin.returnBeaconList();
  // console.log(listaJava);

  //Imágenes que acompañan los nombres de los dispositivos
  const renderItem = ({item}) => {
    {
      /*los tres puntos (...) se conocen como el operador propagador y
      sirven para pasar las propiedades del item, en este caso: nombre y key */
    }
    return (
      <Device
        {...item}
        iconLeft={require('@assets/images/device.png')}
        iconRight={require('@assets/images/settings.png')}
      />
    );
  };

  async function init() {
    while (!bolEnable) {
      console.log("Inicio escaneo");
      //El método list trae la lista de objetos detectados por le bluetooth
      const lista = await BluetoothSerial.listUnpaired();   
      
      let bodyRequest = [];
      lista.forEach(element => {
          let bodyItem = {
            mac: element.address,
            major: 999,
            minor: 11
          };
          bodyRequest.push(bodyItem); 
      });

      console.log("Lista ");
      console.log(lista);
      console.log("body request ");
      console.log(bodyRequest);
      console.log("Send Post");

      let response = await postazfnbeacons(bodyRequest);
      console.log("response");
      console.log(response);
      console.log("End Post");
      
      setLista(response);
    }
  }

  const enableBluetooth = async () => {
    try {
      if (!BluetoothSerial.isEnabled()) {
        await BluetoothSerial.requestEnable();
      }
      await BluetoothSerial.enable();
    
    } catch (error) {
      console.log(error);
    }
  };

  const disableBluetooth = async () => {
    try {
      // await BluetoothSerial.disable();
      await BluetoothSerial.stopScanning();
      setLista([]);      
      console.log("Stop scanning");
    } catch (error) {
      console.log(error);
    }
  };

  //Método que ejeucta función según un valor booleano
  const toggleBluetooth = value => {
    if (value) {
      setBolEnable(true);
      enableBluetooth();
      init();
    } else{
      setBolEnable(false);
      disableBluetooth();
    }
    console.log("Valor del bolEnable: ");
    console.log(bolEnable);
    return bolEnable;
  };

  //Componente que devuelve el texto cuando el bluetooth esta apagado
  const renderEmpty = () => <Empty text="Devices Not Found" />;

  return (
    <Layout>
      {/*elementos que actúan como hijos del componente Layout*/}
      <Toggle value={bolEnable} onValueChange={toggleBluetooth} />
      <Subtitle title="Device List" />
      <FlatList
        data={lista}
        ListEmptyComponent={renderEmpty}
        renderItem={renderItem}
      />
    </Layout>
  );
}

export default BluetoothList;
