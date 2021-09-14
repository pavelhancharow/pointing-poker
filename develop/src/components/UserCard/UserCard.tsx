import { FC } from 'react';
import { IconsBox, Block } from '../../shared/IconsBox';
import { CardBox, CardText } from '../../shared/CardBox';
import { Avatar } from '../../shared/Avatar';

export const UserCard: FC = () => {
  return (
    <CardBox>
      <Avatar width="63px" height="63px">
        RG
      </Avatar>
      <CardText>
        <span className="title">Rick Giligan</span>
        <span className="description">lead software engeneer</span>
      </CardText>
      <IconsBox>
        <Block className="svg" />
      </IconsBox>
    </CardBox>
  );
};
