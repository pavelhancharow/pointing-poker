import { FC } from 'react';
import { ItemsBox } from '../../style';
import { AdminAsPlayer } from './AdminAsPlayer';
import { ChangeCards } from './ChangeCards';
import { IsTimer } from './IsTimer';
import { ScoreType } from './ScoreType';
import { ScoreTypeShort } from './ScoreTypeShort';
import { RoundTime } from './RoundTime';
import { AddCardValues } from './AddCardValues';

export const SettingsForm: FC = (): JSX.Element => {
  return (
    <ItemsBox flexDirection="column" gap="20px" width="60%">
      <AdminAsPlayer />
      <ChangeCards />
      <IsTimer />
      <ScoreType />
      <ScoreTypeShort />
      <RoundTime />
      <AddCardValues />
    </ItemsBox>
  );
};
