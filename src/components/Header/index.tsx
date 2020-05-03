import React, { ReactChildren } from 'react';
import Logo from '../../assets/logo-white.svg';

import { Container } from './styles';

interface HeaderProps {
  children: ReactChildren;
}

const Header: React.FC = ({ children }: HeaderProps) => (
  <Container>
    <div>
      <img src={Logo} alt="Logo Hanzo" />
      {children}
    </div>
  </Container>
);

export default Header;
