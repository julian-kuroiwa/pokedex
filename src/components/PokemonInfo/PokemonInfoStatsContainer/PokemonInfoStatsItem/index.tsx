import React from 'react';

import { Container } from './styles';

export interface PokemonStats {
  base_stat: string;
  stat: {
    name: string;
  };
}

interface PokemonStatsProps {
  stat: PokemonStats;
}

const PokemonInfoStatsItem: React.FC<PokemonStatsProps> = ({ stat }) => (
  <Container baseStat={stat.base_stat}>
    <strong>{stat.stat.name}:</strong>
    <div />
  </Container>
);

export default PokemonInfoStatsItem;
