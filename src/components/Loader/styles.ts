import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0 40px;
`;

export const Pokeball = styled.div`
  width: 60px;
  height: 60px;
  background-color: #fff;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  border: 3px solid;
  animation: ${rotate} 0.8s linear 0s infinite;

  &::after {
    content: '';
    position: absolute;
    width: 60px;
    height: 30px;
    background-color: red;
    border-bottom: 4px solid;
    top: -4px;
  }

  &::before {
    content: '';
    position: absolute;
    background-color: #fff;
    width: 10px;
    height: 10px;
    border: 4px solid;
    border-radius: 50%;
    bottom: 18px;
    right: 18px;
    z-index: 1;
  }
`;
