import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import GetFuncionario from '../screens/GetFuncionario/GetFuncionario';
import PostFuncionario from '../screens/PostFuncionario/PostFuncionario';
import PutFuncionario from '../screens/PutFuncionario/PutFuncionario';
import DeletFuncionario from '../screens/DeletFuncionario/DeletFuncionario';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      overlayColor="transparent"
      drawerStyle={{backgroundColor: 'lightgray'}}
      initialRouteName={'Ver Funcionarios'}>
      <Drawer.Screen name="Ver Funcionarios" component={GetFuncionario} />
      <Drawer.Screen
        name="Cadastra Funcionario"
        component={PostFuncionario}
        drawerStyle={{backgroundColor: '#052a92'}}
      />
      <Drawer.Screen name="Alterar Funcionario" component={PutFuncionario} />
      <Drawer.Screen name="Deletar Funcionario" component={DeletFuncionario} />
    </Drawer.Navigator>
  );
}
export default DrawerNavigator;
