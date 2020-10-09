import React, {useEffect, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import apiUrl from '../../components/api/ApiUrl';
import Button from '../../components/button/Button';
import Flat from '../../components/flatList/Flat';
import NetInfo from '@react-native-community/netinfo';

const PutFuncionario = () => {
  const [funcionarios, setFuncionarios] = useState([]);
  const [cpf, setCpf] = useState('');
  const [nome, setNome] = useState('');
  const func = {
    nome: '',
    cpf: '',
    id: 0,
  };

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      if (state.isConnected) {
      } else {
        alert('Desculpe essa pagina só funciona com internet!');
      }
    });
  });
  const mostrarBusca = () => {
    apiUrl.get('funcionario').then((response) => {
      setFuncionarios(
        response.data.filter((funcionario) => funcionario.cpf == cpf),
      );
      console.log(
        'Primeiro console',
        response.data.filter((funcionario) => funcionario.cpf == cpf),
      );
    });
  };

  const fazermudança = () => {
    funcionarios.map(
      (funcionario) => (
        console.log('segundo console log', nome),
        (func.nome = nome),
        (func.cpf = cpf),
        (func.id = funcionario.id),
        console.log(func),
        console.log('terceiro console log', funcionario.id),
        apiUrl
          .put(`funcionario/${funcionario.id}`, func)
          .then((res) => {
            alert('Alteração Efetuada');
            console.log(res);
            mostrarBusca();
          })
          .catch((res) => {
            alert('Deu algum erro no preenchimento');
            console.log(res);
          })
      ),
    );
  };
  const renderFuncionario = ({item}) => {
    return <Flat dados={item} />;
  };

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
            placeholder="Digite o CPF do Funcionario"
          />
        </View>
        <View style={{marginTop: 10, marginBottom: 30, alignItems: 'center'}}>
          <Button onPress={mostrarBusca} title={'Mostrar Funcionario'} />
        </View>
        <View
          style={{
            maxHeight: 80,
          }}>
          <FlatList
            data={funcionarios}
            renderItem={renderFuncionario}
            keyExtractor={(funcionario) => funcionario.id.toString()}
          />
        </View>
        <View style={{marginTop: 10, alignItems: 'center'}}>
          <TextInput
            style={{
              height: 40,
              marginTop: 20,
              width: 350,
              borderColor: 'gray',
              borderWidth: 1,
              backgroundColor: 'white',
              borderRadius: 10,
            }}
            onChangeText={setNome}
            mode="outlined"
            label="Cpf"
            placeholderTextColor="black"
            placeholder="Digite o novo nome do Funcionario"
          />
        </View>
        <View style={{marginTop: 10, marginBottom: 500, alignItems: 'center'}}>
          <Button onPress={fazermudança} title={'Alterar Funcionario'} />
        </View>
      </SafeAreaView>
    </>
  );
};
export default PutFuncionario;
