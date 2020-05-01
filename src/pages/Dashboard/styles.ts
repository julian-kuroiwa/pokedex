import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div``;

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
