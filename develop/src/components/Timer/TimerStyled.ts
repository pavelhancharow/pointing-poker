import styled from 'styled-components';
import { FlexBox } from '../../shared/FlexBox';

export const TimerContainer = styled(FlexBox)`
  width: 150px;
  height: 70px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  border: 1px solid #eeeeee;
`;

type TextContainerType = {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
};

export const TextContainer = styled.span<TextContainerType>`
  font-size: 'Ruda';
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

export const TimeValueWrapper = styled(TextContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: bold;
  line-height: 81px;
  height: 36px;
`;

export const TimeValueSecondWrapper = styled(TimeValueWrapper)`
  background: #ffffff;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.18);
  border-radius: 4px;
  padding: 4px 2px;
`;
