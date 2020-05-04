import styled from 'styled-components';
import { transparentize } from 'polished';

interface InfoStatsItemProps {
  baseStat: string;
}

export const Container = styled.li<InfoStatsItemProps>`
  display: grid;
  grid-template-columns: 125px 1fr;
  gap: 10px;
  margin-bottom: 10px;

  strong {
    text-align: right;
    text-transform: capitalize;
  }

  > div {
    background-color: ${transparentize(0.7, '#ff0090')};
    width: 100%;
    position: relative;

    &::after {
      content: '';
      display: block;
      background-color: var(--primary-color);
      width: ${props => (props.baseStat ? `${props.baseStat}px` : 0)};
      height: 100%;
      max-width: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`;
