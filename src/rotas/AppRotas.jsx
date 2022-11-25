import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import Home from '../../src/telas/Home';
import MelhoresProdutores from '../../src/telas/MelhoresProdutores';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

function AppRotas() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="MelhoresProdutores" component={MelhoresProdutores} />
    </Tab.Navigator>

    </NavigationContainer>
  );
}

export default AppRotas;