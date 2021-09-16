import { FC } from 'react';
import { FlexBox } from '../../../../shared/FlexBox';
import { ScoreHeading } from './ScoreComponents/ScoreHeading/ScoreHeading';
import { ScoreList } from './ScoreComponents/ScoreList/ScoreList';

export const Score: FC = (): JSX.Element => {
  return (
    <FlexBox flexDirection="column" margin="0 0 8px 0">
      <ScoreHeading />
      <ScoreList />
    </FlexBox>
  );
};
