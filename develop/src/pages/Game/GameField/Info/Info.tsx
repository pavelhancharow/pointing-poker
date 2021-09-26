import { FC } from 'react';
import { FlexBox } from '../../../../shared/style/FlexBox';
import { Title } from '../../../../shared/style/Title';
import { InfoMaster } from './InfoMaster';

export const Info: FC = (): JSX.Element => {
  return (
    <FlexBox flexDirection="column" margin="0 0 90px 0">
      <Title>Spring 23 planning (issues 13, 533, 5623, 3252, 6623, ...)</Title>
      <InfoMaster />
    </FlexBox>
    // <FlexBox justifyContent="center" margin="40px 0 0 0">
    //   <TextContainer>Spring 23 planning (issues 13, 533, 5623, 3252, 6623, ...)</TextContainer>
    // </FlexBox>
  );
};
