import styled from 'styled-components';

type InputProps = {
  small?: boolean;
  forButton?: boolean;
  fontSize?: string;
  lineHeight?: string;
  borderRadius?: string;
  boxShadow?: string;
  opacity?: string;
  visibility?: string;
};

export const Input = styled.input<InputProps>`
  width: auto;
  height: 47px;
  padding: 0 5px 0 15px;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: ${({ fontSize }) => fontSize};
  line-height: ${({ lineHeight }) => lineHeight};
  border: 1px solid #2b3a67;
  border-right-width: 1px;
  border-radius: ${({ borderRadius }) => borderRadius};
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  opacity: ${({ opacity }) => opacity};
  visibility: ${({ visibility }) => visibility};

  &:disabled {
    font-weight: 300;
    text-align: center;
    color: inherit;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: 1px solid #eeeeee;
    border-right: 0;
  }

  &::placeholder {
    color: #000000;
  }

  ${({ small }) =>
    small &&
    `
    height: 36px;
    font-family: 'Ruda';
  `}

  ${({ forButton }) =>
    forButton &&
    `
    width: 275px;
    border-right-width: 0;
  `}
`;

Input.defaultProps = {
  fontSize: 'inherit',
  lineHeight: 'inherit',
  borderRadius: '0px 0px 0px 10px',
  opacity: '1',
  visibility: 'visible'
};
