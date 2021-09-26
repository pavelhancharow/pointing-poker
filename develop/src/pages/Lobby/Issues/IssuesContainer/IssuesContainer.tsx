import { FC } from 'react';
import { CardBox, CardText } from '../../../../shared/style/CardBox';
import { Add, Delete, IconsBox, Pen } from '../../../../shared/style/IconsBox';
import { ItemsBox } from '../../style';

export const IssuesContainer: FC = (): JSX.Element => {
  return (
    <ItemsBox>
      <CardBox type="issue">
        <CardText type="issue">
          <span className="title">Issue 542</span>
          <span className="description">Low prority</span>
        </CardText>
        <IconsBox width="75px">
          <Pen className="svg" />
          <Delete className="svg red" />
        </IconsBox>
      </CardBox>
      <CardBox type="issue">
        <CardText type="issue">
          <span className="title">Crete new Issue</span>
        </CardText>
        <IconsBox fontSize="44px">
          <Add className="svg" />
        </IconsBox>
      </CardBox>
    </ItemsBox>
  );
};
