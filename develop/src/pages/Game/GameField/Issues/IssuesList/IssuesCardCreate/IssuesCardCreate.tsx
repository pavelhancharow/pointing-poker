import { FC } from 'react';
import { CardBox, CardText } from '../../../../../../shared/style/CardBox';
import { Add, IconsBox } from '../../../../../../shared/IconsBox';

export const IssuesCardCreate: FC = (): JSX.Element => {
  return (
    <CardBox type="issue">
      <CardText type="issue">
        <span className="title">Crete new Issue</span>
      </CardText>
      <IconsBox fontSize="32px">
        <Add className="svg" />
      </IconsBox>
    </CardBox>
  );
};
