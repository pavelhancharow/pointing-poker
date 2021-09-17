import { FC } from 'react';
import { UserCard } from '../../../../../components/UserCard';
import { FlexBox } from '../../../../../shared/FlexBox';
import { ScoreProgressCard } from './ScoreProgressCard';

export const ScoreListItem: FC = (): JSX.Element => {
  return (
    <FlexBox justifyContent="space-between" margin="0 0 12px 0">
      <ScoreProgressCard />
      <UserCard
        padding="6px 9px"
        width="200px"
        avatarSize="32px"
        fontSize="20px"
        lineHeight="23px"
        fontSizeDes="8px"
        lineHeightDes="10px"
        iconSize="22px"
      />
    </FlexBox>
  );
};
