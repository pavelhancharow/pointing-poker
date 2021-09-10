import styled from 'styled-components';

type ButtonType = {
  padding?: string;
  color?: string;
  background?: string;
  borderRadius?: string;
};

export const Button = styled.button<ButtonType>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ padding }) => padding};
  font-family: 'Ruda', sans-serif;
  font-weight: 700;
  color: ${({ color }) => color};
  background: ${({ background }) => background};
  border: 1px solid #496a81;
  border-radius: ${({ borderRadius }) => borderRadius};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

Button.defaultProps = {
  padding: '7px 30px',
  color: '#ffffff',
  background: '#2b3a67',
  borderRadius: '3px'
};

type ButtonBoxType = {
  margin?: string;
};

export const ButtonBox = styled.div<ButtonBoxType>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: ${({ margin }) => margin};
`;

ButtonBox.defaultProps = {
  margin: '0'
};
