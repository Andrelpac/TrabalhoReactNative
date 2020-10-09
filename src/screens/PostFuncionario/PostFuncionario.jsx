import React, {useEffect, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import apiUrl from '../../components/api/ApiUrl';
import Button from '../../components/button/Button';
import NetInfo from '@react-native-community/netinfo';

const PostFuncionario = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      if (state.isConnected) {
      } else {
        alert('Desculpe essa pagina só funciona com internet!');
      }
    });
  });

  const handleSubmit = () => {
    const funcionario = {
      nome: nome,
      cpf: cpf,
    };
    apiUrl
      .post('funcionario', funcionario)
      .then((res) => {
        alert('Cadastro Efetuado');
        console.log(res);
      })
      .catch((res) => {
        alert('Deu algum erro no preenchimento');
        console.log(res);
      });
    setCpf('');
    setNome('');
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
            onChangeText={setNome}
            mode="outlined"
            label="Nome"
            placeholderTextColor="black"
            placeholder="Digite o nome do Funcionario"></TextInput>
        </View>
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
            label="CPF"
            placeholderTextColor="black"
            placeholder="Digite o CPF do Funcionario"></TextInput>
        </View>
        <View style={{marginTop: 20, marginBottom: 700, alignItems: 'center'}}>
          <Button onPress={handleSubmit} title="Cadastrar" />
        </View>
      </SafeAreaView>
    </>
  );
};
export default PostFuncionario;
