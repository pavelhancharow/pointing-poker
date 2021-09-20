import { FC } from 'react';
import { Button } from '../../../../shared/style/Button';
import { FlexBox } from '../../../../shared/FlexBox';

export const InfoButtons: FC = (): JSX.Element => {
  return (
    <FlexBox justifyContent="space-between">
      <Button primary>Start Game</Button>
      <Button>Cancel Game</Button>
    </FlexBox>
  );
};
