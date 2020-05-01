import React from 'react';

import { Container, Header } from './styles';

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
    </Container>
  );
};

export default Dashboard;
