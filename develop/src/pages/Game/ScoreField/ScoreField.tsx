import { FC } from 'react';
import { FlexBox } from '../../../shared/style/FlexBox';
import { ScoreTitle } from './ScoreTitle';
import { ScoreList } from './ScoreList';

export const ScoreField: FC = (): JSX.Element => {
  return (
    <FlexBox width="33%" padding="40px 24px 31px 29px" flexDirection="column">
      <ScoreTitle />
      <ScoreList />
    </FlexBox>
  );
};
