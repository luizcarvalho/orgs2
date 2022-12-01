import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import ProdutorRotas from './ProdutorRotas';
import MelhoresProdutoresRotas from './MelhoresProdutoresRotas';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Coracao from '../assets/coracao.svg';
import Home from '../assets/home.svg';


const Tab = createBottomTabNavigator();

function AppRotas() {
  return (
    <NavigationContainer>
    <Tab.Navigator
    screenOptions={({route}) => ({
      headerShown: false,
      tabBarActiveTintColor: '#2A9F85',
      tabBarInactiveTintColor: '#C7C7C7',
      tabBarIcon: ({color}) => {
        let Icon = Home;

        if(route.name === 'MelhoresProdutores'){
          Icon = Coracao;
        }

        return <Icon color={color} />;
      }
    })}
    >
      <Tab.Screen name="ProdutorRotas" component={ProdutorRotas} />
      <Tab.Screen name="MelhoresProdutores" component={MelhoresProdutoresRotas} />
    </Tab.Navigator>

    </NavigationContainer>
  );
}

export default AppRotas;