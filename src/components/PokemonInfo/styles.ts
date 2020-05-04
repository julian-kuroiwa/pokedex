import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 40px auto;
  border: 2px solid var(--primary-color);
  border-radius: 5px;

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--primary-color);
    padding: 20px;
    color: #fff;
    font-size: 18px;
    text-transform: capitalize;

    > span {
      font-weight: bold;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
  }

  img {
    width: 200px;
  }
`;
