import React from 'react';
import {View, Text, Image} from 'react-native';
import Button from '../../components/button/Button';

const Home = ({navigation}) => {
  const clicar = () => {
    navigation.navigate('DrawerNavigator');
  };

  return (
    <View style={{marginTop: 220, alignItems: 'center'}}>
        <Image source={require('../../assents/img/ic_launcher.png')} />
        <Button onPress={clicar} title={'Entrar'} />
    </View>
  );
};

export default Home;
