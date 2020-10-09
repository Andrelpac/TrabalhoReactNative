import {View, Text} from 'react-native';
import React from 'react';
import {Body, Card, CardItem, Grid, Left, Thumbnail} from 'native-base';

const Flat = ({dados}) => {
  return (
    <View style={{alignItems: 'center'}}>
    <Card style={{width:350}}>
      <CardItem>
        <Left>
          <Thumbnail
            style={{width: 40, height: 40, borderRadius: 40 / 2}}
            source={require('../../assents/img/foto1.jpg')}
          />
          <Body>
            <View style={{flexDirection:"row"}}>
              <Text style={{fontWeight: "bold"}}>Nome: </Text> 
              <Text>{dados.nome}</Text>
            </View>
            <View style={{flexDirection:"row"}}>
              <Text style={{fontWeight: "bold"}}>CPF: </Text> 
              <Text>{dados.cpf}</Text>
            </View>
          </Body>
        </Left>
      </CardItem>
    </Card>
    </View>
  );
};
export default Flat;
