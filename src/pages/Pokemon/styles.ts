import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  a {
    text-transform: none;
    text-decoration: none;
    color: var(--primary-color);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 40px 0 0;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#ff0090')};
    }

    > svg {
      margin-right: 5px;
    }
  }
`;
