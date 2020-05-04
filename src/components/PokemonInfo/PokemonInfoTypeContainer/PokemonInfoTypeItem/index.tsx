import React from 'react';

import { Container } from './style';

interface TypeProps {
  type: string;
}

const PokemonInfoTypeItem: React.FC<TypeProps> = ({ type }) => (
  <Container typeName={type}>{type}</Container>
);

export default PokemonInfoTypeItem;
