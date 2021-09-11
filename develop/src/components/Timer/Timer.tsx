import { FC } from 'react';
import { TimerContainer, TimeValueWrapper, TimeValueSecondWrapper, TextContainer } from './TimerStyled';
import { FlexBox } from '../../shared/FlexBox';

export const Timer: FC = (): JSX.Element => {
  return (
    <div>
      <TimerContainer flexDirection="column" alignItems="center" justifyContent="flex-start">
        <FlexBox width="130px" justifyContent="space-between" margin="0">
          <TextContainer fontSize="12px">minutes</TextContainer>
          <TextContainer fontSize="12px">seconds</TextContainer>
        </FlexBox>
        <FlexBox width="120px" justifyContent="space-between">
          <TimeValueWrapper fontSize="32px">2</TimeValueWrapper>
          <TimeValueWrapper>:</TimeValueWrapper>
          <TimeValueSecondWrapper fontSize="32px">20</TimeValueSecondWrapper>
        </FlexBox>
      </TimerContainer>
    </div>
  );
};
