import styled from 'styled-components';
import { FlexBox } from '../../shared/FlexBox';

export const CardValueContainer = styled(FlexBox)`
  width: 100px;
  height: 162px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`;

type TextContainerType = {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  rotate?: string;
};

export const TextContainer = styled.span<TextContainerType>`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: ${({ lineHeight }) => lineHeight};
  transform: ${({ rotate }) => rotate}; ;
`;

TextContainer.defaultProps = {
  color: 'inherit',
  fontSize: 'inherit',
  fontWeight: 'inherit',
  lineHeight: 'inherit',
  rotate: 'inherit'
};
