import styled from 'styled-components';
import { FlexBox } from '../../shared/FlexBox';

export const IssueContainer = styled(FlexBox)`
  width: 250px;
  height: 63px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  font-style: normal;
  font-weight: 300;
`;

type TextContainerType = {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
};

export const TextContainer = styled.span<TextContainerType>`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: ${({ lineHeight }) => lineHeight};
`;

TextContainer.defaultProps = {
  color: 'inherit',
  fontSize: 'inherit',
  fontWeight: 'inherit',
  lineHeight: 'inherit'
};
