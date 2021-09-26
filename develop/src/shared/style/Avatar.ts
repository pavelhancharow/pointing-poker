import { FC } from 'react';
import styled from 'styled-components';
import { FlexBox } from './FlexBox';

type AvatarProps = {
  small?: boolean;
  large?: boolean;
  imgSrc?: string;
};

export const Avatar: FC<AvatarProps> = styled(FlexBox)`
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  font-size: 30px;
  line-height: 35px;
  font-weight: 700;
  color: #ffffff;
  text-transform: uppercase;
  text-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  background: center / cover no-repeat;
  background-color: #60dabf;
  background-image: url(${({ imgSrc }: AvatarProps) => imgSrc});
  box-shadow: ${({ imgSrc }) => !imgSrc && 'inset 0 4px 8px rgba(0, 0, 0, 0.2)'};

  ${({ small }) =>
    small &&
    `
    width: 32px;
    height: 32px;
    font-size: 20px;
  `}

  ${({ large }) =>
    large &&
    `
    width: 83px;
    height: 83px;
    font-size: 48px;
  `}
`;

Avatar.defaultProps = {
  imgSrc: ''
};
