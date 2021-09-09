import { FC } from 'react';
import { PlayerAvatar, PlayerAvatarInitials } from './AvatarStyle';

const getIinitials = (nameString: string): string => {
  const nameArr = nameString.split(' ');

  if (nameArr.length > 1) {
    return nameArr.reduce((acc, cur, i = 1) => acc[0] + cur[0], nameArr[0]);
  }

  return nameArr[0][0] + nameArr[0][nameArr[0].length - 1];
};

export type AvatarProps = {
  imgSrc?: string | null;
  name?: string | null;
  width?: string;
};

export const Avatar: FC<AvatarProps> = (props): JSX.Element => {
  const { imgSrc, name, width } = props;

  return (
    <PlayerAvatar imgSrc={imgSrc} width={width}>
      {!imgSrc && name && <PlayerAvatarInitials>{getIinitials(name)}</PlayerAvatarInitials>}
    </PlayerAvatar>
  );
};

Avatar.defaultProps = {
  imgSrc: undefined,
  name: undefined,
  width: '83px'
};
