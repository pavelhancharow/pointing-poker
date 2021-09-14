import { FC } from 'react';
import { LobbyBox } from './style';
import { Issues } from './Issues';
import { Members } from './Members';
import { Info } from './Info';
import { GameSettings } from './GameSettings';
import { Modal } from './Modal';

export const Lobby: FC = (): JSX.Element => {
  return (
    <>
      <LobbyBox>
        <Info />
        <Members />
        <Issues />
        <GameSettings />
      </LobbyBox>
      <Modal />
    </>
  );
};
