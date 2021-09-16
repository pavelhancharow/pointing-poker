import { FC } from 'react';
import { CardBox, CardText } from '../../../../../../shared/CardBox';
import { Close, IconsBox } from '../../../../../../shared/IconsBox';

export const IssuesCard: FC = (): JSX.Element => {
  return (
    <CardBox width="250px" height="63px" margin="0 0 22px 0">
      <CardText fontSize="30px" lineHeight="25px">
        <span className="title">Issue 13</span>
        <span className="description">Low prority</span>
      </CardText>
      <IconsBox fontSize="32px">
        <Close className="svg" />
      </IconsBox>
    </CardBox>
  );
};
