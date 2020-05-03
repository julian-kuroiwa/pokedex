import React from 'react';

import { Container } from './styles';

import PokemonInfoStatsContainer from './PokemonInfoStatsContainer';
import PokemonInfoStatsItem from './PokemonInfoStatsContainer/PokemonInfoStatsItem';

interface PokemonTypes {
  type: {
    name: string;
  };
}

interface PokemonStats {
  base_stat: number;
  stat: {
    name: string;
  };
}

export interface PokemonProps {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  stats: PokemonStats[];
  types: PokemonTypes[];
}

interface PokemonInfoProps {
  pokemon: PokemonProps;
}

const PokemonInfo: React.FC<PokemonInfoProps> = ({ pokemon }) => {
  return (
    <Container>
      <header>
        <h2>{pokemon.name}</h2>
        <span>#{pokemon.id}</span>
      </header>
      <ul>
        {pokemon.types.map(type => (
          <li>{type.type.name}</li>
        ))}
      </ul>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <PokemonInfoStatsContainer>
        {pokemon.stats.map(stat => (
          <PokemonInfoStatsItem stat={stat} />
        ))}
      </PokemonInfoStatsContainer>
    </Container>
  );
};

export default PokemonInfo;
