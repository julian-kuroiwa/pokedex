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

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 400;
  color: var(--text-color);
  margin: 80px auto 10px;
  max-width: 600px;
  line-height: 56px;
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
