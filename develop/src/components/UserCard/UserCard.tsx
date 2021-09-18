import { FC } from 'react';
import { IconsBox, Block } from '../../shared/IconsBox';
import { CardBox, CardText } from '../../shared/CardBox';
import { Avatar } from '../../shared/Avatar';

type UserCardType = {
  master?: boolean;
  btn?: boolean;
  padding?: string;
  width?: string;
  fontSize?: string;
  lineHeight?: string;
  avatarSize?: string;
  fontSizeDes?: string;
  lineHeightDes?: string;
  iconSize?: string;
};

export const UserCard: FC<UserCardType> = ({
  master,
  btn,
  padding,
  width,
  fontSize,
  lineHeight,
  avatarSize,
  fontSizeDes,
  lineHeightDes,
  iconSize
}) => {
  return (
    <CardBox width={width} padding={padding} btn={btn}>
      <Avatar fontSize={fontSize} lineHeight={lineHeight} width={avatarSize} height={avatarSize}>
        RG
      </Avatar>
      <CardText
        btn={btn}
        fontSize={fontSize}
        lineHeight={lineHeight}
        fontSizeDes={fontSizeDes}
        lineHeightDes={lineHeightDes}
      >
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
  master: false,
  btn: false,
  padding: CardBox.defaultProps?.padding,
  width: CardBox.defaultProps?.width,
  avatarSize: Avatar.defaultProps?.width,
  fontSize: Avatar.defaultProps?.fontSize,
  lineHeight: Avatar.defaultProps?.lineHeight,
  fontSizeDes: CardText.defaultProps?.fontSizeDes,
  lineHeightDes: CardText.defaultProps?.lineHeightDes,
  iconSize: IconsBox.defaultProps?.fontSize
};
