import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #ff0090;
    --text-color: #111;
    --background-color: #FEFEFE;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background-color: var(--background-color);
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  button {
    font: 16px 'Rajdhani', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
