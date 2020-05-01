import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  > img {
    max-width: 500px;
    margin: 80px auto;
    display: block;
    width: 100%;
  }

  form {
    max-width: 800px;
    margin: 0 auto;
    width: 100%;
    padding: 0 20px;
    display: flex;

    input {
      flex: 1;
      height: 70px;
      padding: 0 24px;
      border: 2px solid var(--primary-color);
      border-radius: 5px 0 0 5px;
      border-right: 0;
      color: var(--text-color);

      &::placeholder {
        color: var(--text-color);
      }
    }

    button {
      width: 210px;
      height: 70px;
      background-color: var(--primary-color);
      border-radius: 0 5px 5px 0;
      border: 0;
      font-weight: bold;
      color: #fff;
      transition: background-color 0.2;

      &:hover {
        background-color: ${shade(0.2, '#ff0090')};
      }
    }
  }
`;

export const Header = styled.header`
  background-color: var(--primary-color);
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;

  > div {
    max-width: 1024px;
    width: 100%;
    padding: 0 20px;
    margin: 0 auto;

    > img {
      height: 40px;
    }
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 400;
  color: var(--text-color);
  margin: 80px auto 10px;
  max-width: 600px;
  line-height: 56px;
`;

export const Pokemons = styled.div`
  max-width: 800px;
  margin: 40px auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0 20px;
  gap: 30px;

  a {
    display: flex;
    border: 2px solid var(--primary-color);
    border-radius: 5px;
    justify-content: center;
    flex-direction: column;
    position: relative;
    text-decoration: none;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1);
    }

    > img {
      max-width: 180px;
      display: block;
      margin: 0 auto;
      width: 100%;
    }

    > strong {
      text-align: center;
      background: #ff0090;
      color: #fff;
    }

    > span {
      color: #ff0090;
      position: absolute;
      top: 10px;
      left: 0;
      padding: 5px 10px;
      font-weight: bold;
    }
  }
`;
