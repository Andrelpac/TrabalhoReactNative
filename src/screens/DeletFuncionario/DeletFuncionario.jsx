import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import apiUrl from '../../components/api/ApiUrl';
import Button from '../../components/button/Button';
import Flat from '../../components/flatList/Flat';

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

  const deletarFuncionario = () => {
    funcionarios.map((funcionario) =>
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
        }),
    );
  };

  const renderFuncionario = ({item}) => {
    return <Flat dados={item} />;
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
      </View>

      <View>
        <Text>Você gostaria mesmo de deletar esse Funcionario?</Text>
        <Button onPress={deletarFuncionario} title={'Deletar'} />
      </View>
    </>
  );
};
export default DeletFuncionario;
