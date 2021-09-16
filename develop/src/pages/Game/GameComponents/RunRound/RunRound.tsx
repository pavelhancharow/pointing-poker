import { FC } from 'react';
import { Button } from '../../../../shared/Button';
import { RunRoundBox } from '../../Style/Style';
import { GameTimer } from './RunRoundComponents/GameTimer/GameTimer';

export const RunRound: FC = (): JSX.Element => {
  return (
    <RunRoundBox>
      <GameTimer />
      <Button>Run Round</Button>
    </RunRoundBox>
  );
};
