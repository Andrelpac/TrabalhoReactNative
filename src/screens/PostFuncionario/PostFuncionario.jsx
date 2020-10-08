import React, {useState} from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import apiUrl from '../../components/api/ApiUrl';
import Button from '../../components/button/Button';

const PostFuncionario = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');

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
      <View>
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
      <View>
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
      <View style={{marginBottom: 10}}>
        <Button
          buttonStyle={{
            width: 350,
            height: 50,
            borderRadius: 10,
            alignItems: 'center',
            backgroundColor: 'blue',
          }}
          onPress={handleSubmit}
          title="Cadastrar"
        />
      </View>
    </>
  );
};
export default PostFuncionario;
