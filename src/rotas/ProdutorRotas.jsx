import React from 'react';


import Produtor from '../../src/telas/Produtor';
import Home from '../../src/telas/Home';
import Cesta from '../telas/Cesta';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

function ProdutorRotas({ComponentePrincipal = Home}) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={ComponentePrincipal} />
      <Stack.Screen name="Produtor" component={Produtor} />
      <Stack.Screen name="Cesta" component={Cesta} />
    </Stack.Navigator>

  );
}

export default ProdutorRotas;