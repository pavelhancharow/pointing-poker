import { FC } from 'react';
import { CardBox, CardText } from '../../../../../../shared/CardBox';
import { Avatar } from '../../../../../../shared/Avatar';

export const ScoreProgressCard: FC = (): JSX.Element => {
  return (
    <CardBox width="200px" height="54px" justifyContent="space-around">
      <CardText justifyContent="center" fontSize="30px" lineHeight="25px">
        <span className="title">In progress</span>
      </CardText>
    </CardBox>
  );
};
