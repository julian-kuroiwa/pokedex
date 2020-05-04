import styled, { css } from 'styled-components';

interface PokemonInfoTypeProps {
  typeName: string;
}

const pokemonType = {
  normal: '#a6a977',
  fire: '#ee7f31',
  water: '#678fee',
  grass: '#78c751',
  electric: '#f7cf2e',
  ice: '#99d5d5',
  ground: '#dfbf68',
  flying: '#a98ff0',
  poison: '#a13fa0',
  fighting: '#bf3028',
  psychic: '#f85588',
  dark: '#735847',
  rock: '#b8a136',
  bug: '#a5b81d',
  ghost: '#6e5896',
  steel: '#b9b7cf',
  dragon: '#6a36ea',
  fairy: '#f1a5bd',
};

export const Container = styled.li<PokemonInfoTypeProps>`
  padding: 5px 10px;
  font-weight: bold;
  color: #fff;
  text-transform: capitalize;

  ${props =>
    props.typeName &&
    css`
      background-color: ${pokemonType[props.typeName]};
    `}

  & + li {
    margin-left: 10px;
  }
`;
