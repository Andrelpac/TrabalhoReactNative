import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {FlatList, ScrollView, TextInput} from 'react-native-gesture-handler';
import apiUrl from '../../components/api/ApiUrl';
import Button from '../../components/button/Button';
import Flat from '../../components/flatList/Flat';

const GetFuncionario = ({}) => {
  const [funcionarios, setFuncionarios] = useState({});
  const [cpf, setCpf] = useState('');

  const mostrarBusca = () => {
    apiUrl.get('funcionario').then((response) => {
      setFuncionarios(
        response.data.filter((funcionario) => funcionario.cpf == cpf),
      );
      console.log(
        response.data.filter((funcionario) => funcionario.cpf == cpf),
      );
    });
  };

  const mostrartodosFuncionarios = () => {
    apiUrl.get('funcionario').then((response) => {
      setFuncionarios(response.data);
      console.log(response.data);
    });
  };

  const renderFuncionario = ({item}) => {
    return <Flat dados={item} />;
  };

  return (
    <>
      <ScrollView>
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
        <Button onPress={mostrarBusca} title={'Mostrar Funcionario'} />
        <Button
          onPress={mostrartodosFuncionarios}
          title={'Mostrar todos Funcionarios'}
        />
        <FlatList
          data={funcionarios}
          renderItem={renderFuncionario}
          keyExtractor={(funcionario) => funcionario.id}
        />
      </ScrollView>
    </>
  );
};

export default GetFuncionario;
