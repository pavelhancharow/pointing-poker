import { FC } from 'react';
import { TimerBox, TimerInput, TimerValue } from '../../../../../../components/Timer/style';

export const GameTimer: FC = (): JSX.Element => {
  return (
    <TimerBox width="148px" height="63px" margin="0 0 34px 0">
      <TimerValue fontSize="40px" content="minutes">
        <TimerInput width="60px" height="40px" type="text" defaultValue={2} maxLength={2} />
      </TimerValue>
      :
      <TimerValue fontSize="40px" content="seconds" left="-6px">
        <TimerInput width="60px" height="40px" type="text" defaultValue={20} maxLength={2} />
      </TimerValue>
    </TimerBox>
  );
};
