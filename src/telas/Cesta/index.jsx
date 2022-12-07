import React from 'react';
import { useRoute } from '@react-navigation/native';
import { FlatList, StyleSheet, View } from 'react-native';

import Texto from '../../componentes/Texto';

import Topo from '../../componentes/Topo';
import useTextos from '../../hooks/useTextos';
import Detalhes from './componentes/Detalhes';
import Item from './componentes/Item';

export default function Cesta() {
  const route = useRoute();
  const { detalhes, itens, produtor } = route.params;
  const { topoCesta, tituloItens } = useTextos();

  console.log('====================================');
  console.log(detalhes);
  console.log('====================================');

  return <>
    <FlatList
      data={itens}
      renderItem={Item}

      ListHeaderComponent={() => {
        return <>
          <Topo titulo={topoCesta} />
          <View style={estilos.cesta}>
            <Detalhes {...detalhes} produtor={produtor} />
            <Texto style={estilos.titulo}>{tituloItens}</Texto>
          </View>
        </>
      }}
      style={estilos.lista}
    />
  </>
}

const estilos = StyleSheet.create({
  lista: {
    backgroundColor: '#ffffff',
  },
  titulo: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
