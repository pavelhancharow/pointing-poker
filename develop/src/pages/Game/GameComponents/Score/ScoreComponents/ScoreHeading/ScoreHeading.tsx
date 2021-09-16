import React from 'react';
import { FlexBox } from '../../../../../../shared/FlexBox';
import { TextContainer } from '../../../../Style/Style';

export const ScoreHeading: React.FC = (): JSX.Element => {
  return (
    <FlexBox width="420px" margin="40px 24px 0 24px" justifyContent="space-around">
      <TextContainer fontWeight="bold" fontSize="24px">
        Score:
      </TextContainer>
      <TextContainer fontWeight="bold" fontSize="24px">
        Players:
      </TextContainer>
    </FlexBox>
  );
};
