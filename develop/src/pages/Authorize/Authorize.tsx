import { FC } from 'react';
import { AuthorizeBox, GameLogo } from './style';
import { NewGame } from './NewGame';
import { LinkConnect } from './LinkConnect';
import { Modal } from '../../shared/Modal';
import { FlexBox } from '../../shared/style/FlexBox';
import { ConnectToLobbyForm } from '../../components/Form/ConnectToLobby';

export const Authorize: FC = (): JSX.Element => {
  return (
    <>
      <AuthorizeBox>
        <GameLogo />
        <FlexBox flexDirection="column" width="515px">
          <NewGame />
          <LinkConnect />
        </FlexBox>
      </AuthorizeBox>
      <Modal>{/* <ConnectToLobbyForm /> */}</Modal>
    </>
  );
};
