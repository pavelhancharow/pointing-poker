import { FC } from 'react';
import { TimerBox, TimerInput, TimerValue } from './style';

type TimerType = {
  disabled?: boolean;
  width?: string;
  height?: string;
  heightInput?: string;
  fontSize?: string;
  lineHeight?: string;
  fontSizeBefore?: string;
  lineHeightBefore?: string;
};

export const Timer: FC<TimerType> = ({
  disabled,
  width,
  height,
  heightInput,
  fontSize,
  lineHeight,
  fontSizeBefore,
  lineHeightBefore
}): JSX.Element => {
  return (
    <TimerBox width={width} height={height}>
      <TimerValue
        content="minutes"
        fontSize={fontSize}
        lineHeight={lineHeight}
        fontSizeBefore={fontSizeBefore}
        lineHeightBefore={lineHeightBefore}
      >
        <TimerInput disabled={disabled} type="text" defaultValue={2} maxLength={2} height={heightInput} />
      </TimerValue>
      :
      <TimerValue
        content="seconds"
        left="-6px"
        fontSize={fontSize}
        lineHeight={lineHeight}
        fontSizeBefore={fontSizeBefore}
        lineHeightBefore={lineHeightBefore}
      >
        <TimerInput disabled={disabled} type="text" defaultValue={20} maxLength={2} height={heightInput} />
      </TimerValue>
    </TimerBox>
  );
};

Timer.defaultProps = {
  disabled: false,
  width: TimerBox.defaultProps?.width,
  height: TimerBox.defaultProps?.height,
  heightInput: TimerInput.defaultProps?.height,
  fontSize: TimerValue.defaultProps?.fontSize,
  lineHeight: TimerValue.defaultProps?.lineHeight,
  fontSizeBefore: TimerValue.defaultProps?.fontSizeBefore,
  lineHeightBefore: TimerValue.defaultProps?.lineHeightBefore
};
