import { FC } from 'react';
import { FlexBox } from '../../../../../../shared/FlexBox';
import { ScoreCard } from '../ScoreCard/ScoreCard';
import { ScoreProgressCard } from '../ScoreProgressCard/ScoreProgressCard';

const TEMP_ARRAY = [1, 2, 3, 4, 5];

export const ScoreList: FC = (): JSX.Element => {
  return (
    <FlexBox flexDirection="column">
      {TEMP_ARRAY.map((item) => (
        <FlexBox key={item} margin="0 0 6px 0" justifyContent="space-around">
          <ScoreProgressCard />
          <ScoreCard />
        </FlexBox>
      ))}
    </FlexBox>
  );
};
