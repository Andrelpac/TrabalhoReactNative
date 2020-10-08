import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Button from '../../components/button/Button';
import DrawerNavigator from '../../navigators/DrawerNavigator';
import StackNavigator from '../../navigators/StackNavigator';

const Home = ({navigation}) => {
  const [pagina, setPagina] = useState();

  const clicar = () => {
    navigation.navigate('DrawerNavigator', (screen = 'Cadastra Funcionario'));
  };
  return (
    <View>
      <Text>Sejam bem vindos.</Text>
      <View style={{flexDirection: 'row'}}>
        <Text>Para visualizar os Funcionarios</Text>
        <Button onPress={clicar} title={'Entrar'} />
      </View>
    </View>
  );
};

export default Home;
