import styled from 'styled-components';

export const Container = styled.li`
  display: grid;
  grid-template-columns: 125px 1fr;
  gap: 10px;
  margin-bottom: 10px;

  strong {
    text-align: right;
  }

  span {
    background-color: var(--background-color);
    width: 100%;
    position: relative;

    &::before {
      content: '';
      display: block;
      background-color: var(--primary-color);
      width: 80px;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      max-width: 100%;
    }
  }
`;
