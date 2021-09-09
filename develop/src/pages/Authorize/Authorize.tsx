import { FC } from 'react';
import { Container, GameLogo } from './style';
import { NewGame } from './NewGame';
import { LinkConnect } from './LinkConnect';

export const Authorize: FC = (): JSX.Element => {
  return (
    <>
      <Container>
        <GameLogo />
        <NewGame />
        <LinkConnect />
      </Container>
    </>
  );
};
