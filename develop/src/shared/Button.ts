import styled from 'styled-components';

type ButtonType = {
  padding?: string;
  color?: string;
  backgroundColor?: string;
  borderRadius?: string;
};

export const Button = styled.button<ButtonType>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ padding }) => padding};
  font-family: 'Ruda', sans-serif;
  font-weight: 700;
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: 1px solid #496a81;
  border-radius: ${({ borderRadius }) => borderRadius};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

Button.defaultProps = {
  padding: '7px 30px',
  color: '#ffffff',
  backgroundColor: '#2b3a67',
  borderRadius: '3px'
};
