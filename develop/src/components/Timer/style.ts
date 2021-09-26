import styled from 'styled-components';
import { FlexBox } from '../../shared/style/FlexBox';

export const TimerBox = styled(FlexBox)`
  font-family: Ruda;
  font-size: 24px;
  line-height: 30px;

  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #eeeeee;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

TimerBox.defaultProps = {
  alignItems: 'center',
  width: '200px',
  height: '80px'
};

type TimerValueType = {
  content?: string;
  top?: string;
  left?: string;
  fontSize?: string;
  lineHeight?: string;
  fontSizeBefore?: string;
  lineHeightBefore?: string;
};

export const TimerValue = styled(FlexBox)`
  position: relative;
  padding-top: 4px;
  font-size: ${({ fontSize }: TimerValueType) => fontSize};
  line-height: ${({ lineHeight }: TimerValueType) => lineHeight};

  &::before {
    content: '${({ content }: TimerValueType) => content}';
    position: absolute;
    top: ${({ top }: TimerValueType) => top};
    left: ${({ left }: TimerValueType) => left};
    font-family: Ruda;
    font-size: ${({ fontSizeBefore }: TimerValueType) => fontSizeBefore};
    line-height: ${({ lineHeightBefore }: TimerValueType) => lineHeightBefore};
    color: rgba(0, 0, 0, 0.5);
  }
`;

TimerValue.defaultProps = {
  content: '',
  top: '0',
  left: '4px',
  justifyContent: 'center',
  alignItems: 'center',
  width: '49%',
  height: '100%',
  fontSize: '64px',
  lineHeight: '81px',
  fontSizeBefore: '12px',
  lineHeightBefore: '15px'
};

type TimerInputType = {
  width?: string;
  height?: string;
};

export const TimerInput = styled.input`
  width: ${({ width }: TimerInputType) => width};
  height: ${({ height }: TimerInputType) => height};
  text-align: center;
  background: #ffffff;
  border: none;
  border-radius: 6px;
  text-overflow: initial;

  &:focus {
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.18);
  }

  &:disabled {
    color: inherit;
  }
`;

TimerInput.defaultProps = {
  width: '100%',
  height: '55px'
};
