import React from 'react';

import { Container } from './styles';
import PokemonInfoStatsItem, { PokemonStats } from './PokemonInfoStatsItem';

interface PokemonStatsProps {
  pokemonStats: PokemonStats[];
}

const PokemonInfoStatsContainer: React.FC<PokemonStatsProps> = ({
  pokemonStats,
}) => (
  <Container>
    {pokemonStats.map(stat => (
      <PokemonInfoStatsItem key={stat.stat.name} stat={stat} />
    ))}
  </Container>
);

export default PokemonInfoStatsContainer;
