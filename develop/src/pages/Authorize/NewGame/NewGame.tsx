import { FC } from 'react';
import { BlockTitle, Description, FlexBox, Wrapper } from '../style';
import { Button } from '../../../shared/Button';

export const NewGame: FC = (): JSX.Element => {
  return (
    <Wrapper>
      <BlockTitle marginBottom="66px">Start your planning:</BlockTitle>
      <FlexBox alignItems="center" justifyContent="space-between">
        <Description>Create session:</Description>
        <Button>Start new game</Button>
      </FlexBox>
    </Wrapper>
  );
};
