import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import { GlobalStyle } from './stlyes/global';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
};

export default App;
