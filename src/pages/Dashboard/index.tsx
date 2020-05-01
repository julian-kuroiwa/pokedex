import React from 'react';

import { Container, Header, Title } from './styles';

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
    </Container>
  );
};

export default Dashboard;
