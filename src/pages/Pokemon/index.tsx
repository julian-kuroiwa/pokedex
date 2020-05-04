import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import Header from '../../components/Header';
import PokemonInfo, { PokemonProps } from '../../components/PokemonInfo';
import Loader from '../../components/Loader';

import { Container } from './styles';

import api from '../../services/api';

interface PokemonParams {
  pokemon: string;
}

const Pokemon: React.FC = () => {
  const [pokemon, setPokemon] = useState<PokemonProps | null>(null);
  const [loading, setLoading] = useState(false);

  const { params } = useRouteMatch<PokemonParams>();

  useEffect(() => {
    setLoading(true);

    api.get(`${params.pokemon}`).then(response => {
      setPokemon(response.data);

      setLoading(false);
    });
  }, [params.pokemon]);

  return (
    <Container>
      <Header />
      <Link to="/">
        <FiChevronLeft size={20} color="#ff0090" /> Voltar
      </Link>
      {pokemon && <PokemonInfo pokemon={pokemon} />}

      {loading && <Loader />}
    </Container>
  );
};

export default Pokemon;
