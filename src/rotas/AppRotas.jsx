import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import ProdutorRotas from './ProdutorRotas';
import MelhoresProdutoresRotas from './MelhoresProdutoresRotas';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

function AppRotas() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="ProdutorRotas" component={ProdutorRotas} />
      <Tab.Screen name="MelhoresProdutores" component={MelhoresProdutoresRotas} />
    </Tab.Navigator>

    </NavigationContainer>
  );
}

export default AppRotas;