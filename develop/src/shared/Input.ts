import styled from 'styled-components';

type InputType = {
  width?: string;
  borderRight?: string;
};

export const Input = styled.input<InputType>`
  width: ${({ width }) => width};
  padding: 0 5px 0 15px;

  border: 1px solid #2b3a67;
  border-right: ${({ borderRight }) => borderRight};

  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 0px 10px;
`;

Input.defaultProps = {
  width: 'inherit',
  borderRight: '0'
};
