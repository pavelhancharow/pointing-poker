import { FC } from 'react';
import { GameFieldBox } from './style';
import { Info } from './Info';
import { Issues } from './Issues';

export const GameField: FC = (): JSX.Element => {
  return (
    <GameFieldBox>
      <Info />
      <Issues />
    </GameFieldBox>
  );
};
