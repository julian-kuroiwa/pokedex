import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  margin: 40px auto;

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--primary-color);
    padding: 20px;
    color: #fff;
    font-size: 18px;

    > span {
      font-weight: bold;
    }
  }

  ul {
    list-style: none;
    width: 100%;
    display: flex;
    margin: 20px 0;

    > li {
      padding: 5px 10px;
      background-color: yellow;
      color: var(--text-color);

      & + li {
        margin-left: 10px;
      }
    }
  }

  img {
    width: 200px;
  }
`;
