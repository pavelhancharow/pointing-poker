import { FC } from 'react';
import { GameCardBox } from '../../../../../../shared/GameCardBox';
import { Circle, Pause, Pen } from '../../../../../../shared/IconsBox';
import { ItemsBox } from '../../../../style';

export const CardValues: FC = (): JSX.Element => {
  return (
    <ItemsBox>
      <GameCardBox content="Unknow" fontSize="70px">
        <Pause className="main" />
        <Pen className="edit" />
      </GameCardBox>
      <GameCardBox content="SP" fontSize="70px">
        12
        <Pen className="edit" />
      </GameCardBox>
      <GameCardBox content="SP" fontSize="70px">
        1
        <Pen className="edit" />
      </GameCardBox>
      <GameCardBox content="SP" fontSize="70px">
        13
        <Pen className="edit" />
      </GameCardBox>
      <GameCardBox fontSize="70px" color="#0000006e">
        <Circle className="main" />
      </GameCardBox>
    </ItemsBox>
  );
};
