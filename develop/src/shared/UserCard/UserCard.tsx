import { FC } from 'react';
import { IconsBox, Block } from '../../shared/IconsBox';
import { CardBox, CardText } from '../style/CardBox';
import { Avatar } from '../style/Avatar';

type UserCardProps = {
  small?: boolean;
  master?: boolean;
  btn?: boolean;
  iconSize?: string;
};

export const UserCard: FC<UserCardProps> = ({ small, master, btn, iconSize }) => {
  return (
    <CardBox type={small ? 'user-small' : 'user'} btn={btn}>
      <Avatar small={small}>RG</Avatar>
      <CardText type={small ? 'user-small' : 'user'} btn={btn}>
        {master && <span className="master">IT'S YOU</span>}
        <span className="title">Rick Giligan</span>
        <span className="description">lead software engeneer</span>
      </CardText>
      {!btn && (
        <IconsBox fontSize={iconSize}>
          <Block className="svg" />
        </IconsBox>
      )}
    </CardBox>
  );
};

UserCard.defaultProps = {
  small: false,
  master: false,
  btn: false,
  iconSize: IconsBox.defaultProps?.fontSize
};
