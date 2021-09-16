import { FC } from 'react';
import { FlexBox } from '../../../../shared/FlexBox';
import { TextContainer } from '../../Style/Style';

export const Heading: FC = (): JSX.Element => {
  return (
    <FlexBox justifyContent="center" margin="40px 0 0 0">
      <TextContainer>Spring 23 planning (issues 13, 533, 5623, 3252, 6623, ...)</TextContainer>
    </FlexBox>
  );
};
