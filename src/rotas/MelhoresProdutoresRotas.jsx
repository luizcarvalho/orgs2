import React from 'react';
import ProdutorRotas from './ProdutorRotas';
import MelhoresProdutores from '../telas/MelhoresProdutores';

function MelhoresProdutoresRotas(props) {
  return (
    <ProdutorRotas ComponentePrincipal={MelhoresProdutores} />
  );
}

export default MelhoresProdutoresRotas;