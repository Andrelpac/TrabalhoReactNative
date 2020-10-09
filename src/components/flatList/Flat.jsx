import {View, Text} from 'react-native';
import React from 'react';
import {Body, Card, CardItem, Left, Thumbnail} from 'native-base';

const Flat = ({dados}) => {
  return (
    <Card>
      <CardItem>
        <Left>
          <Thumbnail
            style={{width: 40, height: 40, borderRadius: 40 / 2}}
            source={require('../../assents/img/foto1.jpg')}
          />
          <Body>
            <View>
              <Text>Nome do Funcionario: {dados.nome}</Text>
              <Text>Cpf do Funcionario: {dados.cpf}</Text>
            </View>
          </Body>
        </Left>
      </CardItem>
    </Card>
  );
};
export default Flat;
