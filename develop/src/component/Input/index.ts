import styled from 'styled-components';
import { IStyles } from '../../model/types';

const InputComponent = styled.input<IStyles>`
  width: ${({ width }) => width || 'inherit'};
  padding: 0 5px 0 15px;

  border: 1px solid #2b3a67;
  border-right: ${({ borderRight }) => borderRight || '0'};

  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 0px 10px;
`;

export default InputComponent;
