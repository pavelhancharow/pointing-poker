import styled from 'styled-components';

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

type PopUpType = {
  padding?: string;
};

export const PopUp = styled.div<PopUpType>`
  position: relative;
  top: 50%;
  display: flex;
  flex-direction: column;
  width: 876px;
  margin: 0 auto;
  padding: ${({ padding }) => padding};
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transform: translateY(-50%);

  &-header {
    margin-bottom: 30px;
  }
`;

PopUp.defaultProps = {
  padding: '55px 35px 33px'
};
