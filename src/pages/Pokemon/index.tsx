import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';

import Header from '../../components/Header';
import PokemonInfo, { PokemonProps } from '../../components/PokemonInfo';

import { Container } from './styles';

import api from '../../services/api';

interface PokemonParams {
  pokemon: string;
}

const Pokemon: React.FC = () => {
  const [pokemon, setPokemon] = useState<PokemonProps | null>(null);

  const { params } = useRouteMatch<PokemonParams>();

  useEffect(() => {
    api.get(`${params.pokemon}`).then(response => {
      setPokemon(response.data);
    });
  }, [params.pokemon]);

  return (
    <Container>
      <Header />
      {pokemon && <PokemonInfo pokemon={pokemon} />}
    </Container>
  );
};

export default Pokemon;
