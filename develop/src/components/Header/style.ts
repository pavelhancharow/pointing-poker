import styled from 'styled-components';
import logo from '../../assets/image/img/logo.png';

export const HeaderBlock = styled.header`
  position: relative;
  width: 100%;
  height: 70px;
  padding-top: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: inherit;
    height: 50px;
    background-color: #2b3a67;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: inherit;
    height: 20px;
    background-color: #66999b;
  }
`;

export const Logo = styled.span`
  position: relative;
  display: block;
  width: 70px;
  height: 70px;
  background-image: url(${logo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 100;
`;
