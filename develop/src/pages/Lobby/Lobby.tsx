import { FC } from 'react';
import { LobbyBox } from './style';
import { Issues } from './Issues';
import { Members } from './Members';
import { Info } from './Info';
import { GameSettings } from './GameSettings';
import { Modal } from '../../shared/Modal';
import { CreateIssueForm } from '../../components/Form/CreateIssue';
import { KickPlayer } from '../../components/Form/KickPlayer';

export const Lobby: FC = (): JSX.Element => {
  return (
    <>
      <LobbyBox>
        <Info />
        <Members />
        <Issues />
        <GameSettings />
      </LobbyBox>
      <Modal forLobby>
        {/* <CreateIssueForm /> */}
        {/* <KickPlayer type="master" /> */}
      </Modal>
    </>
  );
};
