import React, {useState} from 'react';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import apiUrl from '../../components/api/ApiUrl';
import Button from '../../components/button/Button';
import Flat from '../../components/flatList/Flat';
import FuncionarioSchema from '../../schema/FuncionarioSchema';
import NetInfo from '@react-native-community/netinfo';
import {View} from 'native-base';
import {SafeAreaView} from 'react-native';
const Realm = require('realm');

const GetFuncionario = ({}) => {
  const [funcionarios, setFuncionarios] = useState({});
  const [cpfDigitado, setCpf] = useState('');

  const mostrarBusca = () => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      Realm.open({schema: [FuncionarioSchema]}).then((realm) => {
        if (state.isConnected) {
          apiUrl.get('funcionario').then((response) => {
            setFuncionarios(
              response.data.filter(
                (funcionario) => funcionario.cpf == cpfDigitado,
              ),
            );
          });
        } else {
          const funcionarioDB = realm.objects('Funcionario');
          setFuncionarios(
            funcionarioDB.filter(
              (funcionario) => funcionario.cpf == cpfDigitado,
            ),
          );
        }
      });
    });
  };

  const mostrartodosFuncionarios = () => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      Realm.open({schema: [FuncionarioSchema]}).then((realm) => {
        if (state.isConnected) {
          apiUrl.get('funcionario').then((response) => {
            setFuncionarios(response.data);
            realm.write(() => {
              realm.delete(realm.objects('Funcionario'));
            });
            response.data.map((funcionario) => {
              realm.write(() => {
                const myFuncionario = realm.create('Funcionario', {
                  nome: funcionario.nome,
                  cpf: funcionario.cpf,
                  id: funcionario.id,
                });
              });
            });
          });
        } else {
          const funcionarioDB = realm.objects('Funcionario');
          setFuncionarios(funcionarioDB);
        }
      });
    });
  };

  const renderFuncionario = ({item}) => {
    return <Flat dados={item} />;
  };

  if (!funcionarios) {
    return;
  }

  return (
    <>
      <SafeAreaView style={{backgroundColor: '#001766'}}>
        <View style={{marginTop: 30, alignItems: 'center'}}>
          <TextInput
            style={{
              height: 40,
              width: 350,
              borderColor: 'gray',
              borderWidth: 1,
              backgroundColor: 'white',
              borderRadius: 10,
            }}
            onChangeText={setCpf}
            mode="outlined"
            label="Cpf"
            placeholderTextColor="black"
            placeholder="Digite o Cpf do Funcionario"
          />
        </View>
        <View style={{marginTop: 10, marginBottom: 30, alignItems: 'center'}}>
          <Button onPress={mostrarBusca} title={'Mostrar Funcionario'} />
        </View>
        <View style={{maxHeight: 450}}>
          <FlatList
            data={funcionarios}
            renderItem={renderFuncionario}
            keyExtractor={(funcionario) => funcionario.id.toString()}
          />
        </View>
        <View style={{marginBottom: 600}}>
          <Button
            onPress={mostrartodosFuncionarios}
            title={'Mostrar todos Funcionarios'}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default GetFuncionario;
