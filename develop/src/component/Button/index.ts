import styled from 'styled-components';
import { IStyles } from '../../model/types';

const ButtonComponent = styled.button<IStyles>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 241px;
  height: 47px;

  font-family: 'Ruda', sans-serif;
  font-weight: 700;
  color: #ffffff;

  background-color: #2b3a67;

  border: 1px solid #496a81;
  border-radius: ${({ borderRadius }) => borderRadius || '3px'};

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export default ButtonComponent;
