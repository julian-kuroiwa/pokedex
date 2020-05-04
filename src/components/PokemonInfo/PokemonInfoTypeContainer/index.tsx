import React from 'react';

import { Container } from './style';

import PokemonInfoTypeItem from './PokemonInfoTypeItem';

export interface PokemonTypes {
  type: {
    name: string;
  };
}

interface PokemonTypesProps {
  pokemonTypes: PokemonTypes[];
}

const PokemonInfoTypeContainer: React.FC<PokemonTypesProps> = ({
  pokemonTypes,
}) => (
  <Container>
    {pokemonTypes.map(type => (
      <PokemonInfoTypeItem key={type.type.name} type={type.type.name}>
        {type.type.name}
      </PokemonInfoTypeItem>
    ))}
  </Container>
);

export default PokemonInfoTypeContainer;
