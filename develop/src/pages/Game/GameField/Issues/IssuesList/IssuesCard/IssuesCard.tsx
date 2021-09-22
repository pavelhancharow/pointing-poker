import { FC } from 'react';
import { CardBox, CardText } from '../../../../../../shared/style/CardBox';
import { Close, IconsBox } from '../../../../../../shared/IconsBox';

export const IssuesCard: FC = (): JSX.Element => {
  return (
    <CardBox type="issue">
      <CardText type="issue">
        <span className="title">Issue 13</span>
        <span className="description">Low prority</span>
      </CardText>
      <IconsBox fontSize="32px">
        <Close className="svg" />
      </IconsBox>
    </CardBox>
  );
};
