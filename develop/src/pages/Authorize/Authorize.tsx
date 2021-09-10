import { FC } from 'react';
import { AuthorizeBox, GameLogo } from './style';
import { NewGame } from './NewGame';
import { LinkConnect } from './LinkConnect';
import { Modal } from './Modal';

export const Authorize: FC = (): JSX.Element => {
  return (
    <>
      <AuthorizeBox display="flex" flexDirection="column" padding="130px 26px 232px">
        <GameLogo />
        <NewGame />
        <LinkConnect />
      </AuthorizeBox>
      <Modal />
    </>
  );
};
