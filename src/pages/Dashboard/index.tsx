import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { Container, Header, Title, Pokemons } from './styles';

import Logo from '../../assets/logo-white.svg';
import LogoPokemon from '../../assets/logo-pokemon.svg';

import Loader from '../../components/Loader';

import api from '../../services/api';

interface Pokemon {
  name: string;
  url: string;
  id: string;
}

interface Response {
  next: string | null;
  results: Pokemon[];
}

const Dashboard: React.FC = () => {
  const [morePokemons, setMorePokemons] = useState('');
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(false);

  const responseHandle = (response: Response): void => {
    const newPokemons = response.results.map(
      ({ name, url }: Omit<Pokemon, 'number'>) => {
        return {
          name,
          url,
          id: url.match(/\/(\d+)\//g)[0].split('/')[1],
        };
      },
    );

    const { next } = response;

    if (next) {
      setMorePokemons(next.substring(next.indexOf('?')));
    }

    setPokemons((prevState) => [...prevState, ...newPokemons]);
    setLoading(false);
  };

  const scrollHandle = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    ) {
      return;
    }

    if (morePokemons) {
      setLoading(true);

      setTimeout(() => {
        api.get(morePokemons).then((response) => responseHandle(response.data));
      }, 1000);
    }
  }, [morePokemons, loading]);

  useEffect(() => {
    setLoading(true);

    api.get('?limit=21').then((response) => responseHandle(response.data));
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandle);
    return () => window.removeEventListener('scroll', scrollHandle);
  }, [scrollHandle]);

  return (
    <Container>
      <Header>
        <div>
          <img src={Logo} alt="Logo Hanzo" />
          <div />
        </div>
      </Header>
      <img src={LogoPokemon} alt="Logo Pokémon" />
      <Title>Encontre o Pokémon pelo nome ou número</Title>
      <form>
        <input type="text" />
        <button type="submit">Procurar</button>
      </form>

      <Pokemons>
        {pokemons.map((pokemon) => (
          <Link to={`/pokemons/${pokemon.name}`} key={pokemon.name}>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
              alt={pokemon.name}
            />
            <strong>{pokemon.name}</strong>
            <span>{pokemon.id}</span>
          </Link>
        ))}
      </Pokemons>

      {loading && <Loader />}
    </Container>
  );
};

export default Dashboard;
