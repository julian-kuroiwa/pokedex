import React from 'react';

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
        <a href="/">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="Ditto"
          />
          <strong>Ditto</strong>
          <span>132</span>
        </a>
        <a href="/">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="Ditto"
          />
          <strong>Ditto</strong>
          <span>132</span>
        </a>
        <a href="/">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="Ditto"
          />
          <strong>Ditto</strong>
          <span>132</span>
        </a>
        <a href="/">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="Ditto"
          />
          <strong>Ditto</strong>
          <span>132</span>
        </a>
        <a href="/">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="Ditto"
          />
          <strong>Ditto</strong>
          <span>132</span>
        </a>
        <a href="/">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="Ditto"
          />
          <strong>Ditto</strong>
          <span>132</span>
        </a>
        <a href="/">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="Ditto"
          />
          <strong>Ditto</strong>
          <span>132</span>
        </a>
      </Pokemons>
    </Container>
  );
};

export default Dashboard;
