import styled from 'styled-components';
import { FlexBox } from './style/FlexBox';

type PopUpWrapType = {
  display?: string;
};

export const PopUpWrap = styled.div<PopUpWrapType>`
  position: fixed;
  top: 0;
  left: 0;
  display: ${({ display }) => display};
  width: 100%;
  height: 100%;
  overflow: scroll;
  background: rgba(196, 196, 196, 0.6);
  z-index: 100;
`;

PopUpWrap.defaultProps = {
  display: 'none'
};

export const PopUp = styled(FlexBox)`
  position: relative;
  top: 50%;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transform: translateY(-50%);
`;

PopUp.defaultProps = {
  flexDirection: 'column',
  width: '876px',
  margin: '0 auto',
  padding: '55px 35px 33px'
};
