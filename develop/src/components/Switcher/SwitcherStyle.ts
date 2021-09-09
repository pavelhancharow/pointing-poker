import styled from 'styled-components';

export const SwitchWrapp = styled.div`
  position: relative;
`;

export const SwitchLabel = styled.label`
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  width: 55px;
  height: 30px;
  border-radius: 15px;
  background-color: #c4c4c4;
  box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.4);
  transition: background-color 0.2s ease-in-out;

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 5px;
    left: 30px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
    background-color: #ffffff;
    transition: transform 0.2s ease-in-out;
  }
`;

export const SwitchInput = styled.input`
  width: 55px;
  height: 30px;
  border-radius: 15px;

  &:checked + ${SwitchLabel} {
    background-color: #60dabf;

    &::after {
      transform: translateX(-25px);
    }
  }
`;
