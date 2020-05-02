import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiX } from 'react-icons/fi';

import { Container, Header, Title, Pokemons, Error } from './styles';

import Logo from '../../assets/logo-white.svg';
import LogoPokemon from '../../assets/logo-pokemon.svg';

import Loader from '../../components/Loader';

import api from '../../services/api';

interface Pokemon {
  name: string;
  url?: string;
  id: string;
}

const Dashboard: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [nextPageUrl, setNextPageUrl] = useState('');
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const requestHandle = async (params: string): Promise<void> => {
    setLoading(true);
    setError(false);

    try {
      const response = await api.get(params);

      const newPokemons = response.data.results.map(
        ({ name, url }: Pokemon) => {
          const id = url.match(/\/(\d+)\//g)[0].split('/')[1];

          return {
            name,
            id,
          };
        },
      );

      const { next } = response.data;

      setNextPageUrl(next);

      setPokemons(prevState => [...prevState, ...newPokemons]);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(!!err);

      console.error(err);
    }
  };

  const scrollHandle = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    ) {
      return;
    }

    if (nextPageUrl) {
      requestHandle(nextPageUrl);
    }
  }, [nextPageUrl, loading]);

  const changeInputHandle = (event: { target: { value: string } }) => {
    setInputValue(event.target.value);

    if (event.target.value === '' && pokemons.length <= 1) {
      setPokemons([]);
      requestHandle('?limit=21');
    }
  };

  const blurInputHandle = () => {
    if (pokemons.length <= 1) {
      setPokemons([]);
      requestHandle('?limit=21');
    }
  };

  const submitHandle = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (!inputValue) {
      return;
    }

    setPokemons([]);
    setLoading(true);

    try {
      const response = await api.get(inputValue);

      setPokemons([response.data]);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(!!err);

      console.error(err);
    }
  };

  useEffect(() => {
    requestHandle('?limit=21');
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
      <form onSubmit={submitHandle}>
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={changeInputHandle}
            onBlur={blurInputHandle}
          />
          {inputValue && (
            <button type="button" onClick={() => setInputValue('')}>
              <FiX size={30} color="#ff0090" />
            </button>
          )}
        </div>
        <button type="submit">Procurar</button>
      </form>

      <Pokemons>
        {pokemons.map(pokemon => (
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
      {error && <Error>Pokemon não encontrado :(</Error>}
    </Container>
  );
};

export default Dashboard;
