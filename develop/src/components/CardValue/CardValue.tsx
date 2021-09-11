import { FC } from 'react';
import { CardValueContainer, TextContainer } from './CardValueStyled';
import { FlexBox } from '../../shared/FlexBox';

export const CardValue: FC = (): JSX.Element => {
  return (
    <div>
      <CardValueContainer flexDirection="column" justifyContent="space-between" padding="4px">
        <FlexBox justifyContent="flex-start">
          <TextContainer fontSize="12px">SP</TextContainer>
        </FlexBox>
        <FlexBox justifyContent="center">
          <TextContainer fontSize="50px" fontWeight="700">
            321
          </TextContainer>
        </FlexBox>
        <FlexBox justifyContent="flex-end">
          <TextContainer fontSize="12px" rotate="rotate(180deg)">
            SP
          </TextContainer>
        </FlexBox>
      </CardValueContainer>
    </div>
  );
};
