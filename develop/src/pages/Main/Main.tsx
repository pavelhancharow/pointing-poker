import { FC } from 'react';
import { useSelector } from 'react-redux';
import { ConnectToLobbyForm } from '../../components/Form/ConnectToLobby';
import { Container } from '../../shared/Container';
import { PopUp, PopUpWrap } from '../../shared/Popup';
import { RootState } from '../../store/types/todo';
import { Authorize } from '../Authorize';

export const Main: FC = (): JSX.Element => {
  const isModalState = useSelector((state: RootState) => state.modalReducer.modal);
  return (
    <main>
      <Container maxWidth="1000px">
        <Authorize />
      </Container>
      <PopUpWrap display={isModalState ? 'flex' : 'none'}>
        <PopUp>
          <ConnectToLobbyForm />
        </PopUp>
      </PopUpWrap>
    </main>
  );
};
