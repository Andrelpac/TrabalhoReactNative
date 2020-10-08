import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import apiUrl from '../../components/api/ApiUrl';
import Button from '../../components/button/Button';
import Flat from '../../components/flatList/Flat';

const PutFuncionario = () => {
  const [funcionarios, setFuncionarios] = useState([]);
  const [cpf, setCpf] = useState('');
  const [nome, setNome] = useState('');
  const func = {
    nome: '',
    cpf: '',
    id: 0,
  };

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
            alert('Cadastro Efetuado');
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
        label="Cpf"
        placeholderTextColor="black"
        placeholder="Digite o Cpf do Funcionario"
      />
      <Button onPress={mostrarBusca} title={'Mostrar Funcionario'} />
      <FlatList
        data={funcionarios}
        renderItem={renderFuncionario}
        keyExtractor={(funcionario) => funcionario.id}
      />
      {/* <View style={{marginTop: 20}}>
        {funcionarios.map((funcionario) => (
          <View key={funcionario.id}>
            <Text>Nome do Funcionario: {funcionario.nome}</Text>
            <Text>Cpf do Funcionario: {funcionario.cpf}</Text>
          </View>
        ))}
      </View> */}
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
      <Button onPress={fazermudança} title={'Alterar Funcionario'} />
    </View>
  );
};
export default PutFuncionario;
