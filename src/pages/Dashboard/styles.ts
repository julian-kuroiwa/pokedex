import styled from 'styled-components';
import { shade } from 'polished';

import { mediaQueries } from '../../styles/media';

export const Container = styled.div`
  > img {
    max-width: 500px;
    margin: 80px auto;
    display: block;
    width: 100%;
    padding: 0 20px;
  }

  form {
    max-width: 800px;
    margin: 0 auto;
    width: 100%;
    padding: 0 20px;

    ${mediaQueries('medium')`
      display: flex;
    `};

    > div {
      flex: 1;
      position: relative;

      input {
        height: 70px;
        padding: 0 48px 0 24px;
        border: 2px solid var(--primary-color);
        border-radius: 5px;
        color: var(--text-color);
        width: 100%;

        ${mediaQueries('medium')`
          border-right: 0;
          border-radius: 5px 0 0 5px;
        `};

        &::placeholder {
          color: var(--text-color);
        }
      }

      > button {
        position: absolute;
        top: 50%;
        right: 10px;
        border: 0;
        background: transparent;
        transform: translateY(-50%);
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    > button {
      width: 100%;
      height: 70px;
      background-color: var(--primary-color);
      border-radius: 5px;
      border: 0;
      font-weight: bold;
      color: #fff;
      transition: background-color 0.2;
      margin-top: 10px;

      ${mediaQueries('medium')`
          border-radius: 0 5px 5px 0;
          margin-top: 0;
          width: 210px;
        `};

      &:hover {
        background-color: ${shade(0.2, '#ff0090')};
      }
    }
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
  line-height: 26px;
  color: var(--text-color);
  margin: 80px auto 10px;
  max-width: 600px;
  padding: 0 20px;
  text-align: center;

  ${mediaQueries('medium')`
    font-size: 32px;
    line-height: 56px;
  `};
`;

export const Pokemons = styled.div`
  max-width: 800px;
  margin: 40px auto;
  display: grid;
  padding: 0 20px;
  gap: 30px;

  ${mediaQueries('small')`
    grid-template-columns: 1fr 1fr;
  `};

  ${mediaQueries('medium')`
    grid-template-columns: 1fr 1fr 1fr;
  `};

  a {
    display: flex;
    border: 2px solid var(--primary-color);
    border-radius: 5px;
    justify-content: space-between;
    flex-direction: column;
    position: relative;
    text-decoration: none;
    transition: transform 0.2s;
    min-height: 205px;

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

export const Error = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
  font-size: 36px;
  color: var(--text-color);
  border-radius: 5px;
`;
