import { FC } from 'react';
import { TimerBox, TimerInput, TimerValue } from './style';

export const Timer: FC = (): JSX.Element => {
  return (
    <TimerBox>
      <TimerValue content="minutes">
        <TimerInput type="text" defaultValue={2} maxLength={2} />
      </TimerValue>
      :
      <TimerValue content="seconds" left="-6px">
        <TimerInput type="text" defaultValue={20} maxLength={2} />
      </TimerValue>
    </TimerBox>
  );
};
