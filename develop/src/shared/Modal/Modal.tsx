import { FC } from 'react';
import { PopUp, PopUpWrap } from '../Popup';

type ModalProps = {
  children?: JSX.Element | JSX.Element[];
  visible?: boolean;
  forLobby?: boolean;
};

export const Modal: FC<ModalProps> = ({ children, visible, forLobby }): JSX.Element => {
  return (
    <PopUpWrap display={visible ? 'block' : 'none'}>
      <PopUp alignItems={forLobby ? 'center' : 'initial'}>{children}</PopUp>
    </PopUpWrap>
  );
};

Modal.defaultProps = {
  children: undefined,
  visible: false,
  forLobby: false
};
