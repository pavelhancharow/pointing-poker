import styled from 'styled-components';
import { FlexBox } from '../../shared/FlexBox';

type LobbyBox = {
  gap?: string;
};

type BlockBoxProps = {
  flexWrap?: string;
  gap?: string;
};

type BlockTitleProps = {
  fontFamily?: string;
  fontWeight?: string;
  fontSize?: string;
  lineHeight?: string;
};

export const LobbyPageBox = styled(FlexBox)<LobbyBox>`
  gap: ${({ gap }) => gap};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const BlockBox = styled(FlexBox)<BlockBoxProps>`
  flex-wrap: ${({ flexWrap }) => flexWrap};
  gap: ${({ gap }) => gap};
`;

export const BlockTitle = styled(FlexBox)<BlockTitleProps>`
  font-family: ${({ fontFamily }) => fontFamily};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: ${({ fontSize }) => fontSize};
  line-height: ${({ lineHeight }) => lineHeight};
`;

LobbyPageBox.defaultProps = {
  gap: 'initial'
};

BlockBox.defaultProps = {
  flexWrap: 'initial',
  gap: 'initial'
};

BlockTitle.defaultProps = {
  fontFamily: 'Roboto',
  fontWeight: '700',
  fontSize: '24px',
  lineHeight: '30px'
};
