import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Header, Title, Pokemons } from './styles';

import Logo from '../../assets/logo-white.svg';
import LogoPokemon from '../../assets/logo-pokemon.svg';

const Dashboard: React.FC = () => {
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
        <Link to="/pokemons">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="Ditto"
          />
          <strong>Ditto</strong>
          <span>132</span>
        </Link>
        <Link to="/pokemons">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="Ditto"
          />
          <strong>Ditto</strong>
          <span>132</span>
        </Link>
        <Link to="/pokemons">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="Ditto"
          />
          <strong>Ditto</strong>
          <span>132</span>
        </Link>
        <Link to="/pokemons">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="Ditto"
          />
          <strong>Ditto</strong>
          <span>132</span>
        </Link>
        <Link to="/pokemons">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="Ditto"
          />
          <strong>Ditto</strong>
          <span>132</span>
        </Link>
        <Link to="/pokemons">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="Ditto"
          />
          <strong>Ditto</strong>
          <span>132</span>
        </Link>
        <Link to="/pokemons">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="Ditto"
          />
          <strong>Ditto</strong>
          <span>132</span>
        </Link>
      </Pokemons>
    </Container>
  );
};

export default Dashboard;
