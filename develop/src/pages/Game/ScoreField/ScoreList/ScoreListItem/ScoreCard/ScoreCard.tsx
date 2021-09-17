import { FC } from 'react';
import { CardBox, CardText } from '../../../../../../shared/CardBox';
import { Avatar } from '../../../../../../shared/Avatar';

export const ScoreCard: FC = (): JSX.Element => {
  return (
    <CardBox width="200px" height="54px" justifyContent="space-around">
      <Avatar width="40px" height="40px" fontSize="18px">
        RG
      </Avatar>
      <CardText justifyContent="center" fontSize="20px" lineHeight="16px">
        <span className="title">Rick Giligan</span>
        <span className="description">lead software engeneer</span>
      </CardText>
    </CardBox>
  );
};
