import { FC } from 'react';
import { Button } from '../../../../shared/Button';
import { FlexBox } from '../../../../shared/FlexBox';

export const InfoButtons: FC = (): JSX.Element => {
  return (
    <FlexBox justifyContent="space-between">
      <Button>Start Game</Button>
      <Button color="#2b3a67" background="#ffffff">
        Cancel Game
      </Button>
    </FlexBox>
  );
};
