import styled from 'styled-components';

export const SwitcherBox = styled.label`
  position: relative;
  display: flex;
  width: 55px;
  height: 30px;

  input {
    width: 0;
    height: 0;
    opacity: 0;
    visibility: hidden;
  }

  .round {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: inherit;
    width: inherit;
    border-radius: 24px;
    background: #c4c4c4;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: 0.3s;
    cursor: pointer;
  }

  .round:before {
    position: absolute;
    content: '';
    height: 20px;
    width: 20px;
    top: 5px;
    right: 4px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: 0.3s;
  }

  input:checked + .round {
    background: #60dabf;
  }

  input:focus + .round {
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  input:checked + .round:before {
    transform: translateX(-26px);
  }
`;
