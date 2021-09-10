import { FC } from 'react';
import { ConnectToLobbyForm } from '../../../components/Form/ConnectToLobby';
import { PopUp, PopUpWrap } from '../../../shared/Popup';

export const Modal: FC = () => {
  return (
    <PopUpWrap>
      <PopUp>
        <ConnectToLobbyForm />
      </PopUp>
    </PopUpWrap>
  );
};
