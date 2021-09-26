import { FC } from 'react';
import { UserCard } from '../../../../../shared/UserCard';
import { FlexBox } from '../../../../../shared/style/FlexBox';
import { ScoreProgressCard } from './ScoreProgressCard';

export const ScoreListItem: FC = (): JSX.Element => {
  return (
    <FlexBox justifyContent="space-between" margin="0 0 12px 0">
      <ScoreProgressCard />
      <UserCard small iconSize="22px" />
    </FlexBox>
  );
};
