import {View, Text} from 'react-native';
import React from 'react';

const Flat = ({dados}) => {
  return (
    <View>
      <Text>Nome do Funcionario: {dados.nome}</Text>
      <Text>Cpf do Funcionario: {dados.cpf}</Text>
    </View>
  );
};
export default Flat;
