import React from 'react';

import { Container } from './styles';

interface StatProps {
  stat: {
    base_stat: number;
    stat: {
      name: string;
    };
  };
}

const PokemonInfoStatsItem: React.FC<StatProps> = ({ stat }) => (
  <Container>
    <strong>{stat.stat.name}:</strong>
    <span>{stat.base_stat}</span>
  </Container>
);

export default PokemonInfoStatsItem;
