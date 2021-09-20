import styled from 'styled-components';

type ButtonType = {
  primary?: boolean;
  forInput?: boolean;
  large?: boolean;
  wide?: boolean;
};

export const Button = styled.button<ButtonType>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 190px;
  height: 47px;
  background: #ffffff;
  border: 1px solid #496a81;
  border-radius: 3px;
  font-family: 'Ruda', sans-serif;
  font-weight: 700;
  color: #2b3a67;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  ${({ large }) =>
    large &&
    `
    height: 60px;
  `}

  ${({ wide }) =>
    wide &&
    `
    width: 240px;
  `}

  ${({ primary }) =>
    primary &&
    `
    background: #2b3a67;
    color: #ffffff;
  `}

  ${({ forInput }) =>
    forInput &&
    `
    border-radius: 0 3px 3px 0;
  `}
`;
