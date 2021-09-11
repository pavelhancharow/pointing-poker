import { FC } from 'react';
import { PopUp, PopUpWrap } from '../../../shared/Popup';
import { ConnectToLobbyForm } from '../../../components/Form/ConnectToLobby';

export const Modal: FC = (): JSX.Element => {
  return (
    <PopUpWrap>
      <PopUp flexDirection="column" width="876px" margin="0 auto" padding="55px 35px 33px">
        <ConnectToLobbyForm />
      </PopUp>
    </PopUpWrap>
  );
};
