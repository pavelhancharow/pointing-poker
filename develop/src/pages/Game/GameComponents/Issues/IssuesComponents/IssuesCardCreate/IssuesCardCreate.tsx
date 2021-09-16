import { FC } from 'react';
import { CardBox, CardText } from '../../../../../../shared/CardBox';
import { Add, IconsBox } from '../../../../../../shared/IconsBox';

export const IssuesCardCreate: FC = (): JSX.Element => {
  return (
    <CardBox width="250px" height="63px">
      <CardText fontSize="24px">
        <span className="title">Crete new Issue</span>
      </CardText>
      <IconsBox fontSize="32px">
        <Add className="svg" />
      </IconsBox>
    </CardBox>
  );
};
