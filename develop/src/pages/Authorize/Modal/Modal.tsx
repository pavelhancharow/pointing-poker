import { FC } from 'react';
import { PopUp, PopUpWrap } from '../../../shared/Popup';
import { ConnectToLobbyForm } from '../../../components/Form/ConnectToLobby';

export const Modal: FC = (): JSX.Element => {
  return (
    <PopUpWrap>
      <PopUp>
        <ConnectToLobbyForm />
      </PopUp>
    </PopUpWrap>
  );
};
