import { FC } from 'react';
import { CardBox, CardText } from '../../../../shared/CardBox';
import { Add, Delete, IconsBox, Pen } from '../../../../shared/IconsBox';
import { ItemsBox } from '../../style';

export const IssuesContainer: FC = (): JSX.Element => {
  return (
    <ItemsBox>
      <CardBox>
        <CardText>
          <span className="title">Issue 542</span>
          <span className="description">Low prority</span>
        </CardText>
        <IconsBox width="75px">
          <Pen className="svg" />
          <Delete className="svg red" />
        </IconsBox>
      </CardBox>
      <CardBox>
        <CardText>
          <span className="title">Crete new Issue</span>
        </CardText>
        <IconsBox fontSize="44px">
          <Add className="svg" />
        </IconsBox>
      </CardBox>
    </ItemsBox>
  );
};
