import { FC } from 'react';
import { FlexBox } from '../../../../shared/style/FlexBox';
import { ScoreListItem } from './ScoreListItem';

export const ScoreList: FC = (): JSX.Element => {
  return (
    <FlexBox flexDirection="column">
      <ScoreListItem />
      <ScoreListItem />
      <ScoreListItem />
      <ScoreListItem />
      <ScoreListItem />
      <ScoreListItem />
    </FlexBox>
  );
};
