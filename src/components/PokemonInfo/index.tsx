import React from 'react';

import { Container } from './styles';

import PokemonInfoTypeContainer, {
  PokemonTypes,
} from './PokemonInfoTypeContainer';
import PokemonInfoStatsContainer from './PokemonInfoStatsContainer';
import { PokemonStats } from './PokemonInfoStatsContainer/PokemonInfoStatsItem';

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

      <div>
        <PokemonInfoTypeContainer pokemonTypes={pokemon.types} />

        <img src={pokemon.sprites.front_default} alt={pokemon.name} />

        <PokemonInfoStatsContainer pokemonStats={pokemon.stats} />
      </div>
    </Container>
  );
};

export default PokemonInfo;
