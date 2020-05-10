import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import BluetoothSerial, {disable} from 'react-native-bluetooth-serial-next';
import Layout from '../components/detail-list-layout';
import Subtitle from '../components/subtitle';
import Device from '../components/device';
// import Toggle from '../components/toggle';
import Empty from '../components/empty';

{
  /*Va a manejar toda la funcionalidad de la lista bluetooth.
  Se le adiciona props debido a que va a ser un componente funcional*/
}
function DetailList(props) {
  {
    /*La constante se crea como un hook , la cual tiene dos valores:el primero
    es el estado, y el segundo es la función para actualizar el estado*/
  }
  const [lista, setLista] = useState([]); //se define el hook
  const [bolEnable, setBolEnable] = useState(false);

  const renderItem = ({item}) => {
    {
      /*los tres puntos (...) se conocen como el operador propagador y
      sirven para pasar las pripiedades del item, en este caso: nombre y key */
    }
    return (
      <Device
        {...item}
        //   iconLeft={require('@assets/images/device.png')}
        //   iconRight={require('@assets/images/settings.png')}
      />
    );
  };

  useEffect(() => {
    async function init() {
      //la función requestEnable pregunta si se quiere activar o no el bluetooth
      const enable = await BluetoothSerial.requestEnable();
      //El método list trae la lista de objetos detectados por el bluetooth
      const lista = await BluetoothSerial.list();
      setLista(lista);
      setBolEnable(enable);
      console.log(lista);
    }

    init();

    return () => {
      async function remove() {
        await BluetoothSerial.stopScanning();
        console.log('terminó scanner');
      }

      remove();
    };
  }, []);

  const enableBluetooth = async () => {
    try {
      // await BluetoothSerial.requestEnable();
      const lista = await BluetoothSerial.list(); //permite mostrar la lista nuevamente cuando presionas activar/desactivar bluetooth
      await BluetoothSerial.stopScanning();
      setBolEnable(true);
      setLista(lista);
    } catch (error) {
      console.log(error);
    }
  };

  const disableBluetooth = async () => {
    try {
      await BluetoothSerial.disable();
      await BluetoothSerial.stopScanning();
      setBolEnable(false);
      setLista([]);
    } catch (error) {
      console.log(error);
    }
  };

  //Método que ejeucta función según un valor booleano
  // const Bluetooth = value => {
  //   if (value) {
  //     return enableBluetooth();
  //   }
  //   disableBluetooth();
  // };

  // //Componente que devuelve el texto cuando el bluetooth esta apagado
  const renderEmpty = () => <Empty text="Devices Not Found" />;

  return (
    <Layout>
      {/*elementos que actúan como hijos del componente Layout*/}
      {/* <Toggle value={bolEnable} onValueChange={Bluetooth} /> */}
      <Subtitle title="Detail List" />
      <FlatList
        data={lista}
        ListEmptyComponent={renderEmpty}
        renderItem={renderItem}
      />
    </Layout>
  );
}

export default DetailList;
