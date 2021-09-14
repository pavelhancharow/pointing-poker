import { FC } from 'react';
import { LobbyPageBox } from './style';
import { FlexBox } from '../../shared/FlexBox';
import { Issues } from './Issues';
import { Members } from './Members';
import { UserMenu } from './UserMenu';
import { Settings } from './Settings';
import { CardValues } from './Settings/CardValues';

export const Lobby: FC = (): JSX.Element => {
  return (
    <LobbyPageBox flexDirection="column" padding="40px 26px 40px" width="1000px" gap="50px">
      <UserMenu />
      <Issues />
      <Members />
      <Settings />
    </LobbyPageBox>
  );
};
