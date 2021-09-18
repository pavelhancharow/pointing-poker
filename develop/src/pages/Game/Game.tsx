import { FC } from 'react';
import { FlexBox } from '../../shared/FlexBox';
import { GameField } from './GameField';
import { ScoreField } from './ScoreField';

export const Game: FC = (): JSX.Element => {
  return (
    <FlexBox>
      <GameField />
      <ScoreField />
    </FlexBox>
  );
};
