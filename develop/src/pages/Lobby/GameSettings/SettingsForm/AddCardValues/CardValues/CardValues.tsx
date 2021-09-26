import { FC } from 'react';
import { Circle, Pause, Pen } from '../../../../../../shared/IconsBox';
import { ItemsBox } from '../../../../style';
import { GameCardBox } from './style';

export const CardValues: FC = (): JSX.Element => {
  return (
    <ItemsBox>
      <GameCardBox content="Unknow">
        <Pause className="main" />
        <Pen className="edit" />
      </GameCardBox>
      <GameCardBox content="SP">
        12
        <Pen className="edit" />
      </GameCardBox>
      <GameCardBox content="SP">
        1
        <Pen className="edit" />
      </GameCardBox>
      <GameCardBox content="SP">
        13
        <Pen className="edit" />
      </GameCardBox>
      <GameCardBox color="#0000006e">
        <Circle className="main" />
      </GameCardBox>
    </ItemsBox>
  );
};
