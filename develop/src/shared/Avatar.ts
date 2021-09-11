import styled from 'styled-components';
import { FlexBox } from './FlexBox';

type AvatarType = {
  justifyContent?: string;
  alignItems?: string;
  width?: string;
  height?: string;
  fontSize?: string;
  fontWeight?: string;
  backgroundColor?: string;
  imgSrc?: string;
  boxShadow?: string;
};

export const Avatar = styled(FlexBox)`
  font-size: ${({ fontSize }: AvatarType) => fontSize};
  font-weight: ${({ fontWeight }: AvatarType) => fontWeight};
  color: #ffffff;
  text-transform: uppercase;
  text-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);

  border-radius: 50%;
  background: center / cover no-repeat;
  background-color: ${({ backgroundColor }: AvatarType) => backgroundColor};
  background-image: url(${({ imgSrc }: AvatarType) => imgSrc});
  box-shadow: ${({ boxShadow }: AvatarType) => boxShadow};
`;

Avatar.defaultProps = {
  justifyContent: 'center',
  alignItems: 'center',
  width: '83px',
  height: '83px',
  fontSize: '48px',
  fontWeight: '700',
  backgroundColor: '#60dabf',
  imgSrc: '',
  boxShadow: 'inset 0 4px 8px rgba(0, 0, 0, 0.2)'
};
