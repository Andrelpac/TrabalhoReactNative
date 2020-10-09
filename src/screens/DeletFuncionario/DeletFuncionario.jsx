import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import apiUrl from '../../components/api/ApiUrl';
import Button from '../../components/button/Button';
import Flat from '../../components/flatList/Flat';
import NetInfo from '@react-native-community/netinfo';

const DeletFuncionario = () => {
  const [funcionarios, setFuncionarios] = useState([]);
  const [cpf, setCpf] = useState('');

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

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      if (state.isConnected) {
      } else {
        alert('Desculpe essa pagina só funciona com internet!');
      }
    });
  });

  const deletarFuncionario = () => {
    funcionarios.map(
      (funcionario) => (
        console.log(funcionario.id),
        apiUrl
          .delete(`funcionario/${funcionario.id}`)
          .then((res) => {
            alert('Funcionario Deletado');
            console.log(res);
            mostrarBusca();
          })
          .catch((res) => {
            alert('Deu algum erro, tente novamente');
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
        <View style={{maxHeight: 80}}>
          <FlatList
            data={funcionarios}
            renderItem={renderFuncionario}
            keyExtractor={(funcionario) => funcionario.id.toString()}
          />
        </View>
        <View style={{marginTop: 10, marginBottom: 500, alignItems: 'center'}}>
          <Text style={{color: 'white'}}>
            Você gostaria mesmo de deletar esse Funcionario?
          </Text>
          <Button onPress={deletarFuncionario} title={'Deletar'} />
        </View>
      </SafeAreaView>
    </>
  );
};
export default DeletFuncionario;
